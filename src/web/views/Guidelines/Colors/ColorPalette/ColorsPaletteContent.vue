<template>
  <div class="colors-container">
    <BIMDataText
      component="h2"
      display="block"
      color="color-primary"
      margin="20px 0 10px"
    >
      All brand colors palette
    </BIMDataText>
    <ColorPalette :colors="allBrandColors"></ColorPalette>
    <BIMDataTable
      class="m-t-24"
      :columns="tableData[0]"
      :rows="tableData.slice(1)"
    />
  </div>
</template>

<script>
import allBrandColors from "../js/allBrandColors";

import BIMDataTable from "../../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
import ColorPalette from "../GenericComponents/ColorPalette.vue";

export default {
  components: {
    BIMDataText,
    BIMDataTable,
    ColorPalette,
  },
  data() {
    return {
      allBrandColors,
      tableData: [
        [
          {
            id: "Colors",
            width: "200px",
          },
          {
            id: "CSS Variable name",
            width: "200px",
          },
          {
            id: "Output Value",
            width: "200px",
          },
          {
            id: "Description",
          },
        ],
        [
          "Primary",
          "--color-primary",
          "rgb(47, 55, 74)",
          "This color is the core of our brand identity. This is the most frequently used across our UI and imparts a distinct identity to our product. Use this color for primary actions, buttons, links.",
        ],
        [
          "Secondary",
          "--color-secondary",
          "rgb(249, 199, 44)",
          "This color highlight and complement the primary color. It's used to make the UI elements stand out.",
        ],
        ["White", "--color-white", "rgb(255,255,255)", "This is white color !"],
        [
          "Silver Light",
          "--color-silver-light",
          "rgb(247, 247, 247)",
          "Theses colors create shades of grey. This color is used for backgrounds and form the majority of our UI.",
        ],
        [
          "Silver",
          "--color-silver",
          "rgb(216, 216, 216)",
          "Theses colors create shades of grey. These are used for backgrounds, text colors, etc, and form the majority of our UI.",
        ],
        [
          "Silver Dark",
          "--color-silver-dark",
          "rgb(189, 189, 189)",
          "Theses colors create shades of grey. This color is mostly used for text.",
        ],
        [
          "Granite Light",
          "--color-granite-light",
          "rgb(122, 122, 122)",
          "Use this color for all disabled state.",
        ],
        [
          "Granite",
          "--color-granite",
          "rgb(96, 96, 96)",
          "Theses colors create shades of grey. This color is mostly used for icons when they are not in primary color.",
        ],
        ["Black", "--color-black", "rgb(0,0,0)", "This is black color !"],
        [
          "High",
          "--color-high",
          "rgb(255, 61, 30)",
          "This color is used for danger / errors states and status.",
        ],
        [
          "Warning",
          "--color-warning",
          "rgb(255, 145, 0)",
          "This color is used for warning states and status.",
        ],
        [
          "Success",
          "--color-success",
          "rgb(0, 175, 80)",
          "This color is used for success states, status, success or confirmation messages.",
        ],
        [
          "Text",
          "--color-text",
          "rgb(47, 55, 74)",
          "This color is used for some text. At BIMData, the text color is primary color, but you can freely change this color.",
        ],
      ],
    };
  },
};
</script>

<style scoped lang="scss" src="./_ColorsPaletteContent.scss"></style>
