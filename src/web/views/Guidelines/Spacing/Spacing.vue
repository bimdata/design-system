<template>
  <main class="article article-spacing">
    <div class="article-wrapper">
      <BIMDataText component="h1" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'"> Spacing </BIMDataText>
      <AnchorLink :navElements="navElements" />
      <div class="spacing-system" id="spacing-system">
        <div>
          <BIMDataText
            component="h3"
            color="color-primary"
            margin="15px 0 10px"
          >
            The spacing system
          </BIMDataText>
          <BIMDataText display="block">
            All spacing is defined by a base value of 12 pixels. This value of
            12px is the base unit for spacing measurement.
          </BIMDataText>
          <BIMDataText>
            To be able to use these predefined spacing, import this style into
            your code:
          </BIMDataText>
          <Code language="scss">
            <pre>
              /* To import spacing utility classes */
              @import "@bimdata/design-system/src/assets/css/utilities/_spacing.css";
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
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
import AnchorLink from "../../Elements/AnchorLink/AnchorLink.vue";
import Code from "../../Elements/Code/Code.vue";
import Margin from "./Margin/Margin.vue";
import Padding from "./Padding/Padding.vue";

export default {
  components: {
    BIMDataText,
    AnchorLink,
    Code,
    Margin,
    Padding,
  },
  data() {
    return {
      navElements: ["spacing-system", "margin", "padding"],
    };
  },
};
</script>

<style scoped>
.article-spacing {
  .article-spacing__code {
    display: flex;
    justify-content: space-between;

    .article-spacing__code__item {
      margin-right: var(--spacing-unit);
      flex: 1;
      pre {
        margin-bottom: 0;
      }
    }
  }

  #spacing-system,
  #margin,
  #padding {
    padding-top: 40px;
  }
}
</style>
