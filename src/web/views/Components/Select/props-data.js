/* eslint-disable */
export default [
  ["Name", "Type", "Default value", "Description"],
  ["disabled", "Boolean", "false", "When true the selector will be disabled."],
  [
    "clearSearchOnLeave",
    "Boolean",
    "false",
    "In multi-selection mode: clear search bar on click away. In single selection: clear search bar on select element or click away.",
  ],
  ["label", "String", "null", "Set the selector label (placeholder)."],
  [
    "modelValue",
    "[String, Object, Array]",
    "",
    "Use this prop to bind the selector value to a variable.",
  ],
  [
    "multi",
    "Boolean",
    "false",
    "Use this boolean to select multiple options from a list of options.",
  ],
  [
    "nullLabel",
    "String",
    "",
    "Define a custom label for `null` or `undefined` options.",
  ],
  [
    "nullValue",
    "Boolean",
    "false",
    "This props has no effect in multi-selection mode. " +
      "Add a 'none' value in single-selection mode.",
  ],
  [
    "optionKey",
    "String",
    "null",
    "Only use this props if the 'options' props is an array of objects. " +
      "Specify which field of the object represent the option value.",
  ],
  [
    "optionLabelKey",
    "String",
    "null",
    "Only use this props if the 'options' props is an array of objects. " +
      "Specify which field of the object represent the option label.",
  ],
  [
    "options",
    "Array",
    "[]",
    "Array of available options. Can be an array of strings or objects (not both at the same time).",
  ],
  ["search", "Boolean", "false", "Use this boolean to add a search bar."],
  [
    "searchPlaceholder",
    "String",
    "Search",
    "Use this props to custom search placeholder.",
  ],  
  ["width", "[String, Number]", "100%", "Set the selector width."],

];
