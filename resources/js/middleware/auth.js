import store from "../store";

export default (to, from, next) => {
    let authenticated = store.getters.authenticated;
    if (!authenticated) {
        next({ name: "login" });
    }
};
