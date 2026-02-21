<template>
  <div class="main">
    <div class="left">
      <img src="../assets/error.svg" />
    </div>

    <div class="right">
      <h1>404</h1>
      <h2>Oops. This page has gone missing.</h2>
      <p>You may have mistyped the address or the page may have moved.</p>
      <div>
        <button @click.prevent="goBack()">back to home</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
@import url("../styles/notfound.css");
</style>