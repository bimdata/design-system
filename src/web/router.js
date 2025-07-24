import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/getting-started",
    component: () => import("./views/Layout/Layout.vue"),
    children: [
      {
        path: "",
        name: "Getting started",
        component: () => import("./views/Layout/Content.vue"),
      },
      {
        path: "designers",
        name: "designers",
        component: () => import("./views/GettingStarted/Designers.vue"),
      },
      {
        path: "developpers",
        name: "developpers",
        component: () => import("./views/GettingStarted/Developpers.vue"),
      },
      {
        path: "internal-doc",
        name: "internal-doc",
        component: () => import("./views/GettingStarted/InternalDoc.vue"),
      },
    ],
  },
  {
    path: "/guidelines-utilities",
    component: () => import("./views/Layout/Layout.vue"),
    children: [
      {
        path: "",
        name: "Guidelines & Utilities",
        component: () => import("./views/Layout/Content.vue"),
      },
      {
        path: "utilities",
        name: "utilities",
        component: () => import("./views/Guidelines/Utilities/Utilities.vue"),
      },
      {
        path: "variables",
        name: "variables",
        component: () => import("./views/Guidelines/Variables/Variables.vue"),
      },
      {
        path: "colors",
        name: "colors",
        component: () => import("./views/Guidelines/Colors/Colors.vue"),
      },
      {
        path: "spacing",
        name: "spacing",
        component: () => import("./views/Guidelines/Spacing/Spacing.vue"),
      },
      {
        path: "typography",
        name: "typography",
        component: () => import("./views/Guidelines/Typography/Typography.vue"),
      },
    ],
  },
  {
    path: "/components",
    component: () => import("./views/Layout/Layout.vue"),
    children: [
      {
        path: "",
        name: "Components",
        component: () => import("./views/Layout/Content.vue"),
      },
      {
        path: "searchautocomplete",
        name: "searchautocomplete",
        component: () =>
          import(
            "./views/Components/SearchAutocomplete/SearchAutocomplete.vue"
          ),
      },
      {
        path: "buttons",
        name: "buttons",
        component: () => import("./views/Components/Buttons/Buttons.vue"),
      },
      {
        path: "cards",
        name: "cards",
        component: () => import("./views/Components/Card/Card.vue"),
      },
      {
        path: "carousel",
        name: "carousel",
        component: () => import("./views/Components/Carousel/Carousel.vue"),
      },
      {
        path: "charts",
        name: "charts",
        component: () => import("./views/Components/Charts/Charts.vue"),
      },
      {
        path: "checkbox",
        name: "checkbox",
        component: () => import("./views/Components/Checkbox/Checkbox.vue"),
      },
      {
        path: "colorselector",
        name: "colorselector",
        component: () =>
          import("./views/Components/ColorSelector/ColorSelector.vue"),
      },
      {
        path: "datepicker",
        name: "datepicker",
        component: () => import("./views/Components/DatePicker/DatePicker.vue"),
      },
      {
        path: "dropdownlist",
        name: "dropdownlist",
        component: () =>
          import("./views/Components/DropdownList/DropdownList.vue"),
      },
      {
        path: "dropdownmenu",
        name: "dropdownmenu",
        component: () =>
          import("./views/Components/DropdownMenu/DropdownMenu.vue"),
      },
      {
        path: "fileicon",
        name: "fileicon",
        component: () => import("./views/Components/FileIcon/FileIcon.vue"),
      },
      {
        path: "icons",
        name: "icons",
        component: () => import("./views/Components/Icons/Icons.vue"),
      },
      {
        path: "illustrations",
        name: "illustrations",
        component: () =>
          import("./views/Components/Illustrations/Illustrations.vue"),
      },
      {
        path: "infobox",
        name: "infobox",
        component: () => import("./views/Components/Infobox/Infobox.vue"),
      },
      {
        path: "input",
        name: "input",
        component: () => import("./views/Components/Input/Input.vue"),
      },
      {
        path: "list",
        name: "list",
        component: () => import("./views/Components/List/List.vue"),
      },
      {
        path: "loaders",
        name: "loaders",
        component: () => import("./views/Components/Loaders/Loaders.vue"),
      },
      {
        path: "menus",
        name: "menus",
        component: () => import("./views/Components/Menu/Menus.vue"),
      },
      {
        path: "pagination",
        name: "pagination",
        component: () => import("./views/Components/Pagination/Pagination.vue"),
      },
      {
        path: "radio",
        name: "radio",
        component: () => import("./views/Components/Radio/Radio.vue"),
      },
      {
        path: "responsive-grid",
        name: "responsive-grid",
        component: () =>
          import("./views/Components/ResponsiveGrid/ResponsiveGrid.vue"),
      },
      {
        path: "safe-zone-inline",
        name: "safe-zone-inline",
        component: () =>
          import("./views/Components/SafeZoneInline/SafeZoneInline.vue"),
      },
      {
        path: "search",
        name: "search",
        component: () => import("./views/Components/Search/Search.vue"),
      },
      {
        path: "select",
        name: "select",
        component: () => import("./views/Components/Select/Select.vue"),
      },
      {
        path: "slider",
        name: "slider",
        component: () => import("./views/Components/Slider/Slider.vue"),
      },
      {
        path: "table",
        name: "table",
        component: () => import("./views/Components/Table/Table.vue"),
      },
      {
        path: "tabs",
        name: "tabs",
        component: () => import("./views/Components/Tabs/Tabs.vue"),
      },
      {
        path: "text",
        name: "text",
        component: () => import("./views/Components/Text/Text.vue"),
      },
      {
        path: "textarea",
        name: "textarea",
        component: () => import("./views/Components/Textarea/Textarea.vue"),
      },
      {
        path: "textbox",
        name: "textbox",
        component: () => import("./views/Components/Textbox/Textbox.vue"),
      },
      {
        path: "toggle",
        name: "toggle",
        component: () => import("./views/Components/Toggle/Toggle.vue"),
      },
      {
        path: "tooltips",
        name: "tooltips",
        component: () => import("./views/Components/Tooltip/Tooltip.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
