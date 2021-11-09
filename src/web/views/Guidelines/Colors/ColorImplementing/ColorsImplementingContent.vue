<template>
  <div class="colors-implementing-container">
    <!----------------------------------
        BRAND COLORS
      ----------------------------------->
    <BIMDataText
      component="h2"
      display="block"
      color="color-primary"
      margin="20px 0 10px"
      >How implementing colors and extended palette</BIMDataText
    >
    <BIMDataText
      component="h4"
      display="block"
      color="color-primary"
      margin="20px 0 10px"
      >Brand colors</BIMDataText
    >
    <!-- color PRIMARY -->
    <BIMDataText component="h5" color="color-primary" margin="10px 0"
      >Primary Color & variants</BIMDataText
    >
    <ColorSwatche :colors="primaryColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="primaryColorData[0]"
      :rows="primaryColorData.slice(1)"
    />

    <!-- color SECONDARY -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
      >Secondary Color & variants</BIMDataText
    >
    <ColorSwatche :colors="secondaryColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="secondaryColorData[0]"
      :rows="secondaryColorData.slice(1)"
    />

    <!-- color TERTIARY -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
      >Tertiary Color & variants</BIMDataText
    >
    <ColorSwatche :colors="tertiaryColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="tertiaryColorData[0]"
      :rows="tertiaryColorData.slice(1)"
    />

    <!----------------------------------
        VARIANT COLORS
      ---------------------------------->
    <BIMDataText
      component="h3"
      display="block"
      color="color-primary"
      margin="20px 0 10px"
      >Variant colors</BIMDataText
    >
    <!-- color TERTIARY LIGHTEST -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
      >Tertiary Lightest Color & variants</BIMDataText
    >
    <ColorSwatche :colors="tertiaryLightestColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="tertiaryLightestColorData[0]"
      :rows="tertiaryLightestColorData.slice(1)"
    />

    <!-- color TERTIARY DARK -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
      >Tertiary Dark Color & variants</BIMDataText
    >
    <ColorSwatche :colors="tertiaryDarkColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="tertiaryDarkColorData[0]"
      :rows="tertiaryDarkColorData.slice(1)"
    />

    <!-- color TERTIARY DARKEST -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
      >Tertiary Darkest Color & variants</BIMDataText
    >
    <ColorSwatche :colors="tertiaryDarkestColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="tertiaryDarkestColorData[0]"
      :rows="tertiaryDarkestColorData.slice(1)"
    />

    <!----------------------------------
        COMMON COLORS
      ----------------------------------->
    <BIMDataText
      component="h3"
      display="block"
      color="color-primary"
      margin="20px 0 10px"
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
    <BIMDataTable
      class="m-b-24"
      :columns="blackColorData[0]"
      :rows="blackColorData.slice(1)"
    />

    <!----------------------------------
        STATE COLORS
      ----------------------------------->
    <BIMDataText
      component="h3"
      display="block"
      color="color-primary"
      margin="20px 0 10px"
      >State colors</BIMDataText
    >
    <!-- color HIGH -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
      >High Color & variants</BIMDataText
    >
    <ColorSwatche :colors="highColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="highColorData[0]"
      :rows="highColorData.slice(1)"
    />

    <!-- color WARNING -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
      >Warning Color & variants</BIMDataText
    >
    <ColorSwatche :colors="warningColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="warningColorData[0]"
      :rows="warningColorData.slice(1)"
    />

    <!-- color SUCCESS -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
      >Success Color & variants</BIMDataText
    >
    <ColorSwatche :colors="successColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="successColorData[0]"
      :rows="successColorData.slice(1)"
    />

    <!-- color NEUTRAL -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
      >Neutral Color & variants</BIMDataText
    >
    <ColorSwatche :colors="neutralColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="neutralColorData[0]"
      :rows="neutralColorData.slice(1)"
    />

    <!-- color DISABLED -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px"
      >Disabled Color & variants</BIMDataText
    >
    <ColorSwatche :colors="disabledColors"></ColorSwatche>
  </div>
</template>

<script>
import BIMDataTable from "../../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

import ColorSwatche from "../GenericComponents/ColorSwatche.vue";
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
    BIMDataTable,
    BIMDataText,
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
      primaryColorData: [
        ["Colors", "Description"],
        ["Primary", ""],
        [
          "Primary 100",
          "Used for hover primary outline & primary ghost buttons.",
        ],
        [
          "Primary 400",
          "Used fo hover fill primary button & active ripple primary buttons.",
        ],
        ["Primary 600", "Not used yet."],
      ],
      secondaryColorData: [
        ["Colors", "Description"],
        ["Secondary", ""],
        [
          "Secondary 100",
          "Used for background hover secondary outline & secondary ghost buttons.",
        ],
        [
          "Secondary 400",
          "Used fo hover fill secondary button & active ripple secondary buttons.",
        ],
        ["Secondary 600", "Not used yet."],
      ],
      tertiaryColorData: [
        ["Colors", "Description"],
        ["Tertiary", "Used for : "],
        [
          "Tertiary 100",
          "Used for : hover default outline & default ghost buttons. ",
        ],
        ["Tertiary 400", "selected item in option list in Select component."],
        ["Tertiary 600", "Not used yet."],
      ],
      tertiaryLightestColorData: [
        ["Colors", "Description"],
        ["Tertiary Lightest", "Used for : "],
        ["Tertiary Lightest 600", "Not used yet."],
      ],
      tertiaryDarkColorData: [
        ["Colors", "Description"],
        ["Tertiary Dark", "Used for : "],
        ["Tertiary Dark 100", "Not used yet."],
        [
          "Tertiary Dark 400",
          "Used for active state for tertiary-darkest ripple button.",
        ],
        ["Tertiary Dark 600", "Not used yet."],
      ],
      tertiaryDarkestColorData: [
        ["Colors", "Description"],
        ["Tertiary Darkest", "Used for : "],
        [
          "Tertiary Darkest 100",
          "Used for hover state for tertiary-darkest outline button & ghost button.",
        ],
        [
          "Tertiary Darkest 400",
          "Used for hover state for tertiary-darkest fill button.",
        ],
        ["Tertiary Darkest 600", "Not used yet."],
      ],
      blackColorData: [
        ["Colors", "Description"],
        ["Black", "Used for : "],
        ["Black 100", "Not used yet."],
      ],
      highColorData: [
        ["Colors", "Description"],
        ["High", "Used for : "],
        [
          "High 100",
          "Used for background-color hover state for high outline button & background-color hover state ghost button.",
        ],
        [
          "High 400",
          "Used for background-color hover state for high fill & background-color active state ripple button.",
        ],
        ["High 600", "Not used yet."],
      ],
      warningColorData: [
        ["Colors", "Description"],
        ["Warning", "Used for : "],
        ["Warning 100", "Not used yet."],
        [
          "Warning 400",
          "Used for active state for tertiary-darkest ripple button.",
        ],
        ["Warning 600", "Not used yet."],
      ],
      successColorData: [
        ["Colors", "Description"],
        ["Success", "Used for : "],
        ["Success 100", "Not used yet."],
        [
          "Success 400",
          "Used for active state for tertiary-darkest ripple button.",
        ],
        ["Success 600", "Not used yet."],
      ],
      neutralColorData: [
        ["Colors", "Description"],
        ["Neutral", "Used for : "],
        ["Neutral 100", "Not used yet."],
        [
          "Neutral 400",
          "Used for active state for tertiary-darkest ripple button.",
        ],
        ["Neutral 600", "Not used yet."],
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../../../../assets/scss/_BIMDataVariables.scss";
@import "../../../../../assets/scss/mixins/_font-size.scss";
@import "./_ColorsImplementingContent.scss";
</style>
