import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home/Home.vue";
import Layout from "../views/Layout/Layout.vue";
import Content from "../views/Layout/Content.vue";

// import GETTING STARTED
import Designers from "../views/GettingStarted/Designers.vue";
import Developpers from "../views/GettingStarted/Developpers.vue";
import InternalDoc from "../views/GettingStarted/InternalDoc.vue";

// import GUIDELINES
import Colors from "../views/Guidelines/Colors/Colors.vue";
import List from "../views/Guidelines/List/List.vue";
import Markup from "../views/Guidelines/Markup/Markup.vue";
import Spacing from "../views/Guidelines/Spacing/Spacing.vue";
import Typography from "../views/Guidelines/Typography/Typography.vue";
import Utilities from "../views/Guidelines/Utilities/Utilities.vue";
import Variables from "../views/Guidelines/Variables/Variables.vue";

// import COMPONENTS
import Buttons from "../views/Components/Buttons/Buttons.vue";
import Card from "../views/Components/Card/Card.vue";
import Carousel from "../views/Components/Carousel/Carousel.vue";
import Charts from "../views/Components/Charts/Charts.vue";
import Checkbox from "../views/Components/Checkbox/Checkbox.vue";
import ColorSelector from "../views/Components/ColorSelector/ColorSelector.vue";
import DatePicker from "../views/Components/DatePicker/DatePicker.vue";
import DropdownMenu from "../views/Components/DropdownMenu/DropdownMenu.vue";
import DropdownList from "../views/Components/DropdownList/DropdownList.vue";
import FileIcon from "../views/Components/FileIcon/FileIcon.vue";
import Icons from "../views/Components/Icons/Icons.vue";
import Illustrations from "../views/Components/Illustrations/Illustrations.vue";
import Input from "../views/Components/Input/Input.vue";
import Loaders from "../views/Components/Loaders/Loaders.vue";
import ModelPreview from "../views/Components/ModelPreview/ModelPreview.vue";
import Pagination from "../views/Components/Pagination/Pagination.vue";
import Radio from "../views/Components/Radio/Radio.vue";
import ResponsiveGrid from "../views/Components/ResponsiveGrid/ResponsiveGrid.vue";
import SafeZoneModal from "../views/Components/SafeZoneModal/SafeZoneModal.vue";
import Search from "../views/Components/Search/Search.vue";
import SearchAutocomplete from "../views/Components/SearchAutocomplete/SearchAutocomplete.vue";
import Select from "../views/Components/Select/Select.vue";
import Table from "../views/Components/Table/Table.vue";
import Tabs from "../views/Components/Tabs/Tabs.vue";
import Text from "../views/Components/Text/Text.vue";
import Textarea from "../views/Components/Textarea/Textarea.vue";
import Textbox from "../views/Components/Textbox/Textbox.vue";
import Toggle from "../views/Components/Toggle/Toggle.vue";
import Tooltip from "../views/Components/Tooltip/Tooltip.vue";

// Smart Components views
import FileManager from "../views/SmartComponents/FileManager/FileManager.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/getting-started",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Getting started",
        component: Content,
      },
      {
        path: "designers",
        name: "designers",
        component: Designers,
      },
      {
        path: "developpers",
        name: "developpers",
        component: Developpers,
      },
      {
        path: "internal-doc",
        name: "internal-doc",
        component: InternalDoc,
      },
    ],
  },
  {
    path: "/guidelines-utilities",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Guidelines & Utilities",
        component: Content,
      },
      {
        path: "colors",
        name: "colors",
        component: Colors,
      },
      {
        path: "list",
        name: "list",
        component: List,
      },
      {
        path: "markup",
        name: "markup",
        component: Markup,
      },
      {
        path: "spacing",
        name: "spacing",
        component: Spacing,
      },
      {
        path: "typography",
        name: "typography",
        component: Typography,
      },
      {
        path: "utilities",
        name: "utilities",
        component: Utilities,
      },
      {
        path: "variables",
        name: "variables",
        component: Variables,
      },
    ],
  },
  {
    path: "/components",
    component: Layout,
    children: [
      {
        path: "",
        name: "Components",
        component: Content,
      },
      {
        path: "searchautocomplete",
        name: "searchautocomplete",
        component: SearchAutocomplete,
      },
      {
        path: "buttons",
        name: "buttons",
        component: Buttons,
      },
      {
        path: "cards",
        name: "cards",
        component: Card,
      },
      {
        path: "carousel",
        name: "carousel",
        component: Carousel,
      },
      {
        path: "charts",
        name: "charts",
        component: Charts,
      },
      {
        path: "checkbox",
        name: "checkbox",
        component: Checkbox,
      },
      {
        path: "colorselector",
        name: "colorselector",
        component: ColorSelector,
      },
      {
        path: "datepicker",
        name: "datepicker",
        component: DatePicker,
      },
      {
        path: "dropdownlist",
        name: "dropdownlist",
        component: DropdownList,
      },
      {
        path: "dropdownmenu",
        name: "dropdownmenu",
        component: DropdownMenu,
      },
      {
        path: "fileicon",
        name: "fileicon",
        component: FileIcon,
      },
      {
        path: "icons",
        name: "icons",
        component: Icons,
      },
      {
        path: "illustrations",
        name: "illustrations",
        component: Illustrations,
      },
      {
        path: "input",
        name: "input",
        component: Input,
      },
      {
        path: "loaders",
        name: "loaders",
        component: Loaders,
      },
      {
        path: "model-preview",
        name: "model-preview",
        component: ModelPreview,
      },
      {
        path: "pagination",
        name: "pagination",
        component: Pagination,
      },
      {
        path: "radio",
        name: "radio",
        component: Radio,
      },
      {
        path: "responsive-grid",
        name: "responsive-grid",
        component: ResponsiveGrid,
      },
      {
        path: "safe-zone-modal",
        name: "safe-zone-modal",
        component: SafeZoneModal,
      },
      {
        path: "search",
        name: "search",
        component: Search,
      },
      {
        path: "select",
        name: "select",
        component: Select,
      },
      {
        path: "table",
        name: "table",
        component: Table,
      },
      {
        path: "tabs",
        name: "tabs",
        component: Tabs,
      },
      {
        path: "text",
        name: "text",
        component: Text,
      },
      {
        path: "textarea",
        name: "textarea",
        component: Textarea,
      },
      {
        path: "textbox",
        name: "textbox",
        component: Textbox,
      },
      {
        path: "toggle",
        name: "toggle",
        component: Toggle,
      },
      {
        path: "tooltips",
        name: "tooltips",
        component: Tooltip,
      },
    ],
  },
  {
    path: "/smart-components",
    redirect: "/smart-components/file-manager",
    component: Layout,
    children: [
      {
        path: "file-manager",
        name: "file-manager",
        component: FileManager,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
