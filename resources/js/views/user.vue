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
            {{ user?.user_login_token }}
          </span>
        </p>
      </div>
      <div class="user-info">
        <div>
          <h2>{{ user?.name }}</h2>
          <p>{{ user?.email }}</p>
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
            placeholder="search files"
            v-model="searchQuerry"
          />
        </div>
        <div class="right-action">
          <button class="btn" @click.prevent="openModal()">add new file</button>
          <!-- <button class="btn-box">+</button> -->
        </div>
      </div>
      <div class="card-wrapper">
        <template v-for="file in filesFilter()" :key="file.id">
          <Item :file="file" @onDelete="onDelete" @onEdit="onEdit" />
        </template>
        <template v-if="!filesFilter().length">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
            "
          >
            <h3 style="color: gray">No Record Found</h3>
          </div>
        </template>
      </div>
    </div>
    <Modal v-model="isShow" :close="closeModal">
      <div class="modal">
        <div class="right-box">
          <h2>{{ mode }} new file</h2>
          <form class="form-container" @submit.prevent="submitHandler()">
            <div class="input-contianer">
              <label>Logo URL</label>
              <input type="text" placeholder="logo url" v-model="form.logo" />
              <p class="err" v-if="errorHas('logo')">
                {{ getError("logo") }}
              </p>
            </div>
            <div class="input-contianer">
              <label>File type</label>
              <select name="cars" id="cars" v-model="form.type">
                <option value="0">apk</option>
                <option value="1">pdf</option>
                <option value="2">audio</option>
                <option value="3">video</option>
                <option value="4">other</option>
              </select>
            </div>

            <div class="input-contianer">
              <label>Name</label>
              <input type="text" placeholder=" Name" v-model="form.name" />
              <p class="err" v-if="errorHas('name')">
                {{ getError("name") }}
              </p>
            </div>
            <div class="input-contianer">
              <label>Description</label>
              <input
                type="text"
                placeholder="description"
                v-model="form.description"
              />
              <p class="err" v-if="errorHas('description')">
                {{ getError("description") }}
              </p>
            </div>
            <div class="input-contianer" v-if="form.type == 0">
              <label>Version</label>
              <input type="text" placeholder="version" v-model="form.version" />
              <p class="err" v-if="errorHas('version')">
                {{ getError("version") }}
              </p>
            </div>

            <div class="input-contianer" v-if="form.type == 0">
              <label>Package</label>
              <input type="text" placeholder="package" v-model="form.package" />
              <p class="err" v-if="errorHas('package')">
                {{ getError("package") }}
              </p>
            </div>

            <div class="input-contianer">
              <label>File URL</label>
              <input
                type="text"
                placeholder="url"
                :value="form.url"
                @input="onUrlChange($event.target.value)"
              />
              <p class="err" v-if="errorHas('url')">
                {{ getError("url") }}
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
import Item from "../components/Item.vue";

export default {
  components: {
    Item,
  },
  created() {
    this.getUser();
    // console.log(this.$route.params);
  },
  data() {
    return {
      isShow: false,
      files: [],
      user: this.$route.params.user,
      library_id: this.$route.params.id,
      loading: false,
      mode: "add",
      id: undefined,
      searchQuerry: "",
      form: new Form({
        name: "",
        description: "",
        version: "",
        package: "",
        url: "",
        logo: undefined,
        type: 0,
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
      this.mode === "add" ? this.addNewFile() : this.editFile();
    },
    onDelete(id) {
      const r = confirm(
        "please confirm this action will delete this file permanently from our server."
      );
      if (r) {
        this.deleteFile(id);
      }
    },
    goBack() {
      this.$router.back();
    },
    onUrlChange(e) {
      let remove_spaces = e.split(" ").join("");
      const url = remove_spaces.split("%").join("");
      this.form.url = url;
    },
    onEdit(f) {
      this.form.clear();
      this.form.reset();
      this.form.fill(f);
      switch (f.type) {
        case "apk":
          this.form.type = 0;
          break;
        case "pdf":
          this.form.type = 1;
          break;
        case "audio":
          this.form.type = 2;
          break;
        case "video":
          this.form.type = 3;
          break;
        case "other":
          this.form.type = 4;
          break;
        default:
          break;
      }

      this.mode = "edit";
      this.id = f.id;
      this.isShow = true;
    },
    signout() {
      this._logout().then((res) => {
        this.$router.go("login");
      });
    },
    getUser() {
      this.loading = true;
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });
      this.form
        .get("getUser/" + this.library_id)
        .then(({ data }) => {
          this.user = data.user;
          this.files = data.files;
        })
        .finally(() => {
          loader.hide();
          this.loading = false;
        });
    },
    editFile() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });
      this.form
        .put("editFile/" + this.id)
        .then(({ data }) => {
          this.$toast.show("file edit");
          this.form.clear();
          this.form.reset();
          this.id = undefined;
          this.isShow = false;
          this.files.map((f, i) =>
            f.id === data.id ? (this.files[i] = data) : null
          );
        })
        .catch((err) => {
          console.log(err);
          this.$toast.show("failed to edit");
        })
        .finally(() => loader.hide());
    },
    addNewFile() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });
      this.form
        .post("addnewFile/" + this.library_id)
        .then(({ data }) => {
          this.$toast.show("new file added");
          this.form.clear();
          this.form.reset();
          this.isShow = false;
          this.files.unshift(data);
        })
        .catch((err) => {
          this.$toast.show("failed to add new file");
        })
        .finally(() => {
          loader.hide();
        });
    },
    deleteFile(id) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });
      this.form
        .delete("deletefile/" + id)
        .then(() => {
          this.$toast.show("file deleted");
          this.files.map((f, i) =>
            f.id === id ? this.files.splice(i, 1) : null
          );
        })
        .catch(() => {
          this.$toast.show("err");
        })
        .finally(() => loader.hide());
    },
    filesFilter() {
      if (this.searchQuerry) {
        return this.files.filter((f) => {
          return (
            f.name.toLowerCase().indexOf(this.searchQuerry.toLowerCase()) > -1
          );
        });
      } else {
        return this.files;
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
};
</script>

<style scoped>
@import url("../styles/dashboard.css");
@import url("../styles/modal.css");
</style>
