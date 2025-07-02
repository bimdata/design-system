<template>
  <div class="colors-implementing-container">
    <BIMDataText
      component="h2"
      display="block"
      color="color-primary"
      margin="20px 0 10px"
    >
      How implementing colors and extended palette
    </BIMDataText>

    <!----------------------------------
        BRAND COLORS
      ----------------------------------->
    <BIMDataText
      component="h4"
      display="block"
      color="color-primary"
      margin="20px 0 10px"
    >
      Brand colors
    </BIMDataText>

    <!-- color PRIMARY -->
    <BIMDataText component="h5" color="color-primary" margin="10px 0">
      Primary color & variants
    </BIMDataText>
    <ColorSwatche :colors="primaryColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="primaryColorData[0]"
      :rows="primaryColorData.slice(1)"
    />

    <!-- color SECONDARY -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px">
      Secondary color & variants
    </BIMDataText>
    <ColorSwatche :colors="secondaryColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="secondaryColorData[0]"
      :rows="secondaryColorData.slice(1)"
    />

    <!-- color TERTIARY -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px">
      Tertiary color & variants
    </BIMDataText>
    <ColorSwatche :colors="tertiaryColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="tertiaryColorData[0]"
      :rows="tertiaryColorData.slice(1)"
    />

    <!----------------------------------
        STATE COLORS
      ----------------------------------->
    <BIMDataText
      component="h3"
      display="block"
      color="color-primary"
      margin="20px 0 10px"
    >
      State colors
    </BIMDataText>

    <!-- color HIGH -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px">
      High color & variants
    </BIMDataText>
    <ColorSwatche :colors="highColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="highColorData[0]"
      :rows="highColorData.slice(1)"
    />

    <!-- color WARNING -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px">
      Warning color & variants
    </BIMDataText>
    <ColorSwatche :colors="warningColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="warningColorData[0]"
      :rows="warningColorData.slice(1)"
    />

    <!-- color SUCCESS -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px">
      Success color & variants
    </BIMDataText>
    <ColorSwatche :colors="successColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="successColorData[0]"
      :rows="successColorData.slice(1)"
    />

    <!-- color NEUTRAL -->
    <BIMDataText component="h5" color="color-primary" margin="15px 0 5px">
      Neutral color & variants
    </BIMDataText>
    <ColorSwatche :colors="neutralColors"></ColorSwatche>
    <BIMDataTable
      class="m-b-24"
      :columns="neutralColorData[0]"
      :rows="neutralColorData.slice(1)"
    />
  </div>
</template>

<script>
import highColors from "../js/highColors.js";
import neutralColors from "../js/neutralColors.js";
import primaryColors from "../js/primaryColors.js";
import secondaryColors from "../js/secondaryColors.js";
import successColors from "../js/successColors.js";
import warningColors from "../js/warningColors.js";

import BIMDataTable from "../../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
import ColorSwatche from "../GenericComponents/ColorSwatche.vue";

export default {
  components: {
    BIMDataTable,
    BIMDataText,
    ColorSwatche,
  },
  data() {
    return {
      highColors,
      neutralColors,
      primaryColors,
      secondaryColors,
      successColors,
      warningColors,
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
      tertiaryColorData: [
        ["Colors", "Description"],
        ["Tertiary", ""],
        [
          "Tertiary Lighter",
          "Used for background hover tertiary outline & tertiary ghost buttons.",
        ],
        [
          "Tertiary Light",
          "Used fo hover fill tertiary button & active ripple tertiary buttons.",
        ],
        ["Tertiary Dark", "Not used yet."],
      ],
      highColorData: [
        ["Colors", "Description"],
        ["High", ""],
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
        ["Warning", ""],
        ["Warning Lighter", "Not used yet."],
        ["Warning Light", "Not used yet."],
        ["Warning Dark", "Not used yet."],
      ],
      successColorData: [
        ["Colors", "Description"],
        ["Success", ""],
        ["Success Lighter", "Not used yet."],
        ["Success Light", "Not used yet."],
        ["Success Dark", "Not used yet."],
      ],
      neutralColorData: [
        ["Colors", "Description"],
        ["Neutral", ""],
        ["Neutral Lighter", "Not used yet."],
        ["Neutral Light", "Not used yet."],
        ["Neutral Dark", "Not used yet."],
      ],
    };
  },
};
</script>
