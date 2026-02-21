<template>
  <div class="main">
    <img
      src="../assets/logo.png"
      alt="logo"
      style="
        height: 70px;
        width: 120px;
        position: absolute;
        top: 5px;
        left: 5px;
        background: rgba(255, 255, 255, 1);
        padding: 10px;
        border-radius: 5px;
      "
    />
    <div class="left-side">
      <div class="left-box">
        <img class="register-img" src="../assets/register.svg" alt="register" />
        <h1>A few more clicks to sign up to your account.</h1>
        <p>Manage all your files in one place</p>
      </div>
    </div>
    <div class="right-side">
      <div class="overlay">
        <div class="right-box">
          <h1>Sign Up</h1>
          <form class="form-container" @submit.prevent="registerHandler()">
            <div class="input-contianer">
              <input type="text" placeholder="Your Name" v-model="form.name" />
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
            <!-- <div class="term">
              <input type="checkbox" class="checkbox" />
              <p>I agree to the apkstash<a href="#">Privacy Policy</a></p>
            </div> -->
            <div class="btn-container">
              <button class="blue-btn" type="submit" :disabled="form.busy">
                Register
              </button>
              <button
                class="white-btn"
                @click.prevent="goToLogin()"
                :disabled="form.busy"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      error: null,
      form: new Form({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      }),
    };
  },
  methods: {
    ...mapActions({ _loginHandler: "LOGIN_HANDLER" }),

    goToLogin() {
      this.$router.push("login");
    },
    errorHas(name) {
      return this.form.errors.has(name);
    },
    getError(name) {
      return this.form.errors.get(name);
    },

    registerHandler() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });
      this.form
        .post("auth/register")
        .then(() => {
          this._loginHandler(this.form)
            .then(() => {
              this.$router.replace({ name: "dashboard" });
            })
            .catch(() => {
              this.$toast.show("error after registration");
            });
        })
        .catch((err) => this.$toast.show("error while registration"))
        .finally(() => {
          loader.hide();
        });
    },
  },
};
</script>

<style  scoped>
@import url("../styles/authStyles.css");
</style>