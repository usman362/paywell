<template>
  <div class="main">
    <div class="top-bar">
      <p @click="$router.push('/dashboard')" style="cursor:pointer">← Admin Dashboard</p>
      <p>Platform Controls</p>
      <div></div>
    </div>

    <div class="controller-box">
      <div class="search" style="padding:0 12px">Paywall</div>
      <div class="right-action">
        <button class="btn" @click="savePaywall">Save Paywall Settings</button>
      </div>
    </div>

    <div class="card-wrapper">
      <div class="card-container" style="width:320px">
        <div class="info">
          <h1>Free Library Limit</h1>
          <input v-model.number="paywall.free_library_limit" type="number" min="0" />
        </div>
      </div>
      <div class="card-container" style="width:320px">
        <div class="info">
          <h1>Library Price</h1>
          <input v-model="paywall.library_price" type="number" min="0" step="0.01" />
        </div>
      </div>
      <div class="card-container" style="width:320px">
        <div class="info">
          <h1>Registration Price</h1>
          <input v-model="paywall.registration_price" type="number" min="0" step="0.01" />
          <label style="font-size:12px">
            <input type="checkbox" v-model="paywall.registration_requires_payment" /> Require payment for new registrations
          </label>
        </div>
      </div>
    </div>

    <div class="controller-box">
      <div class="search" style="padding:0 12px">Users Access Control</div>
    </div>
    <table>
      <thead><tr><th>Name</th><th>Email</th><th>Disabled</th><th>Paid</th><th>Actions</th></tr></thead>
      <tbody>
        <tr v-for="u in users" :key="u.id">
          <td>{{ u.name }}</td>
          <td>{{ u.email }}</td>
          <td>{{ u.is_disabled ? 'Yes' : 'No' }}</td>
          <td>{{ u.is_paid ? 'Yes' : 'No' }}</td>
          <td>
            <button class="btn" style="margin-right:8px" @click="toggleDisable(u)">{{ u.is_disabled ? 'Enable' : 'Disable' }}</button>
            <button class="btn" @click="togglePaid(u)">{{ u.is_paid ? 'Set Unpaid' : 'Set Paid' }}</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="controller-box">
      <div class="search" style="padding:0 12px">Announcements</div>
      <div class="right-action"><button class="btn" @click="createAnnouncement">Post Announcement</button></div>
    </div>
    <input v-model="announcement.title" placeholder="Title" />
    <textarea v-model="announcement.body" placeholder="Body" rows="3"></textarea>
    <ul>
      <li v-for="a in announcements" :key="a.id" style="margin:8px 0">
        <strong>{{ a.title }}</strong> - {{ a.body }}
        <button class="btn" style="margin-left:8px" @click="removeAnnouncement(a.id)">Delete</button>
      </li>
    </ul>

    <div class="controller-box">
      <div class="search" style="padding:0 12px">Chat Rooms</div>
      <div class="right-action"><button class="btn" @click="createRoom">Create Room</button></div>
    </div>
    <input v-model="room.name" placeholder="Room name" />
    <input v-model="room.description" placeholder="Room description" />
    <ul>
      <li v-for="r in rooms" :key="r.id" style="margin:8px 0">
        <strong>{{ r.name }}</strong> ({{ r.messages_count }} msgs)
        <button class="btn" style="margin-left:8px" @click="deleteRoom(r.id)">Delete</button>
      </li>
    </ul>

    <div class="controller-box">
      <div class="search" style="padding:0 12px">Mass Email</div>
      <div class="right-action"><button class="btn" @click="sendMassEmail">Send</button></div>
    </div>
    <input v-model="email.subject" placeholder="Email subject" />
    <textarea v-model="email.message" placeholder="Email message" rows="3"></textarea>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      paywall: {
        free_library_limit: 1,
        library_price: 9.99,
        registration_requires_payment: false,
        registration_price: 4.99,
      },
      users: [],
      announcements: [],
      announcement: { title: "", body: "" },
      rooms: [],
      room: { name: "", description: "" },
      email: { subject: "", message: "" },
    };
  },
  methods: {
    async load() {
      const [{ data: paywall }, { data: users }, { data: announcements }, { data: rooms }] = await Promise.all([
        axios.get("admin/paywall"),
        axios.get("allusers"),
        axios.get("admin/announcements"),
        axios.get("admin/chat/rooms"),
      ]);
      this.paywall = paywall;
      this.users = users;
      this.announcements = announcements;
      this.rooms = rooms;
    },
    async savePaywall() {
      await axios.put("admin/paywall", this.paywall);
      this.$toast.show("Paywall settings updated");
    },
    async toggleDisable(u) {
      await axios.put(`admin/users/${u.id}/${u.is_disabled ? "enable" : "disable"}`);
      u.is_disabled = !u.is_disabled;
    },
    async togglePaid(u) {
      await axios.put(`editUser/${u.id}`, { name: u.name, email: u.email, is_paid: !u.is_paid });
      u.is_paid = !u.is_paid;
    },
    async createAnnouncement() {
      const { data } = await axios.post("admin/announcements", this.announcement);
      this.announcements.unshift(data);
      this.announcement = { title: "", body: "" };
    },
    async removeAnnouncement(id) {
      await axios.delete(`admin/announcements/${id}`);
      this.announcements = this.announcements.filter((a) => a.id !== id);
    },
    async createRoom() {
      const { data } = await axios.post("admin/chat/rooms", this.room);
      this.rooms.unshift(data);
      this.room = { name: "", description: "" };
    },
    async deleteRoom(id) {
      await axios.delete(`admin/chat/rooms/${id}`);
      this.rooms = this.rooms.filter((r) => r.id !== id);
    },
    async sendMassEmail() {
      await axios.post("admin/mass-email", this.email);
      this.$toast.show("Mass email queued");
    },
  },
  created() {
    this.load();
  },
};
</script>

<style scoped>
@import url("../styles/dashboard.css");
input, textarea { width: 100%; margin: 8px 0; padding: 10px; border-radius: 6px; border: 1px solid #ccc; }
table { width: 100%; background: #fff; border-collapse: collapse; margin-top: 14px; }
th, td { padding: 10px; border-bottom: 1px solid #eee; text-align: left; }
</style>
