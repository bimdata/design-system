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
          path: "releases",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View releases"
        },
        {
          title: "InternalDoc",
          img:require("./design-system/assets/img/icon-doc.svg"),
          path: "internal-doc",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "Getting started"
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
          title: "Card",
          img:require("./design-system/assets/img/icon-card.svg"),
          path: "card",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View Card"
        },
        {
          title: "Checkbox",
          img:require("./design-system/assets/img/icon-checkbox.svg"),
          path: "checkbox",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View icons"
        },
        {
          title: "Icons",
          img:require("./design-system/assets/img/icon-icons.svg"),
          path: "icons",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View icons"
        },
        {
          title: "Input",
          img:require("./design-system/assets/img/icon-input.svg"),
          path: "input",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View input"
        },
        {
          title: "Radio",
          img:require("./design-system/assets/img/icon-radio.svg"),
          path: "radio",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View radio"
        },
        {
          title: "Search",
          img: require("./design-system/assets/img/icon-search.svg"),
          path: "search",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          btn: "View search"
        },
        {
          title: "Select",
          img: require("./design-system/assets/img/icon-select.svg"),
          path: "select",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          btn: "View select"
        },
        {
          title: "Table",
          img: require("./design-system/assets/img/icon-table.svg"),
          path: "table",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          btn: "View table"
        },
        {
          title: "Textarea",
          img: require("./design-system/assets/img/icon-textarea.svg"),
          path: "textarea",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          btn: "View textarea"
        }
      ]
    }
  }
});