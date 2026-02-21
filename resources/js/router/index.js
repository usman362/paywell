import { createRouter, createWebHistory } from "vue-router";
import VueRouteMiddleware from "vue-route-middleware";
import auth from "../middleware/auth";
import guest from "../middleware/guest";
import admin from "../middleware/admin";
import user from "../middleware/user";

const routes = [
    {
        name: "login",
        path: "/login",
        component: () => import("../views/login.vue"),
        meta: {
            middleware: [guest],
        },
    },
    {
        name: "register",
        path: "/register",
        component: () => import("../views/register.vue"),
        meta: {
            middleware: [guest],
        },
    },
    {
        name: "test",
        path: "/test",
        component: () => import("../views/test.vue"),
    },
    {
        name: "dashboard",
        path: "/",
        component: () => import("../views/dashboard.vue"),
        meta: {
            middleware: [auth, user],
        },
    },
    {
        name: "files",
        path: "/library/:id",
        component: () => import("../views/files.vue"),
        meta: {
            middleware: [auth, user],
        },
    },
    {
        name: "admin.dashboard",
        path: "/dashboard",
        component: () => import("../views/adminDashboard.vue"),
        meta: {
            middleware: [auth, admin],
        },
    },
    {
        name: "admin.user",
        path: "/user/libraries/:id",
        component: () => import("../views/libraries.vue"),
        meta: {
            middleware: [auth, admin],
        },
    },
    {
        name: "admin.user.files",
        path: "/user/files/:id",
        component: () => import("../views/user.vue"),
        meta: {
            middleware: [auth, admin],
        },
    },
    {
        path: "/:catchAll(.*)",
        component: () => import("../views/NotFound.vue"),
        name: "NotFound",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(VueRouteMiddleware());

export default router;
