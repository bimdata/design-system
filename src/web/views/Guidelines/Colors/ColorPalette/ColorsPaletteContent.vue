<template>
  <div class="colors-container">
    <BIMDataText
      component="h2"
      display="block"
      color="color-primary"
      margin="20px 0 10px"
      >All brand colors palette</BIMDataText
    >
    <ColorPalette :colors="allBrandColors"></ColorPalette>
    <BIMDataTable
      class="m-t-24"
      :columns="propsData[0]"
      :rows="propsData.slice(1)"
    />
  </div>
</template>

<script>
import BIMDataTable from "../../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

import ColorPalette from "../GenericComponents/ColorPalette.vue";
import allBrandColors from "../js/allBrandColors";
import primaryColors from "../js/primaryColors";
import secondaryColors from "../js/secondaryColors";
import whiteColors from "../js/whiteColors";
import blackColors from "../js/blackColors";
import highColors from "../js/highColors";
import warningColors from "../js/warningColors";
import successColors from "../js/successColors";
export default {
  components: {
    BIMDataText,
    BIMDataTable,
    ColorPalette,
  },
  data() {
    return {
      allBrandColors,
      primaryColors,
      secondaryColors,
      whiteColors,
      blackColors,
      highColors,
      warningColors,
      successColors,
      propsData: [
        [
          {
            id: "Colors",
            width: "80px",
          },
          {
            id: "CSS Variable name",
            width: "150px",
          },
          {
            id: "SCSS Variable name",
            width: "150px",
          },
          {
            id: "Output Value",
            width: "100px",
          },
          {
            id: "Description",
            width: "500px",
          },
        ],
        [
          "Primary",
          "--color-primary",
          "$color-primary",
          "rgb(47, 55, 74)",
          "This color is the core of our brand identity. This is the most frequently used across our UI and imparts a distinct identity to our product. Use this color for primary actions, buttons, links.",
        ],
        [
          "Secondary",
          "--color-secondary",
          "$color-secondary",
          "rgb(249, 199, 44)",
          "This color highlight and complement the primary color. It's used to make the UI elements stand out.",
        ],
        [
          "White",
          "--color-white",
          "$color-white",
          "rgb(255,255,255)",
          "This is white color !",
        ],
        [
          "Silver Light",
          "--color-silver-light",
          "$color-silver-light",
          "rgb(247, 247, 247)",
          "Theses colors create shades of grey. This color is used for backgrounds and form the majority of our UI.",
        ],
        [
          "Silver",
          "--color-silver",
          "$color-silver",
          "rgb(216, 216, 216)",
          "Theses colors create shades of grey. These are used for backgrounds, text colors, etc, and form the majority of our UI.",
        ],
        [
          "Silver Dark",
          "--color-silver-dark",
          "$color-silver-dark",
          "rgb(189, 189, 189)",
          "Theses colors create shades of grey. This color is mostly used for text.",
        ],
        [
          "Granite Light",
          "--color-granite-light",
          "$color-granite-light",
          "rgb(122, 122, 122)",
          "Use this color for all disabled state.",
        ],
        [
          "Granite",
          "--color-granite",
          "$color-granite",
          "rgb(96, 96, 96)",
          "Theses colors create shades of grey. This color is mostly used for icons when they are not in primary color.",
        ],
        [
          "Black",
          "--color-black",
          "$color-black",
          "rgb(0,0,0)",
          "This is black color !",
        ],
        [
          "Text",
          "--color-text",
          "$color-text",
          "rgb(47, 55, 74)",
          "This color is used for some text. At BIMData, the text color is primary color, but you can freely change this color.",
        ],
        [
          "High",
          "--color-high",
          "$color-high",
          "rgb(255, 61, 30)",
          "This color is used for danger / errors states and status.",
        ],
        [
          "Warning",
          "--color-warning",
          "$color-warning",
          "rgb(255, 145, 0)",
          "This color is used for warning states and status.",
        ],
        [
          "Success",
          "--color-success",
          "$color-success",
          "rgb(0, 175, 80)",
          "This color is used for success states, status, success or confirmation messages.",
        ],
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../../../../assets/css/variables.css";
@import "../../../../../assets/scss/mixins/_font-size.scss";
@import "./_ColorsPaletteContent.scss";
</style>
