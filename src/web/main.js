import { createApp } from "vue";
import VueClipboard from "vue3-clipboard";
import router from "./router.js";
import BIMDataComponents from "../../vue3-plugin.js";

import App from "./App.vue";

const app = createApp(App);
app.use(VueClipboard, {});
app.use(router);
app.use(BIMDataComponents());
app.mount("#app");
