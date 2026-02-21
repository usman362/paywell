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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in usersFilter()" :key="user.id">
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
      <!-- </div> -->
    </div>
    <Modal v-model="isShow" :close="closeModal">
      <div class="modal">
        <div class="right-box">
          <h2 v-if="form.role !== 2">{{ mode }} new user</h2>
          <form class="form-container" @submit.prevent="submitHandler()">
            <div class="input-contianer">
              <input type="text" placeholder="Name" v-model="form.name" />
              <p class="err" v-if="errorHas('name')">{{ getError("name") }}</p>
            </div>
            <div class="input-contianer">
              <input type="email" placeholder="Email" v-model="form.email" />
              <p class="err" v-if="errorHas('email')">
                {{ getError("email") }}
              </p>
            </div>
            <div class="input-contianer">
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
          console.log(data.role);
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
</style>