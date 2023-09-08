import { createRouter, createWebHistory } from "vue-router";
import WeatherPage from "../views/WeatherPage.vue";
import HistoryPage from "../views/HistoryPage.vue";

const routes = [
  {
    path: "/",
    name: "weather",
    component: WeatherPage,
  },
  {
    path: "/history",
    name: "history",
    component: HistoryPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
