<template>
  <main class="article colors">
    <div class="article-wrapper">
      <BIMDataText component="h1" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'"> Colors </BIMDataText>
      <AnchorLink class="m-y-12" :navElements="navElements" />
      <BIMDataText margin="10px 0 15px">
        For maintainability, please use these variables instead of hardcoding
        color values.
      </BIMDataText>
      <Code language="css">
        <pre>
          /* To use only the variables, use this import */
          @import "@bimdata/design-system/src/assets/css/variables.css";

          /* To use the color utility classes add this line */
          @import "@bimdata/design-system/src/assets/css/utilities/_colors.css";
        </pre>
      </Code>

      <div id="colors">
        <ColorsPaletteContent />
      </div>

      <div id="implementing">
        <ColorsImplementingContent />
      </div>
    </div>
  </main>
</template>

<script>
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import AnchorLink from "../../Elements/AnchorLink/AnchorLink.vue";
import Code from "../../Elements/Code/Code.vue";
import ColorsPaletteContent from "./ColorPalette/ColorsPaletteContent.vue";
import ColorsImplementingContent from "./ColorImplementing/ColorsImplementingContent.vue";

export default {
  components: {
    BIMDataText,
    AnchorLink,
    Code,
    ColorsPaletteContent,
    ColorsImplementingContent,
  },
  data() {
    return {
      navElements: ["colors", "implementing"],
    };
  },
};
</script>

<style scoped>
.colors {
  #colors,
  #implementing {
    padding-top: 40px;
  }
}
</style>
