<template>
  <div class="test-page">
    <h1>Public Test Page</h1>
    <p>This route is available without authentication.</p>
    <router-link to="/login">Go to login</router-link>
  </div>
</template>

<script>
export default {
  name: "TestPage",
};
</script>

<style scoped>
.test-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
