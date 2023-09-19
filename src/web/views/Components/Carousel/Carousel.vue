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
              style="
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: bold;
                background-color: #ddd;
              "
              :style="{ width: `${itemWidth}px` }"
              v-for="i of items"
              :key="i"
            >
              {{ i }}
            </div>
          </BIMDataCarousel>
        </template>

        <template #parameters>
          <BIMDataInput
            margin="24px 0"
            type="text"
            placeholder="Carousel width"
            v-model="carouselWidth"
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
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Number of items"
            v-model="nbItems"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Item width (in px)"
            v-model="itemWidth"
          />
        </template>

        <template #import>
          import BIMDataCarousel from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataCarousel/BIMDataCarousel.vue";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataCarousel
              :style="{ width: {{ carouselWidth }} }"
              :sliderPadding="{{ sliderPadding }}"
              :minGap="{{ minGap }}"
            &gt;
              &lt;div
                :style="{ width: {{ `${itemWidth}px` }} }"
                v-for="i of items"
                :key="i"
              &gt;
                {{ "{" + "{ i }" + "}" }}
              &lt;/div&gt;
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

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
  },
  data() {
    return {
      carouselWidth: "60%",
      sliderPadding: 12,
      minGap: 24,
      nbItems: 6,
      itemWidth: 150,

      // Data
      propsData,
    };
  },
  computed: {
    items() {
      return Array.from({ length: this.nbItems }, (_, i) => i + 1);
    },
  },
};
</script>
