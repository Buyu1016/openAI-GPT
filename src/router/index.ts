import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [{
    path: "/",
    name: "GPT",
    component: () => import("../views/GPT/index.vue"),
    meta: {
        title: "GPT聊天"
    }
}];

export default createRouter({
    history: createWebHashHistory(),
    routes
});