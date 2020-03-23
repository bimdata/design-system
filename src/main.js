import Vue from "vue";
import App from "./design-system/App.vue";
import router from "./design-system/router/router";
import VueClipboard from 'vue-clipboard2'
import store from './store.js'

Vue.config.productionTip = false;
Vue.use(VueClipboard)

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
