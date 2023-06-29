<template>
  <main class="article colors">
    <div class="article-wrapper">
      <!-- <div class="colors-animations">
        <div class="colors-animations__box colors-animations__box1"></div>
        <div class="colors-animations__box colors-animations__box2"></div>
        <div class="colors-animations__box colors-animations__box3"></div>
      </div> -->
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <AnchorLink class="m-y-12" :navElements="elements" />
      <BIMDataText margin="10px 0 15px">
        For maintainability, please use these instead of hardcoding color
        values.
      </BIMDataText>
      <Code language="css">
        <pre>
          /* to use only the variables, import this line */
          @import "~@bimdata/design-system/dist/scss/BIMDataVariables.scss";

          /* to use the color utilities classes add this line. BIMDataVariables are already imported in _colors.scss */
          @import "~@bimdata/design-system/dist/css/utilities/_colors.css";
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

import Code from "../../Elements/Code/Code.vue";
import AnchorLink from "../../Elements/AnchorLink/AnchorLink.vue";

import ColorsPaletteContent from "./ColorPalette/ColorsPaletteContent.vue";
import ColorsImplementingContent from "./ColorImplementing/ColorsImplementingContent.vue";

export default {
  components: {
    BIMDataText,
    Code,
    ColorsPaletteContent,
    ColorsImplementingContent,
    AnchorLink,
  },
  data() {
    return {
      elements: ["colors", "implementing"],
    };
  },
};
</script>

<style lang="scss">
// import ALERT COMPONENT STYLE
@import "../../../../web/views/Elements/Alerts/_Alerts.scss";

// import COMPONENT STYLE
@import "./_colors-keyframes.scss";
@import "./_colors-animations.scss";
@import "./_Colors.scss";
</style>
