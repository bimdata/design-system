import getting_started from "./assets/img/icon-getting_started.svg";
import designers from "./assets/img/icon-designers.svg";
import developpers from "./assets/img/icon-developpers.svg";
import doc from "./assets/img/icon-doc.svg";
import guidelines from "./assets/img/icon-guidelines.svg";
import utilities2 from "./assets/img/icon-utilities2.svg";
import variables from "./assets/img/icon-variables.svg";
import colors from "./assets/img/icon-colors.svg";
import list from "./assets/img/icon-list.svg";
import markup from "./assets/img/icon-markup.svg";
import spacing from "./assets/img/icon-spacing.svg";
import typo from "./assets/img/icon-typo.svg";
import components from "./assets/img/icon-components.svg";
import buttons from "./assets/img/icon-buttons.svg";
import card from "./assets/img/icon-card.svg";
import pagination from "./assets/img/icon-pagination.svg";
import charts from "./assets/img/icon-charts.svg";
import checkbox from "./assets/img/icon-checkbox.svg";
import color_selector from "./assets/img/icon-color_selector.svg";
import datepicker from "./assets/img/icon-datepicker.svg";
import dropdown from "./assets/img/icon-dropdown.svg";
import fileicon from "./assets/img/icon-fileicon.svg";
import icons from "./assets/img/icon-icons.svg";
import illustration from "./assets/img/icon-illustration.svg";
import input from "./assets/img/icon-input.svg";
import loader from "./assets/img/icon-loader.svg";
import menu from "./assets/img/icon-menu.svg";
import radio from "./assets/img/icon-radio.svg";
import grid from "./assets/img/icon-grid.svg";
import safe_zone_inline from "./assets/img/icon-safe_zone_inline.svg";
import search from "./assets/img/icon-search.svg";
import search_autocomplete from "./assets/img/icon-search_autocomplete.svg";
import select from "./assets/img/icon-select.svg";
import table from "./assets/img/icon-table.svg";
import tabs from "./assets/img/icon-tabs.svg";
import text from "./assets/img/icon-text.svg";
import textarea from "./assets/img/icon-textarea.svg";
import toggle from "./assets/img/icon-toggle.svg";
import tooltip from "./assets/img/icon-tooltip.svg";

export default {
  "Getting started": {
    text: "Learn how to quickly get started with our component library to build expressive, consistent UI at BIMData.",
    path: "getting-started",
    img: getting_started,
    children: [
      {
        title: "Designers",
        img: designers,
        path: "designers",
        text: "Collection of tools and resources you need to start designing with the BIMData design system.",
        btn: "Get design kit",
      },
      {
        title: "Developpers",
        img: developpers,
        path: "developpers",
        text: "How to use the BIMData design system in your projects.",
        btn: "Get dev kit",
      },
      {
        title: "InternalDoc",
        img: doc,
        path: "internal-doc",
        text: "Documentation, if you want to add your own components",
        btn: "Getting started",
      },
    ],
  },
  "Guidelines & Utilities": {
    text: "How BIMData looks: guidelines for colors, spacing, typography, ...",
    img: guidelines,
    path: "guidelines-utilities",
    children: [
      {
        title: "Utilities",
        path: "utilities",
        img: utilities2,
        text: "Summary of all defined and usable classes and how use them.",
        btn: "View utilities",
      },
      {
        title: "Variables",
        path: "variables",
        img: variables,
        text: "See all defines and usable BIMData variables and how use it.",
        btn: "View variables",
      },
      {
        title: "Colors",
        path: "colors",
        img: colors,
        text: "BIMData uses a color palette to achieve clean interfaces.",
        btn: "View colors",
      },
      {
        title: "list",
        img: list,
        path: "list",
        text: "Minimal layout container for displaying a group of items.",
        btn: "View list",
      },
      {
        title: "Markup & Style",
        img: markup,
        path: "markup",
        text: "How to name your classes to respect the structure already in place.",
        btn: "View markup",
      },
      {
        title: "Spacing",
        img: spacing,
        path: "spacing",
        text: "Adjust whitespace by applying spacing, margin, padding helpers.",
        btn: "View spacing",
      },
      {
        title: "Typography",
        img: typo,
        path: "typography",
        text: "Indispensable for defining visual identity and organizing content.",
        btn: "View typography",
      },
    ],
  },
  Components: {
    text: "We developed a VueJS UI library that contains a set of components and demos for building interactive user interfaces.",
    img: components,
    path: "components",
    children: [
      {
        title: "Buttons",
        img: buttons,
        path: "buttons",
        text: "Buttons are used to trigger actions based on a user's interaction.",
        btn: "View buttons",
      },
      {
        title: "Cards",
        img: card,
        path: "cards",
        text: "Cards are used to groups a related content.",
        btn: "View cards",
      },
      {
        title: "Carousel",
        img: pagination,
        path: "carousel",
        text: "A generic carousel component.",
        btn: "View carousel",
      },
      {
        title: "Charts",
        img: charts,
        path: "charts",
        text: "",
        btn: "View charts",
      },
      {
        title: "Checkbox",
        img: checkbox,
        path: "checkbox",
        text: "Checkboxes are used to enables users to pick multiple options from a group.",
        btn: "View checkbox",
      },
      {
        title: "ColorSelector",
        img: color_selector,
        path: "colorselector",
        text: "Color Selector component allows the user to pick from a set of predefined swatches colors.",
        btn: "View color selector",
      },
      {
        title: "DatePicker",
        img: datepicker,
        path: "datepicker",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        btn: "View DatePicker",
      },
      {
        title: "DropdownList",
        img: dropdown,
        path: "dropdownlist",
        text: "DropdownList component shows a menu with an paginated list.",
        btn: "View dropdown list",
      },
      {
        title: "DropdownMenu",
        img: dropdown,
        path: "dropdownmenu",
        text: "Dropdown component shows a simple menu.",
        btn: "View dropdown menu",
      },
      {
        title: "FileIcon",
        img: fileicon,
        path: "fileicon",
        text: "FileIcon is used to provide file visual context.",
        btn: "View FileIcon",
      },
      {
        title: "Icons",
        img: icons,
        path: "icons",
        text: "Icons are used to provide additional visual context.",
        btn: "View icons",
      },
      {
        title: "Illustrations",
        img: illustration,
        path: "illustrations",
        text: "Illustrations are used to provide additional visual context.",
        btn: "View illustrations",
      },
      {
        title: "Input",
        img: input,
        path: "input",
        text: "Inputs are used for enabled a user to interact and input data.",
        btn: "View input",
      },
      {
        title: "Loaders",
        img: loader,
        path: "loaders",
        text: "Loaders are used to notify a user that data or page is being retrieved.",
        btn: "View loaders",
      },
      {
        title: "Menus",
        img: menu,
        path: "menus",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        btn: "View menus",
      },
      {
        title: "Pagination",
        img: pagination,
        path: "pagination",
        text: "Pagination is used to lets users navigate through large collections of items.",
        btn: "View pagination",
      },
      {
        title: "Radio",
        img: radio,
        path: "radio",
        text: "Radio buttons enables a user to make a single selection from a group of options.",
        btn: "View radio",
      },
      {
        title: "ResponsiveGrid",
        img: grid,
        path: "responsive-grid",
        text: "Display a list of item with a responsive layout",
        btn: "View responsive grid",
      },
      {
        title: "SafeZoneInline",
        img: safe_zone_inline,
        path: "safe-zone-inline",
        text: "",
        btn: "View safe zone inline",
      },
      {
        title: "Search",
        img: search,
        path: "search",
        text: "Search enables users to specify a word or a phrase to find relevant content.",
        btn: "View search",
      },
      {
        title: "Search Autocomplete",
        img: search_autocomplete,
        path: "searchautocomplete",
        text: "Search autocomplete  ...",
        btn: "View search autocomplete",
      },
      {
        title: "Select",
        img: select,
        path: "select",
        text: "Select (dropdown) is used to enabled a user to select a single item from a list of options.",
        btn: "View select",
      },
      {
        title: "Slider",
        img: select,
        path: "slider",
        text: "slider",
        btn: "View slider",
      },
      {
        title: "Table",
        img: table,
        path: "table",
        text: "Table is a component used for displaying your formatted content.",
        btn: "View table",
      },
      {
        title: "Tabs",
        img: tabs,
        path: "tabs",
        text: "Tabs component provide a nice interface to switch between different views",
        btn: "View tabs",
      },
      {
        title: "Text",
        img: text,
        path: "text",
        text: "Text",
        btn: "View text",
      },
      {
        title: "Textarea",
        img: textarea,
        path: "textarea",
        text: "Textarea is used to add freeform longer text.",
        btn: "View textarea",
      },
      {
        title: "Textbox",
        img: text,
        path: "textbox",
        text: "A text container to handle long text in small boxes.",
        btn: "View textbox",
      },
      {
        title: "Toggles",
        img: toggle,
        path: "toggle",
        text: "Toggles are On/Off switches. They allow users to choose between two mutually exclusive options.",
        btn: "View toggle",
      },
      {
        title: "Tooltips",
        img: tooltip,
        path: "tooltips",
        text: "Tooltips are used to show contextual information on hover.",
        btn: "View tooltips",
      },
    ],
  },
};
