import { createRouter, createWebHistory } from "vue-router";
import WeatherPage from "../views/WeatherPage.vue";
//import SettingsPage from "../views/SettingsPage.vue";

const routes = [
  {
    path: "/",
    name: "weather",
    component: WeatherPage,
  },
  // {
  //   path: "/settings",
  //   name: "settings",
  //   component: SettingsPage,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
