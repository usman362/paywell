<template>
  <div class="main">
    <div class="top-bar">
      <img
        src="../assets/logo.png"
        alt="logo"
        style="height: 45px; width: 70px"
      />

      <div>
        <p>SUPER ADMIN</p>
      </div>

      <div class="user-info">
        <div style="margin-right: 20px">
          <button class="btn-box" @click.prevent="onEdit(user)">
            <img src="../assets/edit.png" alt="edit" />
          </button>
        </div>

        <div>
          <h2>{{ user.name }}</h2>
          <p>{{ user.email }}</p>
        </div>

        <div>
          <button class="btn-box" @click.prevent="signout()">
            <img src="../assets/exit.png" alt="logout" />
          </button>
        </div>
      </div>
    </div>

    <div class="bottom-bar">
      <div class="controller-box">
        <div class="search">
          <img src="../assets/search.png" />
          <input
            type="text"
            placeholder="search users"
            v-model="searchQuerry"
          />
        </div>

        <div class="right-action">
          <button class="btn" @click.prevent="openModal()">
            add new users
          </button>
        </div>
      </div>

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
          <tr v-for="user in paginatedUsers" :key="user.id">
            <td @click="goToUser(user.id)">{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.user_login_token }}</td>
            <td class="actions">
              <span class="menu" @click="onEdit(user)">
                <img src="../assets/edit.png" />
              </span>
              <span class="menu" @click="onDelete(user.id)">
                <img src="../assets/menu.png" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="pagination-bar">
        <div class="page-size">
          <span>Rows:</span>
          <select v-model.number="pageSize" @change="goToPage(1)">
            <option :value="10">10</option>
            <option :value="25">25</option>
            <option :value="50">50</option>
            <option :value="100">100</option>
          </select>
        </div>

        <div class="page-info">
          <span v-if="totalFilteredUsers > 0">
            Showing {{ pageStart + 1 }} to {{ pageEnd }} of {{ totalFilteredUsers }}
          </span>
          <span v-else>
            Showing 0 results
          </span>
        </div>

        <div class="page-controls">
          <button
            class="page-btn"
            :disabled="currentPage === 1"
            @click="goToPage(currentPage - 1)"
          >
            Prev
          </button>

          <button
            class="page-btn"
            v-for="p in visiblePages"
            :key="p"
            :class="{ activePage: p === currentPage }"
            @click="goToPage(p)"
          >
            {{ p }}
          </button>

          <button
            class="page-btn"
            :disabled="currentPage === totalPages || totalPages === 0"
            @click="goToPage(currentPage + 1)"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    <Modal v-model="isShow" :close="closeModal">
      <div class="modal">
        <div class="right-box">
          <h2 v-if="form.role !== 2">{{ mode }} new user</h2>

          <form class="form-container" @submit.prevent="submitHandler()">
            <div class="input-contianer">
              <label>Name</label>
              <input type="text" placeholder="Name" v-model="form.name" />
              <p class="err" v-if="errorHas('name')">{{ getError("name") }}</p>
            </div>

            <div class="input-contianer">
              <label>Email</label>
              <input type="email" placeholder="Email" v-model="form.email" />
              <p class="err" v-if="errorHas('email')">
                {{ getError("email") }}
              </p>
            </div>

            <div class="input-contianer">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                v-model="form.password"
              />
              <p class="err" v-if="errorHas('password')">
                {{ getError("password") }}
              </p>
            </div>

            <div class="input-contianer">
              <label>Password confirmation</label>
              <input
                type="password"
                placeholder="Password Confirmation"
                v-model="form.password_confirmation"
              />
              <p class="err" v-if="errorHas('password')">
                {{ getError("password") }}
              </p>
            </div>

            <div
              class="input-contianer"
              v-if="mode === 'edit' && form.role === 1"
            >
              <label>Store token</label>
              <input
                type="text"
                placeholder="store token"
                v-model="form.user_login_token"
              />
              <p class="err" v-if="errorHas('user_login_token')">
                {{ getError("user_login_token") }}
              </p>
            </div>

            <div class="btn-container">
              <button class="blue-btn" type="submit">
                {{ mode === "add" ? "Add" : "Ok" }}
              </button>
              <button class="white-btn" @click.prevent="closeModal()">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { RootUrl } from "../settings";

export default {
  created() {
    this.getUsers();
  },

  data() {
    return {
      isShow: false,
      users: [],
      loading: false,
      mode: "add",
      id: undefined,
      searchQuerry: "",

      currentPage: 1,
      pageSize: 25,
      maxPageButtons: 7,

      form: new Form({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        user_login_token: "",
        role: undefined,
      }),
    };
  },

  watch: {
    searchQuerry() {
      this.currentPage = 1;
    },
  },

  methods: {
    ...mapActions({ _logout: "SIGN_OUT" }),

    closeModal() {
      this.isShow = false;
    },

    errorHas(name) {
      return this.form.errors.has(name);
    },

    getError(name) {
      return this.form.errors.get(name);
    },

    openModal() {
      this.mode = "add";
      this.form.clear();
      this.form.reset();
      this.isShow = true;
    },

    submitHandler() {
      this.mode === "add" ? this.addNewUser() : this.editUser();
    },

    onDelete(id) {
      const r = confirm(
        "please confirm this action will delete this user permanently from our server."
      );
      if (r) {
        this.deleteUser(id);
      }
    },

    onEdit(f) {
      this.form.clear();
      this.form.reset();
      this.form.fill(f);
      this.mode = "edit";
      this.id = f.id;
      this.isShow = true;
    },

    signout() {
      this._logout().then(() => {
        this.$router.go("login");
      });
    },

    getUsers() {
      this.loading = true;

      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });

      this.form
        .get("allusers")
        .then(({ data }) => {
          this.users = data;
          this.currentPage = 1;
        })
        .finally(() => {
          loader.hide();
          this.loading = false;
        });
    },

    editUser() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });

      this.form
        .put("editUser/" + this.id)
        .then(({ data }) => {
          this.$toast.show("user edit");
          this.form.clear();
          this.form.reset();
          this.id = undefined;
          this.isShow = false;

          if (data.role === 2) return location.reload();

          this.users.map((u, i) => (u.id === data.id ? (this.users[i] = data) : null));
        })
        .catch(() => {
          this.$toast.show("failed to edit");
        })
        .finally(() => loader.hide());
    },

    addNewUser() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });

      this.form
        .post("addNewUser")
        .then(({ data }) => {
          this.$toast.show("new user added");
          this.form.clear();
          this.form.reset();
          this.isShow = false;
          this.users.unshift(data);
          this.currentPage = 1;
        })
        .catch(() => {
          this.$toast.show("failed to add new user");
        })
        .finally(() => {
          loader.hide();
        });
    },

    goToUser(id) {
      this.$router.push({ name: "admin.user", params: { id: id } });
      // window.location.href = RootUrl + "/dashboard/users/" + id;
    },

    deleteUser(id) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });

      this.form
        .delete("deleteUser/" + id)
        .then(() => {
          this.$toast.show("user deleted");
          this.users.map((u, i) => (u.id === id ? this.users.splice(i, 1) : null));

          if (this.currentPage > this.totalPages) {
            this.currentPage = this.totalPages || 1;
          }
        })
        .catch(() => {
          this.$toast.show("err");
        })
        .finally(() => loader.hide());
    },

    goToPage(page) {
      const p = Number(page);

      if (!this.totalPages) {
        this.currentPage = 1;
        return;
      }

      if (p < 1) this.currentPage = 1;
      else if (p > this.totalPages) this.currentPage = this.totalPages;
      else this.currentPage = p;
    },
  },

  computed: {
    ...mapGetters(["user", "authenticated"]),

    filteredUsers() {
      const q = (this.searchQuerry || "").trim().toLowerCase();
      if (!q) return this.users;

      return this.users.filter((u) => {
        const name = (u.name || "").toLowerCase();
        const email = (u.email || "").toLowerCase();
        const token = String(u.user_login_token || "").toLowerCase();
        return name.includes(q) || email.includes(q) || token.includes(q);
      });
    },

    totalFilteredUsers() {
      return this.filteredUsers.length;
    },

    totalPages() {
      return Math.ceil(this.totalFilteredUsers / this.pageSize) || 0;
    },

    pageStart() {
      return (this.currentPage - 1) * this.pageSize;
    },

    pageEnd() {
      const end = this.pageStart + this.pageSize;
      return end > this.totalFilteredUsers ? this.totalFilteredUsers : end;
    },

    paginatedUsers() {
      return this.filteredUsers.slice(this.pageStart, this.pageEnd);
    },

    visiblePages() {
      const total = this.totalPages;
      if (total <= 1) return total === 1 ? [1] : [];

      const max = this.maxPageButtons;
      const half = Math.floor(max / 2);

      let start = this.currentPage - half;
      let end = this.currentPage + half;

      if (start < 1) {
        start = 1;
        end = Math.min(total, max);
      }

      if (end > total) {
        end = total;
        start = Math.max(1, total - max + 1);
      }

      const pages = [];
      for (let i = start; i <= end; i++) pages.push(i);
      return pages;
    },
  },
};
</script>

<style scoped>
@import url("../styles/dashboard.css");
@import url("../styles/modal.css");

.active {
  border: 1px solid green;
}

table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
  margin-top: 40px;
}

th,
td {
  border: 0.4px solid rgb(228, 228, 228);
  padding: 15px;
}

tbody {
  background: white;
  border-bottom: 5px solid #1f487e;
}

thead {
  background: #1f487e;
  color: white;
}

td {
  font-size: 14px;
}

thead th {
  border: 1px solid white;
}

.actions {
  text-align: end;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody tr:hover {
  color: #1f487e;
}

tbody td:nth-child(1) {
  cursor: pointer;
}

/* Pagination */
.pagination-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
  padding: 10px 0;
}

.page-size {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.page-size select {
  padding: 6px 8px;
  border: 1px solid rgb(228, 228, 228);
  border-radius: 6px;
  background: white;
}

.page-info {
  font-size: 14px;
}

.page-controls {
  display: flex;
  align-items: center;
  gap: 6px;
}

.page-btn {
  padding: 6px 10px;
  border: 1px solid rgb(228, 228, 228);
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.activePage {
  border: 1px solid #1f487e;
  color: #1f487e;
  font-weight: 600;
}
</style>
