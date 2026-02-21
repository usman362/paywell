<template>
  <div class="card">
    <img :src="getImagePath()" class="img-bg" />
    <div class="overlay">
      <div class="top-action">
        <div class="menu" @click="onEdit()">
          <img src="../assets/edit.png" />
        </div>
        <p
          v-if="library.user_login_token"
          style="font-size: 11px; overflow: hidden"
        >
          {{ `${library.user_login_token}` }}
        </p>
        <div class="menu" @click="onDelete()">
          <img src="../assets/menu.png" />
        </div>
      </div>

      <div class="info">
        <div style="display: flex; align-items: center">
          <h1>{{ library.name }}</h1>
          <img
            src="../assets/shield.png"
            style="width: 5px; height: 5px"
            v-if="library.is_lock"
          />
        </div>
        <p v-if="library.files_count > 0">{{ library.files_count }} files</p>
        <button @click="openFile()">open</button>
      </div>
    </div>
  </div>
</template>

<script>
import { RootUrl } from "../settings";
export default {
  name: "Item",
  props: ["library"],
  methods: {
    onDelete() {
      this.$emit("onDelete", this.library.id);
    },
    onEdit() {
      this.$emit("onEdit", this.library);
    },
    getImagePath() {
      return this.library.logo
        ? this.library.logo
        : RootUrl + "/images/" + "libraryImg.jpeg";
    },
    openFile() {
      this.$emit("openFile", this.library.id);
    },
  },
};
</script>

<style  scoped>
.card {
  width: 180px;
  height: 260px;
  border-radius: 15px;
  box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.76);
  -webkit-box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.76);
  -moz-box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.76);
  transform: translateY(0px);
  transition: transform 0.5s;
  position: relative;
  overflow: hidden;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  /* display: flex;
  justify-content: center;
  align-items: flex-end; */
  transition: opacity 0.3s;
  opacity: 1;
}
.img-bg {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: inherit;
  height: inherit;
}
.info {
  color: white;
  padding: 20px;
  position: absolute;
  bottom: 5px;
  z-index: 1;
  opacity: 1;
}
.info h1 {
  font-size: 15px;
  margin-bottom: 10px;
}
.info p {
  font-size: 12px;
}
button {
  text-transform: capitalize;
  padding: 5px 15px;
  background-color: white;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  font-size: 12px;
}

.card:hover > .overlay {
  opacity: 1;
  cursor: pointer;
}

.card:hover {
  transform: translateY(20px);
}

.top-action {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background: white;
  height: 40px;
}
.menu {
  margin-right: 5px;
}

button:hover {
  background-color: #2a4494;
  color: white;
  cursor: pointer;
  opacity: 1;
}

/* animations start*/

@keyframes usman {
  0% {
    bottom: -20px;
    opacity: 0;
  }

  100% {
    bottom: 5px;
    opacity: 1;
  }
}

/* animation end  */
</style>