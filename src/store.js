import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    'gettingstarted':{
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
      path: "gettingstarted",
      img:require("./design-system/assets/img/icon-getting_stated.svg"),
      children: [
        {
          title: "Designers",
          img:require("./design-system/assets/img/icon-designers.svg"),
          path: "designers",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "Getting started"
        },
        {
          title: "Developpers",
          img:require("./design-system/assets/img/icon-developpers.svg"),
          path: "developpers",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "Getting started"
        },
        {
          title: "Releases",
          img:require("./design-system/assets/img/icon-release.svg"),
          path: "releasenotes",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View releases"
        }
      ]
    },
    guidelines: {
      text: "Guidelines for colors, spacing,  typography",
      img: require("./design-system/assets/img/icon-guidelines.svg"),
      children: [
        {
          title: "Colors",
          path: "colors",
          img:require("./design-system/assets/img/icon-colors.svg"),
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View Colors"
        },
        {
          title: "Grid",
          img:require("./design-system/assets/img/icon-grid.svg"),
          path: "grid",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View Grid"
        },
        {
          title: "Markup & Style",
          img:require("./design-system/assets/img/icon-markup.svg"),
          path: "markup",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View markup"
        },
        {
          title: "Spacing",
          img:require("./design-system/assets/img/icon-spacing.svg"),
          path: "spacing",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View spacing"
        },
        {
          title: "Typography",
          img:require("./design-system/assets/img/icon-typo.svg"),
          path: "typography",
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
          title: "Buttons",
          img:require("./design-system/assets/img/icon-buttons.svg"),
          path: "buttons",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View Buttons"
        },
        {
          title: "Icons",
          img:require("./design-system/assets/img/icon-icons.svg"),
          path: "icons",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View icons"
        }
      ]
    }
  }
});