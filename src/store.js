import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    "Getting started": {
      text:
        "Learn how to quickly get started with our component library to build expressive, consistent UI at BIMData.",
      path: "getting-started",
      img: require("./web/assets/img/icon-getting_stated.svg"),
      children: [
        {
          title: "Designers",
          img: require("./web/assets/img/icon-designers.svg"),
          path: "designers",
          text:
            "Collection of tools and resources you need to start designing with the BIMData design system.",
          btn: "Get design kit",
        },
        {
          title: "Developpers",
          img: require("./web/assets/img/icon-developpers.svg"),
          path: "developpers",
          text: "How to use the BIMData design system in your projects.",
          btn: "Get dev kit",
        },
        // {
        //   title: "Releases",
        //   img: require("./web/assets/img/icon-release.svg"),
        //   path: "releases",
        //   text:
        //     "Discover the new features of the BIMData Design system.",
        //   btn: "View releases",
        // },
        {
          title: "InternalDoc",
          img: require("./web/assets/img/icon-doc.svg"),
          path: "internal-doc",
          text: "Documentation, if you want to add your own components",
          btn: "Getting started",
        },
      ],
    },
    "Guidelines & Utilities": {
      text: "How BIMData looks : guidelines for colors, spacing,  typography",
      img: require("./web/assets/img/icon-guidelines.svg"),
      path: "guidelines-utilities",
      children: [
        {
          title: "Variables",
          img: require("./web/assets/img/icon-markup.svg"),
          path: "variables",
          text: "See all defines and usable BIMData variables and how use it.",
          btn: "View variables",
        },
        {
          title: "Colors",
          path: "colors",
          img: require("./web/assets/img/icon-colors.svg"),
          text: "BIMData uses a color palette to achieve clean interfaces.",
          btn: "View colors",
        },
        // {
        //   title: "Grid",
        //   img: require("./web/assets/img/icon-grid.svg"),
        //   path: "grid",
        //   text:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam",
        //   btn: "View grid",
        // },
        {
          title: "list",
          img: require("./web/assets/img/icon-list.svg"),
          path: "list",
          text: "Minimal layout container for displaying a group of items.",
          btn: "View list",
        },
        {
          title: "Markup & Style",
          img: require("./web/assets/img/icon-markup.svg"),
          path: "markup",
          text:
            "How to name your classes to respect the structure already in place.",
          btn: "View markup",
        },
        {
          title: "Spacing",
          img: require("./web/assets/img/icon-spacing.svg"),
          path: "spacing",
          text:
            "Adjust whitespace by applying spacing, margin, padding helpers.",
          btn: "View spacing",
        },
        {
          title: "Typography",
          img: require("./web/assets/img/icon-typo.svg"),
          path: "typography",
          text:
            "Indispensable for defining visual identity and organizing content.",
          btn: "View typography",
        },
      ],
    },
    Components: {
      text:
        "We developed a VueJs UI library that contains a set  components and demos for building, interactive user interfaces.",
      img: require("./web/assets/img/icon-components.svg"),
      path: "components",
      children: [
        {
          title: "Buttons",
          img: require("./web/assets/img/icon-buttons.svg"),
          path: "buttons",
          text:
            "Buttons are used to trigger actions based on a user's interaction.",
          btn: "View buttons",
        },
        {
          title: "Cards",
          img: require("./web/assets/img/icon-card.svg"),
          path: "cards",
          text: "Cards are used to groups a related content.",
          btn: "View cards",
        },
        {
          title: "Checkbox",
          img: require("./web/assets/img/icon-checkbox.svg"),
          path: "checkbox",
          text:
            "Checkboxes are used to enables users to pick multiple options from a group.",
          btn: "View checkbox",
        },
        {
          title: "Dropdown",
          img: require("./web/assets/img/icon-dropdown.svg"),
          path: "dropdown",
          text:
            "Checkboxes are used to enables users to pick multiple options from a group.",
          btn: "View dropdown",
        },
        {
          title: "Icons",
          img: require("./web/assets/img/icon-icons.svg"),
          path: "icons",
          text: "Icons are used to provide additional visual context.",
          btn: "View icons",
        },
        {
          title: "Illustrations",
          img: require("./web/assets/img/icon-icons.svg"),
          path: "illustrations",
          text: "Illustrations are used to provide additional visual context.",
          btn: "View illustrations",
        },
        {
          title: "Input",
          img: require("./web/assets/img/icon-input.svg"),
          path: "input",
          text:
            "Inputs are used for enabled a user to interact and input data.",
          btn: "View input",
        },
        {
          title: "Loaders",
          img: require("./web/assets/img/icon-loader.svg"),
          path: "loaders",
          text:
            "Loaders are used to notify a user that data or page is being retrieved.",
          btn: "View loaders",
        },
        {
          title: "Pagination",
          img: require("./web/assets/img/icon-pagination.svg"),
          path: "pagination",
          text:
            "Pagination is used to lets users navigate through large collections of items.",
          btn: "View pagination",
        },
        {
          title: "Radio",
          img: require("./web/assets/img/icon-radio.svg"),
          path: "radio",
          text:
            "Radio buttons enables a user to make a single selection from a group of options.",
          btn: "View radio",
        },
        {
          title: "Search",
          img: require("./web/assets/img/icon-search.svg"),
          path: "search",
          text:
            "Search enables users to specify a word or a phrase to find relevant content.",
          btn: "View search",
        },
        {
          title: "Select",
          img: require("./web/assets/img/icon-select.svg"),
          path: "select",
          text:
            "Select (dropdown) is used to enabled a user to select a single item from a list of options.",
          btn: "View select",
        },
        {
          title: "Table",
          img: require("./web/assets/img/icon-table.svg"),
          path: "table",
          text:
            "Table is a component used for displaying your formatted content.",
          btn: "View table",
        },
        {
          title: "Textarea",
          img: require("./web/assets/img/icon-textarea.svg"),
          path: "textarea",
          text: "Textarea is used to add freeform longer text.",
          btn: "View textarea",
        },
        {
          title: "Toggles",
          img: require("./web/assets/img/icon-toggle.svg"),
          path: "toggle",
          text:
            "Toggles are On/Off switches. They allow users to choose between two mutually exclusive options.",
          btn: "View toggle",
        },
        {
          title: "Tooltips",
          img: require("./web/assets/img/icon-tooltip.svg"),
          path: "tooltips",
          text: "Tooltips are used to show contextual information on hover.",
          btn: "View tooltips",
        },
      ],
    },
  },
});
