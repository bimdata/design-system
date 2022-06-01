<template>
  <main class="article article-card">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>

      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataCarousel
            :style="{ width: carouselWidth }"
            :sliderPadding="+sliderPadding"
            :minGap="+minGap"
          >
            <div
              style="height: 100px; background-color: #ddd"
              :style="{ width: `${itemWidth}px` }"
              v-for="i of [1, 2, 3, 4, 5, 6]"
              :key="i"
            ></div>
          </BIMDataCarousel>
        </template>

        <template #parameters>
          <BIMDataInput
            margin="24px 0"
            type="text"
            placeholder="Carousel width"
            v-model="carouselWidth"
          />
          <!-- <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Item width (in px)"
            v-model="itemWidth"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Slider padding (in px)"
            v-model="sliderPadding"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Minimum gap (in px)"
            v-model="minGap"
          /> -->
        </template>

        <template #import>
          import BIMDataCarousel from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataCarousel.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataCarousel :style="{ width: {{ carouselWidth }} }"&gt;
              &lt;div
                style="height: 100px; background-color: #ddd"
                :style="{ width: {{ `${itemWidth}px` }} }"
                v-for="i of [1, 2, 3, 4, 5, 6]"
                :key="i"
              &gt;&lt;/div&gt;
            &lt;/BIMDataCarousel&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" margin="15px 0 10px" color="color-primary">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";

import BIMDataCarousel from "../../../../BIMDataComponents/BIMDataCarousel/BIMDataCarousel.vue";
import BIMDataInput from "../../../../BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataCarousel,
    BIMDataInput,
    BIMDataTable,
    BIMDataText,
    ComponentCode,
  },
  data() {
    return {
      carouselWidth: "60%",
      itemWidth: 150,
      sliderPadding: 12,
      minGap: 24,

      // Data
      propsData,
    };
  },
};
</script>
