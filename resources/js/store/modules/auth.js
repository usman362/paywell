import Axios from "axios";

const auth = {
    state: {
        token: null,
        user: null,
        role: null,
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, data) {
            state.user = data;
        },
        SET_ROLE(state, data) {
            state.role = data;
        },
    },
    actions: {
        LOGIN_HANDLER: async ({ dispatch }, payload) => {
            const { data } = await Axios.post("/auth/login", payload);
            let token = data.access_token;
            return dispatch("ATTEMPT", token);
        },

        ATTEMPT: async ({ commit, state }, token) => {
            if (token) {
                commit("SET_TOKEN", token);
            }
            if (!state.token) {
                return;
            }
            try {
                let { data } = await Axios.get("/auth/me");
                commit("SET_ROLE", data.role);
                commit("SET_USER", data);
            } catch (error) {
                console.log("err");
                commit("SET_TOKEN", null);
                commit("SET_USER", null);
            }
        },

        SIGN_OUT({ commit }) {
            return Axios.post("/auth/logout").then(() => {
                commit("SET_TOKEN", null);
                commit("SET_USER", null);
            });
        },
    },
    getters: {
        authenticated: (state) => state.token,
        user: (state) => state.user,
        isAdmin: (state) => state.role === 2,
    },
};

export default auth;
