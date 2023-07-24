<template>
  <main class="article article-charts">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>

      <h4>Simple pie :</h4>

      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataSimplePieChart
            style="heiht: 250px; width: 250px"
            :barDistanceFromCenter="Number(barDistanceFromCenterSimplePie)"
            :barStrokeWidth="Number(barStrokeWidthSimplePie)"
            :graphDrawTime="2"
            :barsData="values"
          />
        </template>

        <template #parameters>
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Bar distance from center"
            v-model="barDistanceFromCenterSimplePie"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Bar stroke width"
            v-model="barStrokeWidthSimplePie"
          />
        </template>

        <template #import>
          import BIMDataSimplePieChart from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataSimplePieChart/BIMDataSimplePieChart.vue";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataSimplePieChart
              :barDistanceFromCenter="{{ barDistanceFromCenterSimplePie }}"
              :barStrokeWidth="{{ barStrokeWidthSimplePie }}"
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
        <BIMDataTable
          :columns="simplePiePropsData[0]"
          :rows="simplePiePropsData.slice(1)"
        />
      </div>

      <h4>Multiple pie :</h4>

      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataMultiplePieChart
            style="heiht: 250px; width: 250px"
            :firstBarDistanceFromCenter="
              Number(barDistanceFromCenterMultiplePie)
            "
            :size="Number(multiplePieSize)"
            :barStrokeWidth="Number(barStrokeWidthMultiplePie)"
            :interBarDistance="Number(interBarDistance)"
            :placeholderBarStrokeWidth="Number(placeholderBarStrokeWidth)"
            :placeholderBarStroke="placeholderBarStroke"
            :graphDrawTime="2"
            :barsData="values"
          />
        </template>

        <template #parameters>
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Size"
            v-model="multiplePieSize"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Bar distance from center"
            v-model="barDistanceFromCenterMultiplePie"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Bar stroke width"
            v-model="barStrokeWidthMultiplePie"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Inter bar distance"
            v-model="interBarDistance"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Placeholder bar stroke width"
            v-model="placeholderBarStrokeWidth"
          />
          <BIMDataInput
            margin="24px 0"
            type="numtextber"
            placeholder="Placeholder bar stroke"
            v-model="placeholderBarStroke"
          />
        </template>

        <template #import>
          import BIMDataMultiplePieChart from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataMultiplePieChart/BIMDataMultiplePieChart.vue";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataMultiplePieChart
              :firstBarDistanceFromCenter="{{
              barDistanceFromCenterMultiplePie
            }}"
              :size="{{ multiplePieSize }}"
              :barStrokeWidth="{{ barStrokeWidthMultiplePie }}"
              :interBarDistance="{{ interBarDistance }}"
              :placeholderBarStrokeWidth="{{ placeholderBarStrokeWidth }}"
              :placeholderBarStroke="{{ placeholderBarStroke }}"
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
        <BIMDataTable
          :columns="multiplePiePropsData[0]"
          :rows="multiplePiePropsData.slice(1)"
        />
      </div>
    </div>
  </main>
</template>

<script>
import simplePiePropsData from "./simple-pie-props-data.js";
import multiplePiePropsData from "./multiple-pie-props-data.js";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
  },
  data() {
    return {
      barDistanceFromCenterSimplePie: 30,
      barStrokeWidthSimplePie: 10,
      barDistanceFromCenterMultiplePie: 57,
      barStrokeWidthMultiplePie: 10,
      interBarDistance: 16,
      placeholderBarStrokeWidth: 4,
      placeholderBarStroke: "#D8D8D8",
      simplePiePropsData,
      multiplePiePropsData,
      multiplePieSize: 200,
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
          percentage: 32,
        },
      ],
    };
  },
};
</script>
