<template >
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
          <router-link to="/dashboard/chat" class="btn" style="margin-right: 8px">Chat</router-link>
          <router-link to="/dashboard/announcements" class="btn" style="margin-right: 8px">Announcements &amp; Email</router-link>
          <button class="btn" @click.prevent="openPaywallModal()" style="margin-right: 8px">
            Paywall settings
          </button>
          <button class="btn" @click.prevent="openModal()">
            add new users
          </button>
          <!-- <button class="btn-box">+</button> -->
        </div>
      </div>
      <!-- <div class="card-wrapper"> -->
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>ID</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in usersFilter()" :key="user.id">
            <td @click="goToUser(user.id)">{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.user_login_token }}</td>
            <td>
              <span v-if="user.is_active === false" class="status-badge disabled">Disabled</span>
              <span v-else class="status-badge active">Active</span>
            </td>
            <td class="actions">
              <span class="menu" @click="onEdit(user)">
                <img src="../assets/edit.png" />
              </span>
              <button
                type="button"
                class="action-icon-btn"
                @click.stop="toggleUserActive(user)"
                :title="user.is_active ? 'Disable user' : 'Enable user'"
              >
                <svg
                  v-if="user.is_active"
                  class="action-icon-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/>
                  <path d="M8 16L16 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
                <svg
                  v-else
                  class="action-icon-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <span class="menu" @click="onDelete(user.id)">
                <img src="../assets/menu.png" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- </div> -->
    </div>
    <Modal v-model="paywallShow" :close="closePaywallModal">
      <div class="modal">
        <div class="right-box">
          <h2>Paywall &amp; access control</h2>
          <form class="form-container" @submit.prevent="savePaywallSettings()">
            <div class="input-contianer">
              <label>Free library limit (libraries per account before payment)</label>
              <input type="number" min="0" v-model.number="paywallForm.free_library_limit" />
            </div>
            <div class="input-contianer">
              <label>Price</label>
              <input type="number" min="0" step="0.01" v-model.number="paywallForm.price" />
            </div>
            <div class="input-contianer">
              <label>Currency (e.g. USD)</label>
              <input type="text" maxlength="3" v-model="paywallForm.currency" />
            </div>
            <div class="checkbox-container" style="margin: 12px 0">
              <div class="checkbox">
                <span>Registration enabled (allow new accounts)</span>
                <input type="checkbox" v-model="paywallForm.registration_enabled" />
              </div>
            </div>
            <div class="btn-container">
              <button class="blue-btn" type="submit">Save</button>
              <button class="white-btn" @click.prevent="closePaywallModal()">Close</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
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
            <div class="checkbox-container" v-if="mode === 'edit'">
              <div class="checkbox">
                <span>User active (uncheck to disable account)</span>
                <input type="checkbox" v-model="form.is_active" />
              </div>
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
import axios from "axios";

export default {
  created() {
    this.getUsers();
  },
  data() {
    return {
      isShow: false,
      paywallShow: false,
      users: [],
      loading: false,
      mode: "add",
      id: undefined,
      searchQuerry: "",
      paywallForm: {
        free_library_limit: 1,
        price: 9.99,
        currency: "USD",
        registration_enabled: true,
      },
      form: new Form({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        user_login_token: "",
        role: undefined,
        is_active: true,
      }),
    };
  },
  methods: {
    ...mapActions({ _logout: "SIGN_OUT" }),
    closeModal() {
      this.isShow = false;
    },
    openPaywallModal() {
      this.paywallShow = true;
      axios.get("paywall/settings").then(({ data }) => {
        this.paywallForm = {
          free_library_limit: data.free_library_limit,
          price: data.price,
          currency: data.currency,
          registration_enabled: data.registration_enabled,
        };
      }).catch(() => this.$toast.show("Failed to load paywall settings"));
    },
    closePaywallModal() {
      this.paywallShow = false;
    },
    savePaywallSettings() {
      axios.put("paywall/settings", this.paywallForm)
        .then(() => {
          this.$toast.show("Paywall settings saved");
          this.closePaywallModal();
        })
        .catch((e) => {
          this.$toast.show(e.response?.data?.message || "Failed to save settings");
        });
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
      this.form.fill({ ...f, is_active: f.is_active !== false });
      this.mode = "edit";
      this.id = f.id;
      this.isShow = true;
    },
    toggleUserActive(u) {
      const action = u.is_active ? "disable" : "enable";
      if (!confirm(`Are you sure you want to ${action} this user?`)) return;
      axios.put("disableUser/" + u.id, { is_active: !u.is_active })
        .then(({ data }) => {
          this.$toast.show(data.message || (u.is_active ? "User disabled" : "User enabled"));
          const idx = this.users.findIndex((x) => x.id === u.id);
          if (idx !== -1 && data.user) this.users[idx] = data.user;
        })
        .catch((e) => this.$toast.show(e.response?.data?.message || "Failed to update"));
    },
    signout() {
      this._logout().then((res) => {
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
          this.users.map((u, i) =>
            u.id === data.id ? (this.users[i] = data) : null
          );
        })
        .catch((err) => {
          console.log(err);
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
        })
        .catch((err) => {
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
          this.users.map((u, i) =>
            u.id === id ? this.users.splice(i, 1) : null
          );
        })
        .catch(() => {
          this.$toast.show("err");
        })
        .finally(() => loader.hide());
    },
    usersFilter() {
      if (this.searchQuerry) {
        return this.users.filter((f) => {
          return (
            f.name.toLowerCase().indexOf(this.searchQuerry.toLowerCase()) > -1
          );
        });
      } else {
        return this.users;
      }
    },
    imageToBase64(e) {
      let file = e.target.users[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.logo = reader.result;
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    },
  },
  computed: {
    ...mapGetters(["user", "authenticated"]),
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
.status-badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}
.status-badge.active {
  background: #d4edda;
  color: #155724;
}
.status-badge.disabled {
  background: #f8d7da;
  color: #721c24;
}
.btn-link {
  background: none;
  border: none;
  color: #1f487e;
  cursor: pointer;
  text-decoration: underline;
  padding: 0 6px;
  font-size: 13px;
}
.btn-link:hover {
  color: #0d2d52;
}
.action-icon-btn {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 6px;
  background: #eef2ff;
  color: #1f487e;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 4px;
  transition: background-color 0.2s, color 0.2s, transform 0.2s;
}
.action-icon-btn:hover {
  background: #1f487e;
  color: #fff;
  transform: translateY(-1px);
}
.action-icon-svg {
  width: 16px;
  height: 16px;
}
</style>
