/* eslint-disable */
export default [
  [ "Event name", "Payload" ],
  [
    "selection-change",
    "An array of selected files: [{ document: Object, model: Object | null }]"
  ],
  [
    "error",
    "The catched error."
  ],
  [
    "success",
    "{ type: ['folderDeleted', 'fileDeleted', 'folderRenamed', 'fileRenamed', 'folderCreated', 'fileCreated'], message: String, content: Object }",
  ],
];
