import { createApp } from "vue";
import App from "./App.vue";
import roter from "./router";
import "./assets/app.css";

const app = createApp(App).use(roter);
app.mount("#app");
