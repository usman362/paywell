<template>
  <div class="main chat-main">
    <div class="top-bar">
      <img src="../assets/logo.png" alt="logo" style="height: 45px; width: 70px" />
      <div><p>ADMIN CHAT</p></div>
      <div class="user-info">
        <router-link to="/dashboard" class="back-nav-btn">← Dashboard</router-link>
        <div>
          <h2>{{ user.name }}</h2>
          <p>{{ user.email }}</p>
        </div>
      </div>
    </div>

    <div class="chat-layout">
      <div class="chat-rooms-panel">
        <div class="panel-header">
          <h3>Chat rooms</h3>
          <button class="btn btn-small" @click="openCreateRoom">+ New room</button>
        </div>
        <div class="rooms-list">
          <div
            v-for="room in rooms"
            :key="room.id"
            class="room-item"
            :class="{ active: selectedRoom && selectedRoom.id === room.id }"
            @click="selectRoom(room)"
          >
            <span class="room-name">{{ room.name }}</span>
            <span class="room-meta">{{ room.messages_count }} msgs · {{ room.members_count }} members</span>
          </div>
          <p v-if="rooms.length === 0" class="empty-hint">No rooms yet. Create one.</p>
        </div>
      </div>

      <div class="chat-content">
        <template v-if="selectedRoom">
          <div class="chat-header">
            <div>
              <h3>{{ selectedRoom.name }}</h3>
              <p v-if="selectedRoom.description" class="room-desc">{{ selectedRoom.description }}</p>
            </div>
            <div class="header-actions">
              <button class="btn btn-small" @click="openManageRoom">Manage room</button>
              <button class="btn btn-small" @click="openAddMembers">Add members</button>
            </div>
          </div>
          <div class="messages-wrap" ref="messagesWrap">
            <div v-for="msg in messages" :key="msg.id" class="message-row">
              <div class="message" :class="{ own: msg.user_id === user.id }">
                <span class="message-author">{{ msg.user.name }}</span>
                <span class="message-body">{{ msg.body }}</span>
                <span class="message-time">{{ formatTime(msg.created_at) }}</span>
                <button
                  v-if="user.role === 2"
                  type="button"
                  class="msg-delete"
                  @click="deleteMessage(msg)"
                  title="Delete message"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
          <form class="send-form" @submit.prevent="sendMessage">
            <input
              v-model="newMessage"
              type="text"
              placeholder="Type a message..."
              maxlength="5000"
            />
            <button type="submit" class="btn">Send</button>
          </form>
        </template>
        <div v-else class="no-room">
          <p>Select a room or create one to start chatting.</p>
        </div>
      </div>
    </div>

    <!-- Create room modal -->
    <Modal v-model="showCreateModal" :close="() => (showCreateModal = false)">
      <div class="modal">
        <div class="right-box">
          <h2>Create chat room</h2>
          <form class="form-container" @submit.prevent="createRoom">
            <div class="input-contianer">
              <label>Room name</label>
              <input type="text" v-model="createForm.name" required />
            </div>
            <div class="input-contianer">
              <label>Description (optional)</label>
              <input type="text" v-model="createForm.description" />
            </div>
            <div class="input-contianer">
              <label>Add members (optional)</label>
              <select multiple v-model="createForm.user_ids" class="multi-select">
                <option v-for="u in allUsers" :key="u.id" :value="u.id">{{ u.name }} ({{ u.email }})</option>
              </select>
            </div>
            <div class="btn-container">
              <button class="blue-btn" type="submit">Create</button>
              <button class="white-btn" type="button" @click="showCreateModal = false">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>

    <!-- Manage room modal -->
    <Modal v-model="showManageModal" :close="() => (showManageModal = false)">
      <div class="modal">
        <div class="right-box">
          <h2>Manage room: {{ selectedRoom && selectedRoom.name }}</h2>
          <form v-if="selectedRoom" class="form-container" @submit.prevent="updateRoom">
            <div class="input-contianer">
              <label>Room name</label>
              <input type="text" v-model="manageForm.name" required />
            </div>
            <div class="input-contianer">
              <label>Description</label>
              <input type="text" v-model="manageForm.description" />
            </div>
            <div class="input-contianer">
              <label>Members</label>
              <ul class="members-list">
                <li v-for="m in roomMembers" :key="m.id">
                  {{ m.name }} ({{ m.email }})
                  <button type="button" class="btn-link danger" @click="removeMember(m)">Remove</button>
                </li>
              </ul>
            </div>
            <div class="btn-container">
              <button class="blue-btn" type="submit">Save</button>
              <button class="white-btn" type="button" @click="showManageModal = false">Close</button>
              <button class="white-btn" type="button" @click="confirmDeleteRoom" style="margin-left:8px">Delete room</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>

    <!-- Add members modal -->
    <Modal v-model="showAddMembersModal" :close="() => (showAddMembersModal = false)">
      <div class="modal">
        <div class="right-box">
          <h2>Add members to room</h2>
          <div class="input-contianer">
            <label>Select users</label>
            <select multiple v-model="addMembersForm.user_ids" class="multi-select">
              <option v-for="u in usersNotInRoom" :key="u.id" :value="u.id">{{ u.name }} ({{ u.email }})</option>
            </select>
          </div>
          <div class="btn-container">
            <button class="blue-btn" @click="addMembers">Add selected</button>
            <button class="white-btn" type="button" @click="showAddMembersModal = false">Cancel</button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      rooms: [],
      selectedRoom: null,
      messages: [],
      newMessage: "",
      allUsers: [],
      roomMembers: [],
      showCreateModal: false,
      showManageModal: false,
      showAddMembersModal: false,
      createForm: { name: "", description: "", user_ids: [] },
      manageForm: { name: "", description: "" },
      addMembersForm: { user_ids: [] },
      pollTimer: null,
    };
  },
  computed: {
    ...mapGetters(["user"]),
    usersNotInRoom() {
      if (!this.selectedRoom || !this.roomMembers.length) return this.allUsers;
      const inRoom = this.roomMembers.map((m) => m.id);
      return this.allUsers.filter((u) => !inRoom.includes(u.id));
    },
  },
  created() {
    this.fetchRooms();
    this.fetchUsers();
  },
  watch: {
    selectedRoom(room) {
      if (!room) this.stopPolling();
    },
  },
  beforeUnmount() {
    this.stopPolling();
  },
  methods: {
    async fetchRooms() {
      try {
        const { data } = await axios.get("chat/rooms");
        this.rooms = data;
      } catch (e) {
        this.$toast.show(e.response?.data?.message || "Failed to load rooms");
      }
    },
    async fetchUsers() {
      try {
        const { data } = await axios.get("chat/users");
        this.allUsers = data;
      } catch (e) {}
    },
    async selectRoom(room) {
      try {
        const { data } = await axios.get(`chat/rooms/${room.id}`);
        this.selectedRoom = data.room;
        this.messages = data.messages || [];
        this.roomMembers = data.room.members || [];
        this.manageForm.name = data.room.name;
        this.manageForm.description = data.room.description || "";
        this.$nextTick(() => this.scrollToBottom());
        this.startPolling();
      } catch (e) {
        this.$toast.show(e.response?.data?.message || "Failed to load room");
      }
    },
    async fetchMessages() {
      if (!this.selectedRoom) return;
      try {
        const { data } = await axios.get(`chat/rooms/${this.selectedRoom.id}/messages`);
        this.messages = data;
        this.$nextTick(() => this.scrollToBottom());
      } catch (e) {
        this.$toast.show("Failed to load messages");
      }
    },
    scrollToBottom() {
      const el = this.$refs.messagesWrap;
      if (el) el.scrollTop = el.scrollHeight;
    },
    startPolling() {
      this.stopPolling();
      this.pollTimer = setInterval(() => {
        if (this.selectedRoom) this.fetchMessages();
      }, 3000);
    },
    stopPolling() {
      if (this.pollTimer) {
        clearInterval(this.pollTimer);
        this.pollTimer = null;
      }
    },
    formatTime(createdAt) {
      if (!createdAt) return "";
      const d = new Date(createdAt);
      return d.toLocaleString();
    },
    openCreateRoom() {
      this.createForm = { name: "", description: "", user_ids: [] };
      this.showCreateModal = true;
    },
    async createRoom() {
      try {
        await axios.post("chat/rooms", this.createForm);
        this.$toast.show("Room created");
        this.showCreateModal = false;
        this.fetchRooms();
      } catch (e) {
        this.$toast.show(e.response?.data?.message || "Failed to create room");
      }
    },
    openManageRoom() {
      if (!this.selectedRoom) return;
      this.roomMembers = [...(this.selectedRoom.members || [])];
      this.manageForm.name = this.selectedRoom.name;
      this.manageForm.description = this.selectedRoom.description || "";
      this.showManageModal = true;
    },
    async updateRoom() {
      try {
        await axios.put(`chat/rooms/${this.selectedRoom.id}`, this.manageForm);
        this.$toast.show("Room updated");
        this.showManageModal = false;
        this.fetchRooms();
        this.selectedRoom = this.rooms.find((r) => r.id === this.selectedRoom.id) || this.selectedRoom;
      } catch (e) {
        this.$toast.show(e.response?.data?.message || "Failed to update");
      }
    },
    async confirmDeleteRoom() {
      if (!confirm("Delete this room and all messages?")) return;
      try {
        await axios.delete(`chat/rooms/${this.selectedRoom.id}`);
        this.$toast.show("Room deleted");
        this.showManageModal = false;
        this.selectedRoom = null;
        this.fetchRooms();
      } catch (e) {
        this.$toast.show(e.response?.data?.message || "Failed to delete");
      }
    },
    openAddMembers() {
      this.addMembersForm.user_ids = [];
      this.showAddMembersModal = true;
    },
    async addMembers() {
      if (!this.selectedRoom || !this.addMembersForm.user_ids.length) {
        this.showAddMembersModal = false;
        return;
      }
      try {
        await axios.post(`chat/rooms/${this.selectedRoom.id}/members`, {
          user_ids: this.addMembersForm.user_ids,
        });
        this.$toast.show("Members added");
        this.showAddMembersModal = false;
        this.refreshSelectedRoom();
      } catch (e) {
        this.$toast.show(e.response?.data?.message || "Failed to add members");
      }
    },
    async removeMember(member) {
      if (!confirm(`Remove ${member.name} from this room?`)) return;
      try {
        await axios.delete(`chat/rooms/${this.selectedRoom.id}/members/${member.id}`);
        this.roomMembers = this.roomMembers.filter((m) => m.id !== member.id);
        this.refreshSelectedRoom();
      } catch (e) {
        this.$toast.show(e.response?.data?.message || "Failed to remove");
      }
    },
    async refreshSelectedRoom() {
      if (!this.selectedRoom) return;
      const { data } = await axios.get(`chat/rooms/${this.selectedRoom.id}`);
      this.selectedRoom = { ...this.selectedRoom, ...data.room, members: data.room.members };
      this.roomMembers = data.room.members || [];
    },
    async sendMessage() {
      const body = this.newMessage.trim();
      if (!body || !this.selectedRoom) return;
      try {
        await axios.post(`chat/rooms/${this.selectedRoom.id}/messages`, { body });
        this.newMessage = "";
        this.fetchMessages();
      } catch (e) {
        this.$toast.show(e.response?.data?.message || "Failed to send");
      }
    },
    async deleteMessage(msg) {
      if (!confirm("Delete this message?")) return;
      try {
        await axios.delete(`chat/rooms/${this.selectedRoom.id}/messages/${msg.id}`);
        this.messages = this.messages.filter((m) => m.id !== msg.id);
      } catch (e) {
        this.$toast.show(e.response?.data?.message || "Failed to delete");
      }
    },
  },
};
</script>

<style scoped>
@import url("../styles/dashboard.css");
@import url("../styles/modal.css");
.chat-main {
  height: calc(100vh - 100px);
}
.chat-layout {
  display: flex;
  flex: 1;
  min-height: 0;
  gap: 16px;
  margin-top: 16px;
}
.chat-rooms-panel {
  width: 280px;
  background: white;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
}
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.panel-header h3 {
  margin: 0;
  font-size: 16px;
}
.btn-small {
  padding: 6px 12px;
  font-size: 12px;
}
.rooms-list {
  overflow-y: auto;
  flex: 1;
}
.room-item {
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 4px;
}
.room-item:hover {
  background: #f0f0f0;
}
.room-item.active {
  background: #1f487e;
  color: white;
}
.room-name {
  display: block;
  font-weight: 600;
}
.room-meta {
  font-size: 11px;
  opacity: 0.85;
}
.empty-hint {
  color: #666;
  padding: 12px;
}
.chat-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  min-width: 0;
}
.chat-header {
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.chat-header h3 {
  margin: 0 0 4px 0;
  font-size: 18px;
}
.room-desc {
  margin: 0;
  font-size: 12px;
  color: #666;
}
.header-actions {
  display: flex;
  gap: 8px;
}
.messages-wrap {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.message-row {
  display: flex;
}
.message {
  max-width: 75%;
  padding: 8px 12px;
  border-radius: 8px;
  background: #f0f0f0;
  position: relative;
}
.message.own {
  background: #1f487e;
  color: white;
  margin-left: auto;
}
.message-author {
  font-size: 11px;
  font-weight: 600;
  display: block;
  margin-bottom: 2px;
}
.message-body {
  white-space: pre-wrap;
  word-break: break-word;
}
.message-time {
  font-size: 10px;
  opacity: 0.8;
  display: block;
  margin-top: 4px;
}
.msg-delete {
  position: absolute;
  top: 4px;
  right: 6px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  opacity: 0.7;
}
.msg-delete:hover {
  opacity: 1;
}
.send-form {
  display: flex;
  padding: 12px 16px;
  border-top: 1px solid #eee;
  gap: 8px;
}
.send-form input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
}
.no-room {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}
.multi-select {
  min-height: 120px;
  width: 100%;
}
.members-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.members-list li {
  padding: 6px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-link.danger {
  color: #c00;
}
</style>
