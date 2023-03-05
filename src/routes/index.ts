import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home.vue"),
    meta: {
      title: "Discover, collect, and sell",
      subTitle: "Your Digital Art",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
