import { createRouter, createWebHistory } from "vue-router";

import Home from "./web/views/Home/Home.vue";
import Layout from "./web/views/Layout/Layout.vue";
import Content from "./web/views/Layout/Content.vue";

// import GETTING STARTED
import Designers from "./web/views/GettingStarted/Designers.vue";
import Developpers from "./web/views/GettingStarted/Developpers.vue";
import InternalDoc from "./web/views/GettingStarted/InternalDoc.vue";

// import GUIDELINES
import Colors from "./web/views/Guidelines/Colors/Colors.vue";
import List from "./web/views/Guidelines/List/List.vue";
import Markup from "./web/views/Guidelines/Markup/Markup.vue";
import Spacing from "./web/views/Guidelines/Spacing/Spacing.vue";
import Typography from "./web/views/Guidelines/Typography/Typography.vue";
import Utilities from "./web/views/Guidelines/Utilities/Utilities.vue";
import Variables from "./web/views/Guidelines/Variables/Variables.vue";

// import COMPONENTS
import Buttons from "./web/views/Components/Buttons/Buttons.vue";
import Card from "./web/views/Components/Card/Card.vue";
import Carousel from "./web/views/Components/Carousel/Carousel.vue";
import Charts from "./web/views/Components/Charts/Charts.vue";
import Checkbox from "./web/views/Components/Checkbox/Checkbox.vue";
import ColorSelector from "./web/views/Components/ColorSelector/ColorSelector.vue";
import DatePicker from "./web/views/Components/DatePicker/DatePicker.vue";
import DropdownMenu from "./web/views/Components/DropdownMenu/DropdownMenu.vue";
import DropdownList from "./web/views/Components/DropdownList/DropdownList.vue";
import FileIcon from "./web/views/Components/FileIcon/FileIcon.vue";
import Icons from "./web/views/Components/Icons/Icons.vue";
import Illustrations from "./web/views/Components/Illustrations/Illustrations.vue";
import Input from "./web/views/Components/Input/Input.vue";
import Loaders from "./web/views/Components/Loaders/Loaders.vue";
import Menus from "./web/views/Components/Menu/Menus.vue";
import ModelPreview from "./web/views/Components/ModelPreview/ModelPreview.vue";
import Pagination from "./web/views/Components/Pagination/Pagination.vue";
import Radio from "./web/views/Components/Radio/Radio.vue";
import ResponsiveGrid from "./web/views/Components/ResponsiveGrid/ResponsiveGrid.vue";
import SafeZoneModal from "./web/views/Components/SafeZoneModal/SafeZoneModal.vue";
import SafeZoneInline from "./web/views/Components/SafeZoneInline/SafeZoneInline.vue";
import Search from "./web/views/Components/Search/Search.vue";
import SearchAutocomplete from "./web/views/Components/SearchAutocomplete/SearchAutocomplete.vue";
import Select from "./web/views/Components/Select/Select.vue";
import Table from "./web/views/Components/Table/Table.vue";
import Tabs from "./web/views/Components/Tabs/Tabs.vue";
import Text from "./web/views/Components/Text/Text.vue";
import Textarea from "./web/views/Components/Textarea/Textarea.vue";
import Textbox from "./web/views/Components/Textbox/Textbox.vue";
import Toggle from "./web/views/Components/Toggle/Toggle.vue";
import Tooltip from "./web/views/Components/Tooltip/Tooltip.vue";

// Smart Components views
import FileManager from "./web/views/SmartComponents/FileManager/FileManager.vue";

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
        path: "",
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
        path: "",
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
        path: "menus",
        name: "menus",
        component: Menus,
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
        path: "safe-zone-inline",
        name: "safe-zone-inline",
        component: SafeZoneInline,
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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
