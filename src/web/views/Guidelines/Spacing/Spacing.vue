<template>
  <main class="article article-spacing">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <nav>
        <AnchorLink v-for="elem of elements" :key="elem" :target="elem">
          {{ elem }}
        </AnchorLink>
      </nav>
      <div class="spacing-system" id="spacing-system">
        <div>
          <h3 class="bimdata-h3">The spacing system</h3>
          <p class="bimdata-text">
            All spacing is defined by a base value of 12 pixels. This value of
            12 px is the basic unit of measurement for spacing.
          </p>

          <p>
            To be able to use these predefined spacing, import this style into
            your code:
          </p>
          <Code language="scss">
            <pre>
              // import BIMDATA SPACING UTILITIES
              @import "node_modules/@bimdata/design-system/dist/scss/mixins/_spacing.scss";
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

import AnchorLink from "../../Elements/AnchorLink/AnchorLink.vue";
export default {
  components: {
    Code,
    Margin,
    Padding,
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
