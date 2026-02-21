import { createApp } from "vue";
import App from "./components/App.vue";
import Toaster from "@meforma/vue-toaster";
import router from "./router";
import store from "./store";
import axios from "axios";
import { Form } from "vform";
import "vue-universal-modal/dist/index.css";
import VueUniversalModal from "vue-universal-modal";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { BaseUrl } from "./settings";

require("./store/subscriber");

window.Form = Form;

axios.defaults.baseURL = BaseUrl;

const app = createApp(App);

app.use(Toaster);
app.use(VueLoading);
app.use(VueUniversalModal, {
    teleportTarget: "#modals",
});
store.dispatch("ATTEMPT", localStorage.getItem("token")).then(() => {
    app.use(store);
    app.use(router);
    app.mount("#app");
});
