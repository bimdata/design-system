import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    'gettingstarted':{
      text: "Getting Started",
      img:require("./design-system/assets/img/icon-getting_stated.svg")
    },
    guidelines: {
      text: "Guidelines for colors, spacing,  typography",
      img: require("./design-system/assets/img/icon-guidelines.svg"),
      children: [
        {
          title: "colors",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View Colors"
        },
        {
          title: "grid",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View Grid"
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
      ]
    },
    components: {
      text: "We developed a VueJs UI library that contains a set  components and demos for building, interactive user interfaces.",
      img: require('./design-system/assets/img/icon-components.svg'),
      children: [
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
  }
});