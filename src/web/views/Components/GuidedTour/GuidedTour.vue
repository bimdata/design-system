<template>
  <main ref="articleGuidedTour" class="article article-guidedtour">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <div>
            <BIMDataButton
              color="primary"
              fill
              radius
              @click="showGuidedTour = true"
            >
              Open Guide Tour
            </BIMDataButton>
            <div data-guide="step-1"><h3>Hello</h3></div>
            <div data-guide="step-2"><span>World</span></div>
          </div>
          <template v-if="showGuidedTour">
            <BIMDataGuidedTour
              :tours="tours"
              :elementToObserve="guidedTourArea()"
            />
          </template>
        </template>
        <template #import>
          import BIMDataGuidedTour from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataGuidedTour.js"
        </template>

        <template #code>
          <pre>
              &lt;BIMDataGuidedTour
                :tours="tours"
                :elementToObserve="guidedTourArea()"
              /&gt;
            </pre
          >
        </template>
      </ComponentCode>
      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0"
          >Props:</BIMDataText
        >
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import BIMDataGuidedTour from "../../../../BIMDataComponents/BIMDataGuidedTour/BIMDataGuidedTour.vue";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataButton from "../../../../../src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

import tours from "./tours.js";

export default {
  components: {
    BIMDataGuidedTour,
    ComponentCode,
    BIMDataTable,
    BIMDataButton,
    BIMDataText,
  },
  data() {
    return {
      tours: tours,

      showGuidedTour: false,
      selectChecked: false,
      multiChecked: false,
      headerButtons: true,
      headerSearch: true,
      selectedFiles: [],
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        ["tours", "array", "[]", "The scenario"],
        [
          "elementToObserve",
          "object",
          "{}",
          "DOM where the guided tour takes place",
        ],
        ["zIndex", "number", "10000", "Guided tour position setting"],
      ],
    };
  },
  methods: {
    onSelectionChange(selectedFiles) {
      this.selectedFiles = selectedFiles;
    },
    guidedTourArea() {
      return this.$refs.articleGuidedTour;
    },
  },
};
</script>

<style scoped lang="scss">
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
