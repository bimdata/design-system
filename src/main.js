import Vue from "vue";
import App from "./design-system/App.vue";
import router from "./design-system/router/router";
import Vuex from "vuex";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    visual: [
      {
        title: "color",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
        btn: "View Buttons"
      },
      {
        title: "space",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
        btn: "View Buttons2"
      },
      {
        title: "typography",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
        btn: "View Buttons2"
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
        title: "buttons2",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
        btn: "View Buttons2"
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
