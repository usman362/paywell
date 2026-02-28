<template>
  <div class="main">
    <div class="top-bar">
      <img src="../assets/logo.png" alt="logo" style="height: 45px; width: 70px" />
      <div><p>Announcements &amp; Mass Email</p></div>
      <div class="user-info">
        <router-link to="/dashboard" class="back-nav-btn">← Dashboard</router-link>
      </div>
    </div>

    <div class="admin-content">
      <!-- Mass email -->
      <section class="card">
        <h2>Mass email</h2>
        <p class="hint">Send an email to all users or selected users.</p>
        <form class="form-container" @submit.prevent="sendMassEmail">
          <div class="input-contianer">
            <label>Subject</label>
            <input type="text" v-model="emailForm.subject" required />
          </div>
          <div class="input-contianer">
            <label>Message body</label>
            <textarea v-model="emailForm.body" rows="5" required></textarea>
          </div>
          <div class="input-contianer">
            <label>Recipients</label>
            <div class="radio-group">
              <label class="radio-option"><input type="radio" v-model="emailForm.recipient_type" value="all" /> All active users</label>
              <label class="radio-option"><input type="radio" v-model="emailForm.recipient_type" value="selected" /> Selected users</label>
            </div>
            <div v-if="emailForm.recipient_type === 'selected'" class="multi-select-wrap">
              <label>Select users</label>
              <select multiple v-model="emailForm.user_ids" class="multi-select">
                <option v-for="u in allUsers" :key="u.id" :value="u.id">{{ u.name }} ({{ u.email }})</option>
              </select>
            </div>
          </div>
          <div class="btn-container">
            <button type="submit" class="blue-btn" :disabled="emailSending">{{ emailSending ? 'Sending…' : 'Send email' }}</button>
          </div>
        </form>
      </section>

      <!-- Announcements -->
      <section class="card">
        <div class="section-head">
          <h2>Announcements</h2>
          <button class="btn" @click="openCreateAnnouncement">+ New announcement</button>
        </div>
        <div v-if="announcementsLoading" class="loading">Loading…</div>
        <div v-else-if="announcements.length === 0" class="empty">No announcements.</div>
        <ul v-else class="announcements-list">
          <li v-for="a in announcements" :key="a.id" class="announcement-item">
            <div>
              <strong>{{ a.title }}</strong>
              <span class="meta">{{ formatDate(a.created_at) }}{{ a.creator ? ' · ' + a.creator.name : '' }}</span>
            </div>
            <p class="body-preview">{{ (a.body || '').slice(0, 120) }}{{ (a.body || '').length > 120 ? '…' : '' }}</p>
            <div class="item-actions">
              <button class="btn-link" @click="openEditAnnouncement(a)">Edit</button>
              <button class="btn-link danger" @click="deleteAnnouncement(a)">Delete</button>
            </div>
          </li>
        </ul>
      </section>
    </div>

    <!-- Create/Edit announcement modal -->
    <Modal v-model="showAnnouncementModal" :close="() => (showAnnouncementModal = false)">
      <div class="modal">
        <div class="right-box">
          <h2>{{ editId ? 'Edit' : 'New' }} announcement</h2>
          <form class="form-container" @submit.prevent="saveAnnouncement">
            <div class="input-contianer">
              <label>Title</label>
              <input type="text" v-model="announcementForm.title" required />
            </div>
            <div class="input-contianer">
              <label>Body</label>
              <textarea v-model="announcementForm.body" rows="4" required></textarea>
            </div>
            <div class="btn-container">
              <button type="submit" class="blue-btn">Save</button>
              <button type="button" class="white-btn" @click="showAnnouncementModal = false">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      announcements: [],
      announcementsLoading: false,
      allUsers: [],
      emailForm: {
        subject: "",
        body: "",
        recipient_type: "all",
        user_ids: [],
      },
      emailSending: false,
      showAnnouncementModal: false,
      editId: null,
      announcementForm: { title: "", body: "" },
    };
  },
  created() {
    this.fetchAnnouncements();
    this.fetchUsers();
  },
  methods: {
    formatDate(createdAt) {
      if (!createdAt) return "";
      return new Date(createdAt).toLocaleDateString(undefined, { dateStyle: "medium", timeStyle: "short" });
    },
    async fetchAnnouncements() {
      this.announcementsLoading = true;
      try {
        const { data } = await axios.get("announcements/");
        this.announcements = data;
      } catch (e) {
        this.announcements = [];
      } finally {
        this.announcementsLoading = false;
      }
    },
    async fetchUsers() {
      try {
        const { data } = await axios.get("allusers");
        this.allUsers = data;
      } catch (e) {
        this.allUsers = [];
      }
    },
    openCreateAnnouncement() {
      this.editId = null;
      this.announcementForm = { title: "", body: "" };
      this.showAnnouncementModal = true;
    },
    openEditAnnouncement(a) {
      this.editId = a.id;
      this.announcementForm = { title: a.title, body: a.body };
      this.showAnnouncementModal = true;
    },
    async saveAnnouncement() {
      try {
        if (this.editId) {
          await axios.put(`announcements/${this.editId}`, this.announcementForm);
          this.$toast.show("Announcement updated");
        } else {
          await axios.post("announcements/", this.announcementForm);
          this.$toast.show("Announcement created");
        }
        this.showAnnouncementModal = false;
        this.fetchAnnouncements();
      } catch (e) {
        this.$toast.show(e.response?.data?.message || "Failed to save");
      }
    },
    async deleteAnnouncement(a) {
      if (!confirm("Delete this announcement?")) return;
      try {
        await axios.delete(`announcements/${a.id}`);
        this.$toast.show("Announcement deleted");
        this.fetchAnnouncements();
      } catch (e) {
        this.$toast.show(e.response?.data?.message || "Failed to delete");
      }
    },
    async sendMassEmail() {
      this.emailSending = true;
      try {
        const payload = {
          subject: this.emailForm.subject,
          body: this.emailForm.body,
          recipient_type: this.emailForm.recipient_type,
        };
        if (this.emailForm.recipient_type === "selected") {
          payload.user_ids = this.emailForm.user_ids || [];
        }
        const { data } = await axios.post("mass-email/send", payload);
        this.$toast.show(data.message || "Email sent");
        this.emailForm = { subject: "", body: "", recipient_type: "all", user_ids: [] };
      } catch (e) {
        this.$toast.show(e.response?.data?.message || "Failed to send email");
      } finally {
        this.emailSending = false;
      }
    },
  },
};
</script>

<style scoped>
@import url("../styles/dashboard.css");
@import url("../styles/modal.css");
.admin-content {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #e0e0e0;
}
.card h2 {
  margin: 0 0 8px 0;
  font-size: 18px;
}
.hint {
  color: #666;
  font-size: 13px;
  margin: 0 0 16px 0;
}
.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.section-head h2 {
  margin: 0;
}
.loading,
.empty {
  color: #666;
  padding: 12px 0;
}
.announcements-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.announcement-item {
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}
.announcement-item:last-child {
  border-bottom: none;
}
.body-preview {
  margin: 6px 0 0 0;
  font-size: 13px;
  color: #555;
}
.meta {
  font-size: 12px;
  color: #888;
  margin-left: 8px;
  font-weight: normal;
}
.item-actions {
  margin-top: 8px;
}
.item-actions .btn-link {
  margin-right: 12px;
}
.btn-link.danger {
  color: #c00;
}
.multi-select-wrap {
  margin-top: 8px;
}
.multi-select-wrap > label {
  display: block;
  margin-bottom: 6px;
  color: #4b5563;
  font-size: 13px;
  font-weight: 600;
}
.multi-select {
  min-height: 120px;
  width: 100%;
  max-width: 400px;
}
</style>
