import { createApp } from "vue";
import VueClipboard from "vue3-clipboard";
import router from "./router.js";

import App from "./App.vue";

const app = createApp(App);
app.use(VueClipboard, {});
app.use(router);
app.mount("#app");
