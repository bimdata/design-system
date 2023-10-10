/* eslint-disable */
export default [
  [ "Name", "Type", "Default value", "Description" ],
  [
    "locale",
    "string",
    "en",
    "Use this props to select a language"
  ],
  [
    "apiUrl",
    "string",
    "https://api.bimdata.io",
    "The API url to target",
  ],
  [
    "spaceId *",
    "number",
    "",
    "The space ID"
  ],
  [
    "projectId *",
    "number",
    "",
    "The project ID"
  ],
  [
    "accessToken *",
    "string",
    "",
    "The access token"
  ],
  [
    "select",
    "boolean",
    "false",
    "Set the mode in select"
  ],
  [
    "multi",
    "boolean",
    "false",
    "Set the mode in multi select. Ignored if select is false",
  ],
  [
    "searchColor",
    "string",
    "primary",
    "Set the background color of the search bar",
  ],
  [
    "headerButtons",
    "boolean",
    "true",
    "If false, the header buttons are not visible",
  ],
  [
    "headerSearch",
    "boolean",
    "true",
    "If false, the header search is not visible",
  ],
  [
    "alreadySelectedIds",
    "number[]",
    "[]",
    "An array of already selected ids. In select mode, already selected ids are not selectable and displayed as in success",
  ],
  [
    "selectableFileTypes",
    "string[]",
    "[]",
    "An array of file type. In select mode, if some selectable file types are given, only those are selectable",
  ],
  [
    "viewPdf",
    "boolean", 
    "false",
    "Allow PDF to be seen within a viewer",
  ],
  [
    "pdfPageSelect",
    "boolean",
    "false",
    "Enable page selection for multipage PDF"
  ],
];
