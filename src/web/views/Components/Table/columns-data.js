/* eslint-disable */
export default [
  [
    "Property",
    "Type/Values",
    "Description"],
  [
    "id",
    "String",
    "Column identifier that is used to determine which row field or which custom content will be displayed in that column.",
  ],
  [
    "label",
    "String",
    "Column header text"
  ],
  [
    "width",
    "String",
    "Set column width (defaults to 'auto')"
  ],
  [
    "align",
    "'left' ; 'center' ; 'right'",
    "Set how text is aligned in the column.",
  ],
  [
    "sortable",
    "Boolean",
    "If you want to sort the column, set this to true. Sortable by id value.",
  ],
  [
    "defaultSortOrder",
    "'desc' ; 'asc'",
    "Set the default sort order for the column.",
  ],
  [
    "sortFunction",
    "Function",
    "Set a custom sort function for the column. If not specified, the default sort function will be used.",
  ],
  [
    "filter",
    "Boolean",
    "If you want to filter the column, set this to true. Sortable by id value.",
  ],
  [
    "filterKey",
    "String",
    "Set the key to specify a filter by.",
  ]
];
