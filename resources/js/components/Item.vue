<template>
  <div class="card-container">
    <div class="top-action">
      <div class="menu" @click="onEdit()">
        <img src="../assets/edit.png" />
      </div>
      <div class="menu" @click="onDelete()">
        <img src="../assets/menu.png" />
      </div>
    </div>
    <img :src="getImagePath()" class="card-img" />
    <div class="info">
      <h1>{{ file.name }}</h1>
      <p>{{ file.description }}</p>
    </div>
    <div class="bottom-info">
      <div class="info-mini" v-if="file.version">
        <p class="t">app version</p>
        <p class="v">{{ file.version }}</p>
      </div>
      <div class="info-mini" v-if="file.package">
        <p class="t">app package</p>
        <p class="v">{{ file.package }}</p>
      </div>
      <div class="info-mini" v-if="file.url">
        <p class="t">download url</p>
        <p class="v" style="color: #2a4494">
          {{ file.url }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { RootUrl } from "../settings";
export default {
  name: "Item",
  props: ["file"],
  methods: {
    onDelete() {
      this.$emit("onDelete", this.file.id);
    },
    onEdit() {
      this.$emit("onEdit", this.file);
    },
    getImagePath() {
      return this.file.logo
        ? this.file.logo
        : RootUrl + "/images/" + "camera.png";
    },
  },
};
</script>

<style  scoped>
html body #app {
  margin: 0;
  padding: 0;
}
</style>