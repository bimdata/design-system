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
  </div>
</template>

<script>
import BIMDataTable from "../../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

import ColorSwatche from "../GenericComponents/ColorSwatche.vue";
import primaryColors from "../js/primaryColors";
import secondaryColors from "../js/secondaryColors";
import highColors from "../js/highColors";
import warningColors from "../js/warningColors";
import successColors from "../js/successColors";
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
      highColors,
      warningColors,
      successColors,
      primaryColorData: [
        ["Colors", "Description"],
        ["Primary", ""],
        [
          "Primary Lighter",
          "Used for hover primary outline & primary ghost buttons.",
        ],
        [
          "Primary Light",
          "Used fo hover fill primary button & active ripple primary buttons.",
        ],
        ["Primary Dark", "Not used yet."],
      ],
      secondaryColorData: [
        ["Colors", "Description"],
        ["Secondary", ""],
        [
          "Secondary Lighter",
          "Used for background hover secondary outline & secondary ghost buttons.",
        ],
        [
          "Secondary Light",
          "Used fo hover fill secondary button & active ripple secondary buttons.",
        ],
        ["Secondary Dark", "Not used yet."],
      ],
      highColorData: [
        ["Colors", "Description"],
        ["High", "Used for : "],
        [
          "High Lighter",
          "Used for background-color hover state for high outline button & background-color hover state ghost button.",
        ],
        [
          "High Light",
          "Used for background-color hover state for high fill & background-color active state ripple button.",
        ],
        ["High Dark", "Not used yet."],
      ],
      warningColorData: [
        ["Colors", "Description"],
        ["Warning", "Used for : "],
        ["Warning Lighter", "Not used yet."],
        ["Warning Light", ""],
        ["Warning Dark", "Not used yet."],
      ],
      successColorData: [
        ["Colors", "Description"],
        ["Success", "Used for : "],
        ["Success Lighter", "Not used yet."],
        ["Success Light", ""],
        ["Success Dark", "Not used yet."],
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../../../../assets/css/variables.css";
@import "../../../../../assets/scss/mixins/_font-size.scss";
@import "./_ColorsImplementingContent.scss";
</style>
