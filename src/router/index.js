import { createRouter, createWebHistory } from "vue-router";
import WeatherPage from "../views/WeatherPage.vue";

const routes = [
  {
    path: "/",
    name: "weather",
    component: WeatherPage,
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/SettingsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
