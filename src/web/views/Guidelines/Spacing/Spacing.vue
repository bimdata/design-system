<template>
  <main class="article article-spacing">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <AnchorLink :navElements="elements" />
      <div class="spacing-system" id="spacing-system">
        <div>
          <BIMDataText component="h3" color="color-primary" margin="15px 0 10px"
            >The spacing system</BIMDataText
          >
          <BIMDataText display="block"
            >All spacing is defined by a base value of 12 pixels. This value of
            12 px is the basic unit of measurement for spacing.</BIMDataText
          >
          <BIMDataText
            >To be able to use these predefined spacing, import this style into
            your code:</BIMDataText
          >
          <Code language="scss">
            <pre>
              // import BIMDATA SPACING UTILITIES
              @import "node_modules/@bimdata/design-system/dist/scss/utilities/spacing.scss";
            </pre>
          </Code>
        </div>

        <div id="margin">
          <Margin></Margin>
        </div>

        <div id="padding">
          <Padding></Padding>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Code from "../../Elements/Code/Code.vue";
import Margin from "./Margin/Margin.vue";
import Padding from "./Padding/Padding.vue";

import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

import AnchorLink from "../../Elements/AnchorLink/AnchorLink.vue";
export default {
  components: {
    Code,
    Margin,
    Padding,
    BIMDataText,
    AnchorLink,
  },
  data() {
    return {
      elements: ["spacing-system", "margin", "padding"],
    };
  },
};
</script>

<style lang="scss" scoped>
// import BIMDATA VARIABLES
@import "../../../../assets/scss/_BIMDataVariables.scss";
@import "../../../../assets/scss/utilities/_flex.scss";

// import COMPONENT STYLE
@import "./_Spacing.scss";
</style>
