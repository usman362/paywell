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
        <h1>A few more clicks to sign in to your account.</h1>
        <p>Manage all your files in one place</p>
      </div>
    </div>
    <div class="right-side">
      <div class="overlay">
        <div class="right-box">
          <h1>Sign In</h1>
          <form class="form-container" @submit.prevent="loginHandler()">
            <div class="input-contianer">
              <input
                type="email"
                placeholder="Email"
                v-model="email"
                required
              />
              <p class="err" v-if="error">email field is required</p>
            </div>
            <div class="input-contianer">
              <input
                type="password"
                placeholder="Password"
                required
                v-model="password"
              />
              <p class="err" v-if="error">email field is required</p>
            </div>
            <div class="btn-container">
              <button class="blue-btn" type="submit" :disabled="loading">
                Sign in
              </button>
              <button
                class="white-btn"
                @click.prevent="goToRegister()"
                :disabled="loading"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
      loading: false,
    };
  },
  methods: {
    ...mapActions({ _loginHandler: "LOGIN_HANDLER" }),
    loginHandler() {
      this.loading = true;
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });
      this._loginHandler({ email: this.email, password: this.password })
        .then(() => {
          this.$router.replace({ name: "dashboard" });
        })
        .catch(() => {
          this.$toast.show("login failed unauthorized");
        })
        .finally(() => {
          loader.hide();
          this.loading = false;
        });
    },
    goToRegister() {
      this.$router.push("register");
    },
  },
};
</script>

<style  scoped>
@import url("../styles/authStyles.css");
</style>