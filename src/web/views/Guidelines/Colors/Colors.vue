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
      <PrimaryColors :primaryColor="primaryColors" />

      <!-- color SECONDARY -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Secondary Color & variants</BIMDataText
      >
      <SecondaryColors :secondaryColor="secondaryColors" />

      <!-- color TERTIARY -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Tertiary Color & variants</BIMDataText
      >
      <TertiaryColors :tertiaryColor="tertiaryColors" />

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
      <TertiaryLightestColors :tertiaryLightestColor="tertiaryLightestColor" />

      <!-- color TERTIARY DARK -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Tertiary Dark Color & variants</BIMDataText
      >
      <TertiaryDarkColors :tertiaryDarkColor="tertiaryDarkColor" />

      <!-- color TERTIARY DARKEST -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Tertiary Darkest Color & variants</BIMDataText
      >
      <TertiaryDarkestColors :tertiaryDarkestColor="tertiaryDarkestColor" />

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
      <WhiteColors :whiteColor="whiteColor" />

      <!-- color BLACK -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Black Color & variants</BIMDataText
      >
      <BlackColors :blackColor="blackColor" />

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
      <HighColors :highColor="highColor" />

      <!-- color WARNING -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Warning Color & variants</BIMDataText
      >
      <WarningColors :warningColor="warningColor" />

      <!-- color SUCCESS -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Success Color & variants</BIMDataText
      >
      <SuccessColors :successColor="successColor" />

      <!-- color NEUTRAL -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Neutral Color & variants</BIMDataText
      >
      <NeutralColors :neutralColor="neutralColor" />

      <!-- color DISABLED -->
      <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
        >Disabled Color & variants</BIMDataText
      >
      <DisabledColors :disabledColor="disabledColor" />

    </div>
  </main>
</template>

<script>
import BIMDataButton from "../../../../../src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import PrimaryColors from "./PrimaryColors.vue";
import SecondaryColors from "./SecondaryColors.vue";
import TertiaryColors from "./TertiaryColors.vue";
import TertiaryLightestColors from "./TertiaryLightestColors.vue";
import TertiaryDarkColors from "./TertiaryDarkColors.vue";
import TertiaryDarkestColors from "./TertiaryDarkestColors.vue";
import WhiteColors from "./WhiteColors.vue";
import BlackColors from "./BlackColors.vue";
import HighColors from "./HighColors.vue";
import WarningColors from "./WarningColors.vue";
import SuccessColors from "./SuccessColors.vue";
import NeutralColors from "./NeutralColors.vue";
import DisabledColors from "./DisabledColors.vue";


import Code from "../../Elements/Code/Code.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataText,
    Code,
    PrimaryColors,
    SecondaryColors,
    TertiaryColors,
    TertiaryLightestColors,
    TertiaryDarkColors,
    TertiaryDarkestColors,
    WhiteColors,
    BlackColors,
    HighColors,
    WarningColors,
    SuccessColors,
    NeutralColors,
    DisabledColors,
  },
  props: {
    primaryColors: {
      type: Array,
      default: () => [],
    },
    secondaryColors: {
      type: Array,
      default: () => [],
    },
    tertiaryColors: {
      type: Array,
      default: () => [],
    },
    tertiaryLightestColors: {
      type: Array,
      default: () => [],
    },
    tertiaryDarkColors: {
      type: Array,
      default: () => [],
    },
    tertiaryDarkestColors: {
      type: Array,
      default: () => [],
    },
    whiteColors: {
      type: Array,
      default: () => [],
    },
    blackColors: {
      type: Array,
      default: () => [],
    },
    highColors: {
      type: Array,
      default: () => [],
    },
    warningColors: {
      type: Array,
      default: () => [],
    },
    successColors: {
      type: Array,
      default: () => [],
    },
    neutralColors: {
      type: Array,
      default: () => [],
    },
    disabledColors: {
      type: Array,
      default: () => [],
    },
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
