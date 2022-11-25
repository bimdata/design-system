<template>
  <main class="article article-card">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataResponsiveGrid
            class="demo-grid"
            :itemWidth="itemWidth"
            :rowGap="rowGap"
            :columnGap="columnGap"
            :isRepeatFit="checkboxFitItemsChecked"
          >
            <div
              class="demo-grid-item"
              :style="{ width: '100%', height: itemWidth }"
              v-for="(n, i) of Array.from({ length: +nbItem })"
              :key="i"
            >
              {{ `Item ${i + 1}` }}
            </div>
          </BIMDataResponsiveGrid>
        </template>

        <template #parameters>
          <div class="demo-parameters">
            <BIMDataInput
              v-model="nbItem"
              placeholder="Number of items"
              type="number"
              min="1"
            />
            <BIMDataInput v-model="itemWidth" placeholder="Item width" />
            <BIMDataInput v-model="rowGap" placeholder="Row gap" />
            <BIMDataInput v-model="columnGap" placeholder="Column gap" />
            <BIMDataCheckbox
              text="Fit items to grid"
              v-model="checkboxFitItemsChecked"
            />
          </div>
        </template>

        <template #import>
          import BIMDataResponsiveGrid from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataResponsiveGrid.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataResponsiveGrid
              {{ `itemWidth="${itemWidth}"` }}
              {{ `rowGap="${rowGap}"` }}
              {{ `columnGap="${columnGap}"` }}
            &gt;
              &lt;div
                {{ `style="width: 100%; height: ${itemWidth}"` }}
                v-for="i of items"
                :key="i"
              &gt;
                {{ "{{ Item ${i + 1} }" + "}" }}
              &lt;/div&gt;
            &lt;/BIMDataResponsiveGrid&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataResponsiveGrid from "../../../../../src/BIMDataComponents/BIMDataResponsiveGrid/BIMDataResponsiveGrid.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    ComponentCode,
    BIMDataCheckbox,
    BIMDataInput,
    BIMDataResponsiveGrid,
    BIMDataTable,
    BIMDataText,
  },
  data() {
    return {
      nbItem: 10,
      itemWidth: "150px",
      rowGap: "6px",
      columnGap: "18px",
      checkboxFitItemsChecked: false,
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        ["itemWidth", "String", "100px", "Define available width for items"],
        ["rowGap", "String", "12px", "Define the space between two rows"],
        [
          "columnGap",
          "String",
          "12px",
          "Define the space between two columns.",
        ],
        [
          "isRepeatFit",
          "Boolean",
          "false",
          "Set this props to 'true' If you want fits the currently available columns into the space by expanding them so that they take up any available space. By default, the component fills the row with as many columns as it can fit.",
        ],
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "./_ResponsiveGrid.scss";
</style>
