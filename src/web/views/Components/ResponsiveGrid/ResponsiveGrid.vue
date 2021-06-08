<template>
  <main class="article article-card">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataResponsiveGrid
            style="width: 100%; height: 100%;"
            :itemWidth="itemWidth"
            :rowGap="rowGap"
            :columnGap="columnGap"
          >
            <div
              v-for="(n, i) of Array.from({ length: +nbItem })"
              :key="i"
              class="item-box"
              :style="{ width: itemWidth }"
              style="background-color: blue; color: white;"
            >
              {{ `Box ${i + 1}` }}
            </div>
          </BIMDataResponsiveGrid>
        </template>

        <template #parameters>
          <div>
            <h5 class="bimdata-h5">Parameters</h5>
            <BIMDataInput
              v-model="nbItem"
              placeholder="Number of items"
              type="number"
            />
            <BIMDataInput v-model="itemWidth" placeholder="Item width" />
            <BIMDataInput v-model="rowGap" placeholder="Row gap" />
            <BIMDataInput v-model="columnGap" placeholder="Column gap" />
          </div>
        </template>

        <template #import>
          import BIMDataResponsiveGrid from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataResponsiveGrid.js";
        </template>

        <template #code>
          <pre></pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Props:</h5>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataResponsiveGrid from "../../../../../src/BIMDataComponents/BIMDataResponsiveGrid/BIMDataResponsiveGrid.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

export default {
  components: {
    ComponentCode,
    BIMDataInput,
    BIMDataResponsiveGrid,
    BIMDataTable,
  },
  data() {
    return {
      nbItem: 5,
      itemWidth: "150px",
      rowGap: "6px",
      columnGap: "18px",
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        ["itemWidth", "String", "100px", "Use this props to set item width"],
        ["rowGap", "String", "12px", "Use this props to set row gap"],
        ["columnGap", "String", "12px", "Use this props to set column gap"],
      ],
    };
  },
  methods: {},
};
</script>
