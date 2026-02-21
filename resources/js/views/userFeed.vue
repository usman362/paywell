<template>
  <div class="main">
    <div class="top-bar">
      <p @click="$router.push('/')" style="cursor:pointer">← Dashboard</p>
      <p>Announcements & Chat</p>
      <div></div>
    </div>

    <div class="controller-box">
      <div class="search" style="padding:0 12px">Announcements Feed</div>
    </div>
    <div class="card-wrapper">
      <div class="card-container" v-for="a in announcements" :key="a.id" style="width:320px;max-height:none">
        <div class="info">
          <h1>{{ a.title }}</h1>
          <p>{{ a.body }}</p>
        </div>
      </div>
    </div>

    <div class="controller-box">
      <div class="search" style="padding:0 12px">Chat Rooms</div>
    </div>
    <div style="display:flex; gap:10px; margin-top:10px;">
      <select v-model="activeRoomId" @change="loadMessages" style="padding:10px; border-radius:6px;">
        <option disabled value="">Select room</option>
        <option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.name }}</option>
      </select>
      <input v-model="message" placeholder="Type a message" style="flex:1; padding:10px; border-radius:6px; border:1px solid #ccc" />
      <button class="btn" @click="sendMessage">Send</button>
    </div>

    <ul style="margin-top:12px; background:#fff; border-radius:8px; padding:12px; list-style:none;">
      <li v-for="m in messages" :key="m.id" style="padding:6px 0; border-bottom:1px solid #f0f0f0;">
        <strong>{{ m.user?.name || 'User' }}:</strong> {{ m.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      announcements: [],
      rooms: [],
      activeRoomId: "",
      messages: [],
      message: "",
    };
  },
  methods: {
    async load() {
      const [{ data: feed }, { data: rooms }] = await Promise.all([
        axios.get("announcements/feed"),
        axios.get("chat/rooms"),
      ]);
      this.announcements = feed.data || [];
      this.rooms = rooms;
      if (this.rooms.length) {
        this.activeRoomId = this.rooms[0].id;
        await this.loadMessages();
      }
    },
    async loadMessages() {
      if (!this.activeRoomId) return;
      const { data } = await axios.get(`chat/rooms/${this.activeRoomId}/messages`);
      this.messages = (data.data || []).reverse();
    },
    async sendMessage() {
      if (!this.activeRoomId || !this.message.trim()) return;
      await axios.post(`chat/rooms/${this.activeRoomId}/messages`, { message: this.message });
      this.message = "";
      await this.loadMessages();
    },
  },
  created() {
    this.load();
  },
};
</script>

<style scoped>
@import url("../styles/dashboard.css");
</style>
