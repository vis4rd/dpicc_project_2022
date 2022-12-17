import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TestingView from "../views/TestingView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            // component: () => import("../views/AboutView.vue"),  // lazy route loading
            component: AboutView,
        },
        {
            path: "/testing",
            name: "testing",
            // component: () => import("../views/AboutView.vue"),  // lazy route loading
            component: TestingView,
        },
    ],
});

export default router;
