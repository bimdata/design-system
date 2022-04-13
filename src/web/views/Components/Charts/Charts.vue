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
            :barsData="values"
            style="heiht: 250px; width: 250px"
          ></BIMDataSimplePieChart>
        </template>

        <template #import>
          import BIMDataSimplePieChart from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataSimplePieChart.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataSimplePieChart&gt;&lt;/BIMDataSimplePieChart&gt;
          </pre>
        </template>
      </ComponentCode>
    </div>
  </main>
</template>

<script>
import BIMDataSimplePieChart from "@/BIMDataComponents/BIMDataSimplePieChart/BIMDataSimplePieChart.vue";
import BIMDataText from "@/BIMDataComponents/BIMDataText/BIMDataText.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataSimplePieChart,
    BIMDataText,
    ComponentCode,
  },
  data() {
    return {
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
          percentage: 1,
        },
        {
          color: "steelblue",
          percentage: 15,
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
