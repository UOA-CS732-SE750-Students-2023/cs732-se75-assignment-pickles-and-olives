import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/styles.css";
import App from "./App.vue";
import router from "./router";
import piniaPersist from "pinia-plugin-persist";
import "./assets/main.css";

const app = createApp(App);

app.use(router);

const pinia = createPinia();

// adds the persist plug in to the pinia instance
pinia.use(piniaPersist);

app.use(pinia);

// ready to mount the app to the index.html using the id provided in the HTML body div
app.mount("#app");
