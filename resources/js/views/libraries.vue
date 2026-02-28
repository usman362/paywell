<template >
  <div class="main">
    <div class="top-bar">
      <button type="button" class="back-nav-btn" @click="goBack()">
        ← Dashboard
      </button>

      <div>
        <p>
          ID:
          <span>
            {{ user.user_login_token }}
          </span>
        </p>
      </div>
      <div class="user-info">
        <div>
          <h2>{{ user.name }}</h2>
          <p>{{ user.email }}</p>
        </div>
        <!-- <div>
          <button class="btn-box" @click.prevent="signout()">
            <img src="../assets/exit.png" alt="logout" />
          </button>
        </div> -->
      </div>
    </div>
    <div class="bottom-bar">
      <div class="controller-box">
        <div class="search">
          <img src="../assets/search.png" />
          <input
            type="text"
            placeholder="search libraries"
            v-model="searchQuerry"
          />
        </div>
        <div class="right-action">
          <button class="btn" @click.prevent="openModal()">
            add new library
          </button>
          <!-- <button class="btn-box">+</button> -->
        </div>
      </div>
      <div class="card-wrapper">
        <template v-for="file in librariesFilter()" :key="file.id">
          <LibraryList
            :library="file"
            @onDelete="onDelete"
            @onEdit="onEdit"
            @openFile="openFile"
          />
        </template>
      </div>
    </div>
    <Modal v-model="isShow" :close="closeModal">
      <div class="modal">
        <div class="right-box">
          <h2>{{ mode }} new library</h2>
          <form class="form-container" @submit.prevent="submitHandler()">
            <!-- <label
              :class="{
                active: form.logo,
              }"
            >
              <input type="file" size="60" @change="(e) => imageToBase64(e)" />
              <img src="../assets/camera.png" />
            </label> -->

            <div class="input-contianer">
              <label>Logo URL</label>
              <input type="text" placeholder=" logo Url" v-model="form.logo" />
              <p class="err" v-if="errorHas('logo')">
                {{ getError("logo") }}
              </p>
            </div>

            <div class="input-contianer">
              <label>Name</label>
              <input type="text" placeholder=" Name" v-model="form.name" />
              <p class="err" v-if="errorHas('name')">
                {{ getError("name") }}
              </p>
            </div>

            <div class="input-contianer">
              <label>PIN</label>
              <input type="text" placeholder="Pin" v-model="form.password" />
              <p class="err" v-if="errorHas('password')">
                {{ getError("password") }}
              </p>
            </div>

            <div class="input-contianer" v-if="mode !== 'add'">
              <label>Store token</label>
              <input
                type="text"
                placeholder="Store token"
                v-model="form.user_login_token"
              />
              <p class="err" v-if="errorHas('user_login_token')">
                {{ getError("user_login_token") }}
              </p>
            </div>

            <div class="checkbox-container">
              <div class="checkbox">
                <span>Enable lock</span>
                <input type="checkbox" v-model="form.is_lock" />
                <p class="err" v-if="errorHas('is_lock')">
                  {{ getError("is_lock") }}
                </p>
              </div>
              <div class="checkbox">
                <span>Hide</span>
                <input type="checkbox" v-model="form.is_hidden" />
                <p class="err" v-if="errorHas('is_hidden')">
                  {{ getError("is_hidden") }}
                </p>
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
import LibraryList from "../components/LibraryList.vue";

export default {
  components: {
    LibraryList,
  },
  created() {
    this.getLibraries();
  },
  data() {
    return {
      isShow: false,
      libraries: [],
      loading: false,
      user: {},
      mode: "add",
      id: undefined,
      searchQuerry: "",
      user_id: this.$route.params.id,
      form: new Form({
        name: "",
        desc: "",
        logo: undefined,
        password: "",
        is_lock: true,
        is_hidden: false,
        user_login_token: "",
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
      this.mode === "add" ? this.addNewLibrary() : this.editLibrary();
    },
    onUrlChange(e) {
      let remove_spaces = e.split(" ").join("");
      const url = remove_spaces.split("%").join("");
      this.form.url = url;
    },
    onDelete(id) {
      const r = confirm(
        "please confirm this action will delete this library permanently from our server."
      );
      if (r) {
        this.deleteLibrary(id);
      }
    },
    onEdit(f) {
      this.form.clear();
      this.form.reset();
      this.form.fill(f);
      this.form.is_lock = f.is_lock ? true : false;
      this.form.is_hidden = f.is_hidden ? true : false;
      this.mode = "edit";
      this.id = f.id;
      this.isShow = true;
    },
    signout() {
      this._logout().then((res) => {
        this.$router.go("login");
      });
    },
    getLibraries() {
      this.loading = true;
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });
      this.form
        .get("alllibraries/" + this.user_id)
        .then(({ data }) => {
          this.libraries = data.libraries;
          this.user = data.user;
        })
        .finally(() => {
          loader.hide();
          this.loading = false;
        });
    },
    goBack() {
      this.$router.back();
    },
    openFile(id) {
      this.$router.push({
        name: "admin.user.files",
        params: {
          id: id,
        },
      });
    },
    editLibrary() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });
      this.form
        .put("editLibrary/" + this.id)
        .then(({ data }) => {
          this.$toast.show("library edit");
          this.form.clear();
          this.form.reset();
          this.id = undefined;
          this.isShow = false;
          this.libraries.map((f, i) =>
            f.id === data.id ? (this.libraries[i] = data) : null
          );
        })
        .catch((err) => {
          console.log(err);
          this.$toast.show("failed to edit");
        })
        .finally(() => loader.hide());
    },
    addNewLibrary() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });
      this.form
        .post("addNewLibrary/" + this.user_id)
        .then(({ data }) => {
          this.$toast.show("new library added");
          this.form.clear();
          this.form.reset();
          this.isShow = false;
          this.libraries.unshift(data);
        })
        .catch((err) => {
          if (err.response?.status === 402 && err.response?.data?.paywall) {
            const d = err.response.data;
            this.$toast.show(
              (d.message || "Library limit reached.") +
              (d.price != null ? ` Payment required: ${d.currency || ""} ${d.price}` : "")
            );
          } else {
            this.$toast.show("failed to add new library");
          }
        })
        .finally(() => {
          loader.hide();
        });
    },
    deleteLibrary(id) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });
      this.form
        .delete("deleteLibrary/" + id)
        .then(() => {
          this.$toast.show("library deleted");
          this.libraries.map((f, i) =>
            f.id === id ? this.libraries.splice(i, 1) : null
          );
        })
        .catch(() => {
          this.$toast.show("err");
        })
        .finally(() => loader.hide());
    },
    librariesFilter() {
      if (this.searchQuerry) {
        return this.libraries.filter((f) => {
          return (
            f.name.toLowerCase().indexOf(this.searchQuerry.toLowerCase()) > -1
          );
        });
      } else {
        return this.libraries;
      }
    },
    imageToBase64(e) {
      let file = e.target.files[0];
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
    ...mapGetters(["authenticated"]),
  },
};
</script>

<style scoped>
@import url("../styles/dashboard.css");
@import url("../styles/modal.css");
.active {
  border: 1px solid green;
}
.cardanimate-enter-from {
  opacity: 0;
  transform: rotate(90deg) scale(2);
}
.cardanimate-enter-active {
  transition: all 0.3s ease-out;
}
.cardanimate-leave-to {
  opacity: 0;
  transform: rotate(-120deg) scale(-1);
}
.cardanimate-leave-active {
  transition: all 0.3s ease-in;
}
.checkbox-container {
  display: grid;
  gap: 10px;
}
</style>
