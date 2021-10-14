/* eslint-disable */
export default [
  ["Name", "Type", "Default value", "Description"],
  [
    "width",
    "String",
    "100%",
    "Width of the box, can be any valid CSS width value.",
  ],
  [
    "text",
    "String",
    "",
    "The text to display in the text box.",
  ],
  [
    "textMinWidth",
    "Number",
    "32",
    "Minimum text with in pixel. " +
      "If the box width is less than this width the text won't be displayed.",
  ],
  [
    "cutPosition",
    "String (Enum)",
    "middle",
    "Position at which the text is cut (if it is). " +
      "Must be one of: 'start', 'middle' or 'end'.",
  ],
  [
    "cutSymbol",
    "String",
    "...",
    "Symbol (string) to display in place of the hidden text.",
  ],
  [
    "tooltip",
    "Boolean",
    "true",
    "Whether to show the tooltip on hover or not " +
      "(false means the tooltip won't be shown).",
  ],
  [
    "tooltipPosition",
    "String (Enum)",
    "bottom",
    "Define tooltip position (relative to text). " +
      "Must be one of: 'top', 'right', 'bottom' or 'left'.",
  ],
  [
    "tooltipColor",
    "String (Enum)",
    "primary",
    "Define tooltip color. " +
      "Must be one of: 'primary', 'secondary', 'tertiary' or 'tertiary-lightest'.",
  ],
];
