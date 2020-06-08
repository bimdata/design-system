import Vue from "vue";
import App from "./web/App.vue";
import router from "./web/router/router";
import VueClipboard from "vue-clipboard2";
import store from "./store.js";

Vue.config.productionTip = false;
Vue.use(VueClipboard);

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
