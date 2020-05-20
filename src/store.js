import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    'gettingstarted':{
      text: "Learn how to quickly get started with our component library to build expressive, consistent UI at BIMData.",
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
      text: "How BIMData looks : guidelines for colors, spacing,  typography",
      img: require("./design-system/assets/img/icon-guidelines.svg"),
      children: [
        {
          title: "Variables",
          img: require("./design-system/assets/img/icon-markup.svg"),
          path: "variables",
          text: "See all defines and usable BIMData variables and how use it.",
          btn: "View Variables"
        },
        {
          title: "Colors",
          path: "colors",
          img:require("./design-system/assets/img/icon-colors.svg"),
          text:
            "BIMData uses a color palette to achieve clean interfaces.",
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
          title: "list",
          img:require("./design-system/assets/img/icon-list.svg"),
          path: "list",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
          btn: "View list"
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
            "Adjust whitespace by applying spacing, margin, padding helpers.",
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
            "Buttons are used to trigger actions based on a user's interaction.",
          btn: "View Buttons"
        },
        {
          title: "Cards",
          img:require("./design-system/assets/img/icon-card.svg"),
          path: "cards",
          text:
            "Cards are used to groups a related content.",
          btn: "View Cards"
        },
        {
          title: "Checkbox",
          img:require("./design-system/assets/img/icon-checkbox.svg"),
          path: "checkbox",
          text:
            "Checkboxes are used to enables users to pick multiple options from a group.",
          btn: "View icons"
        },
        {
          title: "Icons",
          img:require("./design-system/assets/img/icon-icons.svg"),
          path: "icons",
          text:
            "Icons are used to provide additional visual context.",
          btn: "View icons"
        },
        {
          title: "Input",
          img:require("./design-system/assets/img/icon-input.svg"),
          path: "input",
          text:
            "Inputs are used for enabled a user to interact and input data.",
          btn: "View input"
        },
        {
          title: "Loaders",
          img: require("./design-system/assets/img/icon-loader.svg"),
          path: "loaders",
          text: "Loaders are used to notify a user that data or page is being retrieved.",
          btn: "View Loaders"
        },
        {
          title: "Pagination",
          img: require("./design-system/assets/img/icon-pagination.svg"),
          path: "pagination",
          text: "Pagination is used to lets users navigate through large collections of items.",
          btn: "View pagination"
        },
        {
          title: "Radio",
          img:require("./design-system/assets/img/icon-radio.svg"),
          path: "radio",
          text:
            "Radio buttons enables a user to make a single selection from a group of options.",
          btn: "View radio"
        },
        {
          title: "Search",
          img: require("./design-system/assets/img/icon-search.svg"),
          path: "search",
          text: "Search enables users to specify a word or a phrase to find relevant content.",
          btn: "View search"
        },
        {
          title: "Select",
          img: require("./design-system/assets/img/icon-select.svg"),
          path: "select",
          text: "Select (dropdown) is used to enabled a user to select a single item from a list of options.",
          btn: "View select"
        },
        {
          title: "Table",
          img: require("./design-system/assets/img/icon-table.svg"),
          path: "table",
          text: "Table is a component used for displaying your formatted content.",
          btn: "View table"
        },
        {
          title: "Textarea",
          img: require("./design-system/assets/img/icon-textarea.svg"),
          path: "textarea",
          text: "Textarea is used to add freeform longer text.",
          btn: "View textarea"
        },
        {
          title: "Tooltips",
          img: require("./design-system/assets/img/icon-tooltip.svg"),
          path: "tooltips",
          text: "Tooltips are used to show contextual information on hover.",
          btn: "View tooltips"
        }
      ]
    }
  }
});