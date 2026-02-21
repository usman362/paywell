import store from "../store";

export default (to, from, next) => {
    let isAdmin = store.getters.isAdmin;
    if (!isAdmin) {
        next({ name: "dashboard" });
    }
};
