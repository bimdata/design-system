import Vue from "vue";
import App from "./design-system/App.vue";
import router from "./design-system/router/router";
import Vuex from "vuex";

import Prism from 'prismjs';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Prism);

const store = new Vuex.Store({
  state: {
    guidelines: [
      {
        title: "colors",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
        btn: "View Colors"
      },
      {
        title: "spacing",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
        btn: "View spacing"
      },
      {
        title: "typography",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
        btn: "View typography"
      }
    ],
    components: [
      {
        title: "buttons",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
        btn: "View Buttons"
      },
      {
        title: "icons",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
        btn: "View icons"
      }
    ]
  }
});

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
