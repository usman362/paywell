<template>
  <div class="main">
    <!-- Top Bar -->
    <div class="top-bar">
      <img src="../assets/logo.png" alt="logo" style="height:45px;width:70px" />
      <div><p>Dashboard</p></div>
      <div class="user-info">
        <div>
          <h2>{{ user.name }}</h2>
          <p>{{ user.email }}</p>
        </div>
        <div>
          <button class="btn-box" @click.prevent="signout">
            <img src="../assets/exit.png" alt="logout" />
          </button>
        </div>
      </div>
    </div>

    <!-- Announcements feed -->
    <div class="announcements-feed">
      <h3>Announcements</h3>
      <div v-if="announcementsLoading" class="feed-loading">Loading…</div>
      <div v-else-if="announcements.length === 0" class="feed-empty">No announcements yet.</div>
      <div v-else class="feed-list">
        <article v-for="a in announcements" :key="a.id" class="announcement-card">
          <h4>{{ a.title }}</h4>
          <p class="announcement-body">{{ a.body }}</p>
          <span class="announcement-meta">{{ formatDate(a.created_at) }}{{ a.creator ? ' · ' + a.creator.name : '' }}</span>
        </article>
      </div>
    </div>

    <div class="dashboard-welcome">
      <p>Welcome, {{ user.name }}. Use the menu or links to manage your libraries and files.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "UserDashboard",
  data() {
    return {
      user: {},
      announcements: [],
      announcementsLoading: false,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    this.user = this.$store.getters.user || {};
    this.fetchAnnouncements();
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
    signout() {
      this.$store.dispatch("SIGN_OUT").then(() => this.$router.push("/login"));
    },
  },
  mounted() {
    if (this.$store.getters.user) this.user = this.$store.getters.user;
  },
};
</script>

<style scoped>
@import url("../styles/dashboard.css");
.announcements-feed {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-top: 16px;
  border: 1px solid #e0e0e0;
}
.announcements-feed h3 {
  margin: 0 0 16px 0;
  font-size: 18px;
}
.feed-loading,
.feed-empty {
  color: #666;
  padding: 12px 0;
}
.feed-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.announcement-card {
  padding: 14px;
  border: 1px solid #eee;
  border-radius: 6px;
  background: #fafafa;
}
.announcement-card h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
}
.announcement-body {
  margin: 0 0 8px 0;
  white-space: pre-wrap;
  word-break: break-word;
  color: #333;
}
.announcement-meta {
  font-size: 12px;
  color: #666;
}
.dashboard-welcome {
  margin-top: 20px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
}
</style>
