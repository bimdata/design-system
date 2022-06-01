<template>
  <main class="article article-charts">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>

      <h4>Simple pie :</h4>

      <ComponentCode language="javascript">
        <template #module>
          <BIMDataSimplePieChart
            style="heiht: 250px; width: 250px"
            :barDistanceFromCenter="30"
            :barStrokeWidth="12"
            :graphDrawTime="2"
            :barsData="values"
          />
        </template>

        <template #import>
          import BIMDataSimplePieChart from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataSimplePieChart.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataSimplePieChart
              :barDistanceFromCenter="30"
              :barStrokeWidth="12"
              :graphDrawTime="2"
              :barData="[
                { percentage: 10, color: 'yellowgreen' },
                { percentage: 55, color: 'orange' },
                { percentage: 3, color: 'steelblue' },
                { percentage: 19, color: 'cadetblue' }
              ]"
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-24">
        <BIMDataText component="h5" margin="15px 0 0" color="color-primary">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";

import BIMDataSimplePieChart from "../../../../BIMDataComponents/BIMDataSimplePieChart/BIMDataSimplePieChart.vue";
import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataSimplePieChart,
    BIMDataTable,
    BIMDataText,
    ComponentCode,
  },
  data() {
    return {
      propsData,
      values: [
        {
          color: "yellowgreen",
          percentage: 10,
        },
        {
          color: "orange",
          percentage: 55,
        },
        {
          color: "steelblue",
          percentage: 3,
        },
        {
          color: "cadetblue",
          percentage: 19,
        },
      ],
    };
  },
};
</script>
