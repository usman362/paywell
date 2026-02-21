<template>
  <div class="main">
    <!-- Top Bar -->
    <div class="top-bar">
      <img src="../assets/logo.png" alt="logo" style="height:45px;width:70px" />
      <div><p>SUPER ADMIN</p></div>
      <div class="user-info">
        <div style="margin-right:20px">
          <button class="btn-box" @click.prevent="onEdit(user)">
            <img src="../assets/edit.png" alt="edit" />
          </button>
        </div>
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

    <!-- Search + Controls -->
    <div class="bottom-bar">
      <div class="controller-box">
        <div class="search">
          <img src="../assets/search.png" alt="search" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search users..."
            @keyup.enter="fetchUsers(1)"
          />
        </div>
        <div class="right-action" style="margin-right:10px">
          <button class="btn" @click.prevent="$router.push({ name: 'user.feed' })">announcements & chat</button>
        </div>
        <div class="right-action">
          <select v-model.number="perPage" @change="fetchUsers(1)" class="page-select">
            <option value="20">20 per page</option>
            <option value="50">50 per page</option>
            <option value="100">100 per page</option>
          </select>
          <button class="btn" @click.prevent="openModal">Add new user</button>
        </div>
      </div>

      <!-- Users Table -->
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td @click="goToUser(user.id)">{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.user_login_token }}</td>
            <td class="actions">
              <span class="menu" @click="onEdit(user)">
                <img src="../assets/edit.png" alt="edit" />
              </span>
              <span class="menu" @click="onDelete(user.id)">
                <img src="../assets/menu.png" alt="delete" />
              </span>
            </td>
          </tr>

          <tr v-if="users.length === 0">
            <td colspan="4" style="text-align:center;color:#666;">No users found.</td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="pager">
        <button class="page-btn" @click="prevPage" :disabled="currentPage === 1">
          « Prev
        </button>
        <span class="page-info">
          Page {{ currentPage }} of {{ totalPages }} ({{ totalUsers }} total)
        </span>
        <button class="page-btn" @click="nextPage" :disabled="currentPage === totalPages">
          Next »
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
  data() {
    return {
      users: [],
      user: {}, // logged-in admin
      searchQuery: "",
      currentPage: 1,
      perPage: 20,
      totalPages: 1,
      totalUsers: 0,
      loading: false,
    };
  },
  methods: {
    async fetchUsers(page = 1) {
      this.loading = true;
      this.currentPage = page;
      try {
        const query = this.searchQuery ? `&search=${this.searchQuery}` : "";
        const res = await fetch(
          `/api/allusers?page=${page}&per_page=${this.perPage}${query}`
        );
        const data = await res.json();
        this.users = data.data || [];
        this.totalUsers = data.total || 0;
        this.totalPages = data.last_page || 1;
        this.currentPage = data.current_page || page;
      } catch (err) {
        console.error("Error fetching users", err);
      } finally {
        this.loading = false;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.fetchUsers(this.currentPage + 1);
    },
    prevPage() {
      if (this.currentPage > 1) this.fetchUsers(this.currentPage - 1);
    },
    goToUser(id) {
      this.$router.push(`/user/${id}`);
    },
    onEdit(user) {
      console.log("Edit:", user);
    },
    async onDelete(id) {
      if (!confirm("Delete this user?")) return;
      try {
        await fetch(`/api/user/${id}`, { method: "DELETE" });
        this.fetchUsers(this.currentPage);
      } catch (err) {
        console.error("Delete failed", err);
      }
    },
    openModal() {
      console.log("Open modal");
    },
    signout() {
      console.log("Signout clicked");
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.page-select {
  height: 40px;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 0 10px;
  margin-right: 10px;
}
.pager {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 12px;
}
.page-btn {
  padding: 8px 16px;
  border: none;
  background: #1f487e;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
.page-btn:disabled {
  background: #b3c0d6;
  cursor: not-allowed;
}
.page-info {
  font-size: 14px;
  color: #333;
}
</style>
