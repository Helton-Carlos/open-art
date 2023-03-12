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
  {
    path: "/about",
    name: "about",
    component: () => import("../pages/About.vue"),
    meta: {
      title: "Discover, collect, and sell",
      subTitle: "About",
    },
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../pages/Blog.vue"),
    meta: {
      title: "Discover, collect, and sell",
      subTitle: "Blog",
    },
  },
  {
    path: "/help",
    name: "help",
    component: () => import("../pages/Help.vue"),
    meta: {
      title: "Discover, collect, and sell",
      subTitle: "Help",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../pages/Contact.vue"),
    meta: {
      title: "Discover, collect, and sell",
      subTitle: "Contact",
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
