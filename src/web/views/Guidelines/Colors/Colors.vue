<template>
  <main class="article colors">
    <div class="article-wrapper">
      <div class="colors-animations">
        <div class="colors-animations__box colors-animations__box1"></div>
        <div class="colors-animations__box colors-animations__box2"></div>
        <div class="colors-animations__box colors-animations__box3"></div>
      </div>
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <BIMDataText margin="10px 0 15px">
        For maintainability, please use these instead of hardcoding color
        values.
      </BIMDataText>
      <Code language="css">
        <pre>
          /* to use only the variables, import this line */
          @import "~@bimdata/design-system/dist/scss/BIMDataVariables.scss";

          /* to use the color utilities classes add this line. BIMDataVariables are already imported in _colors.scss */
          @import "~@bimdata/design-system/dist/scss/utilities/_colors.scss";
        </pre>
      </Code>
      <!----------------------------------
        BRAND COLORS
      ----------------------------------->
      <BIMDataText component="h3" color="color-primary" margin="20px 0 10px"
        >Brand colors</BIMDataText
      >
      <!-- color PRIMARY -->
      <BIMDataText component="h5" color="color-primary" margin="10px 0"
        >Primary Color & variants</BIMDataText
      >
      <ColorSwatche :colors="primaryColors"></ColorSwatche>

      <!-- color SECONDARY -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Secondary Color & variants</BIMDataText
      >
      <ColorSwatche :colors="secondaryColors"></ColorSwatche>

      <!-- color TERTIARY -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Tertiary Color & variants</BIMDataText
      >
      <ColorSwatche :colors="tertiaryColors"></ColorSwatche>
      <!-- <TertiaryColors :tertiaryColor="tertiaryColors" /> -->

      <!----------------------------------
        VARIANT COLORS
      ---------------------------------->
      <BIMDataText component="h3" color="color-primary" margin="20px 0 10px"
        >Variant colors</BIMDataText
      >
      <!-- color TERTIARY LIGHTEST -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Tertiary Lightest Color & variants</BIMDataText
      >
      <ColorSwatche :colors="tertiaryLightestColors"></ColorSwatche>

      <!-- color TERTIARY DARK -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Tertiary Dark Color & variants</BIMDataText
      >
      <ColorSwatche :colors="tertiaryDarkColors"></ColorSwatche>

      <!-- color TERTIARY DARKEST -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Tertiary Darkest Color & variants</BIMDataText
      >
      <ColorSwatche :colors="tertiaryDarkestColors"></ColorSwatche>

      <!----------------------------------
        COMMON COLORS
      ----------------------------------->
      <BIMDataText component="h3" color="color-primary" margin="20px 0 10px"
        >Common colors</BIMDataText
      >
      <!-- color WHITE -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >White Color & variants</BIMDataText
      >
      <ColorSwatche :colors="whiteColors"></ColorSwatche>

      <!-- color BLACK -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Black Color & variants</BIMDataText
      >
      <ColorSwatche :colors="blackColors"></ColorSwatche>

      <!----------------------------------
        STATE COLORS
      ----------------------------------->
      <BIMDataText component="h3" color="color-primary" margin="20px 0 10px"
        >State colors</BIMDataText
      >
      <!-- color HIGH -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >High Color & variants</BIMDataText
      >
      <ColorSwatche :colors="highColors"></ColorSwatche>

      <!-- color WARNING -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Warning Color & variants</BIMDataText
      >
      <ColorSwatche :colors="warningColors"></ColorSwatche>

      <!-- color SUCCESS -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Success Color & variants</BIMDataText
      >
      <ColorSwatche :colors="successColors"></ColorSwatche>

      <!-- color NEUTRAL -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Neutral Color & variants</BIMDataText
      >
      <ColorSwatche :colors="neutralColors"></ColorSwatche>

      <!-- color DISABLED -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Disabled Color & variants</BIMDataText
      >
      <ColorSwatche :colors="disabledColors"></ColorSwatche>
    </div>
  </main>
</template>

<script>
import BIMDataButton from "../../../../../src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

import ColorSwatche from "./ColorSwatche.vue";
import primaryColors from "./js/primaryColors";
import secondaryColors from "./js/secondaryColors";
import tertiaryColors from "./js/tertiaryColors";
import tertiaryLightestColors from "./js/tertiaryLightestColors";
import tertiaryDarkColors from "./js/tertiaryDarkColors";
import tertiaryDarkestColors from "./js/tertiaryDarkestColors";
import whiteColors from "./js/whiteColors";
import blackColors from "./js/blackColors";
import highColors from "./js/highColors";
import warningColors from "./js/warningColors";
import successColors from "./js/successColors";
import neutralColors from "./js/neutralColors";
import disabledColors from "./js/disabledColors";

import Code from "../../Elements/Code/Code.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataText,
    Code,
    ColorSwatche,
  },
  data() {
    return {
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
    };
  },
};
</script>

<style lang="scss">
@import "../../../../assets/scss/_BIMDataVariables.scss";
// import BIMDATA MIXINS
@import "../../../../assets/scss/mixins/_colors-variation.scss";
@import "../../../../assets/scss/mixins/_font-size.scss";

// import ALERT COMPONENT STYLE
@import "../../../../web/views/Elements/Alerts/_Alerts.scss";

// import COMPONENT STYLE
@import "./_colors-keyframes.scss";
@import "./_colors-animations.scss";
@import "./_Colors.scss";
</style>
