const stringOptions = [
  "option 1",
  "option 2",
  "option 3",
  "option 4",
  "option 5",
  "option 6",
  "option 7",
  "option 8",
];

const objectOptions = [
  { id: 0, name: "Option 1", value: "v1" },
  { id: 1, name: "Option 2", value: "v2" },
  { id: 2, name: "Option 3", value: "v3" },
  { id: 3, name: "Option 4", value: "v4" },
  { id: 4, name: "Option 5", value: "v5" },
  { id: 5, name: "Option 6", value: "v6" },
];

const groupOptions = [
  { label: "Group 1", optionGroup: true },
  { label: "option 1" },
  { label: "option 2" },
  { label: "Group 2", optionGroup: true },
  { label: "option 3" },
  { label: "option 4", disabled: true },
  { label: "option 5" },
  { label: "option 6" },
  { label: "option 7" },
];

export { stringOptions, objectOptions, groupOptions };
