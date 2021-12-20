import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const HomePage = () => import("../views/dashboard.vue");
const LoginPage = () => import("../views/login/index.vue");
const ForgotPage = () => import("../views/login/forgot.vue");
const ResetPage = () => import("../views/login/reset.vue");
const UserProfilePage = () => import("../views/profile/index.vue");

import ErrorPage from "./errors";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "My Dashboard",
    meta: { title: "My Dashboard", requiresAuth: true },
    component: HomePage,
  },
  {
    name: "login",
    path: "/login",
    component: LoginPage,
    meta: {
      title: "Login",
      requiresAuth: false,
    },
  },
  {
    name: "forgot",
    path: "/forgot",
    component: ForgotPage,
    meta: {
      title: "Forgot password",
      requiresAuth: false,
    },
  },
  {
    name: "reset",
    path: "/reset",
    component: ResetPage,
    meta: {
      title: "Reset password",
      requiresAuth: false,
    },
  },
  {
    name: "userprofile",
    path: "/userprofile",
    component: UserProfilePage,
    meta: {
      title: "My Profile",
      requiresAuth: true,
      breadcrumbs: () => [{ text: "My Profile", to: "/userprofile" }],
    },
  },
  ...ErrorPage,
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("token");
  if (to.meta.requiresAuth && !isAuthenticated) {
    return next("/login?callbackUrl=" + to.path);
  }
  next();
});

export default router;
