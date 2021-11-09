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
import tertiaryColors from "../js/tertiaryColors";
import tertiaryLightestColors from "../js/tertiaryLightestColors";
import tertiaryDarkColors from "../js/tertiaryDarkColors";
import tertiaryDarkestColors from "../js/tertiaryDarkestColors";
import whiteColors from "../js/whiteColors";
import blackColors from "../js/blackColors";
import highColors from "../js/highColors";
import warningColors from "../js/warningColors";
import successColors from "../js/successColors";
import neutralColors from "../js/neutralColors";
import disabledColors from "../js/disabledColors";
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
      tertiaryColors,
      tertiaryLightestColors,
      tertiaryDarkColors,
      tertiaryDarkestColors,
      whiteColors,
      blackColors,
      highColors,
      warningColors,
      successColors,
      neutralColors,
      disabledColors,
      propsData: [
        ["Colors", "Description"],
        [
          "Primary",
          "This color is the core of our brand identity. This is the most frequently used across our UI and imparts a distinct identity to our product. Use this color for primary actions, buttons, links.",
        ],
        [
          "Secondary",
          "This color highlight and complement the primary color. It's used to make the UI elements stand out.",
        ],
        [
          "Tertiary",
          "Theses colors create shades of grey. These are used for backgrounds, text colors, etc, and form the majority of our UI.",
        ],
        [
          "Tertiary Lightest",
          "Theses colors create shades of grey. This color is used for backgrounds and form the majority of our UI.",
        ],
        [
          "Tertiary Dark",
          "Theses colors create shades of grey. This color is mostly used for text.",
        ],
        [
          "Tertiary Darkest",
          "Theses colors create shades of grey. This color is mostly used for icons when they are not in primary color.",
        ],
        ["White", "This is white color !"],
        ["Black", "This is black color !"],
        ["Disabled", "Use this color for all disabled state."],
        ["High", "This color is used for danger / errors states and status."],
        ["Warning", "This color is used for warning states and status."],
        [
          "Success",
          "This color is used for success states, status, success or confirmation messages.",
        ],
        ["Neutral", "This color is used for information states and status."],
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../../../../assets/scss/_BIMDataVariables.scss";
@import "../../../../../assets/scss/mixins/_font-size.scss";
@import "./_ColorsPaletteContent.scss";
</style>
