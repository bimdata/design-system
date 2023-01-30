/* eslint-disable */
export default [
  [
    "Event",
    "Data Type",
    "Data",
    "Description"
  ],
  [
    "update:selection",
    "Map",
    "The row selection map",
    "Fired each time the selection change",
  ],
  [
    "selection-changed",
    "Array",
    "The list of selected rows",
    "Fired each time the selection change",
  ],
  [
    "row-selected",
    "Object",
    "The selected row",
    "Fired each time a row is selected",
  ],
  [
    "row-deselected",
    "Object",
    "The deselected row",
    "Fired each time a row is deselected",
  ],
  [
    "all-selected",
    "-",
    "none",
    "Fired when all rows are selected at once",
  ],
  [
    "all-deselected",
    "-",
    "none",
    "Fired when all rows are deselected at once",
  ],
  [
    "row-drop",
    "{ data: Object, event: DragEvent }",
    "The row it dropped over with the corresponding event",
    "Fired when a drop event is fired on a row",
  ],
];
