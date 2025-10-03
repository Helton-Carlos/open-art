import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia';
import Router from "./routes/index";
import Axios from "axios";
import VueAxios from "vue-axios";
import "./assets/css/style.css";

const Pinia = createPinia();

const app = createApp(App);

app.use(VueAxios, Axios);
app.use(Pinia);
app.use(Router);
app.mount("#app");
