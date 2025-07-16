<template>
  <main class="article">
    <div class="article-wrapper">
      <BIMDataText component="h1" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode
        :componentTitle="$route.name"
        language="javascript"
        githubLink="https://github.com/bimdata/design-system/blob/develop/src/BIMDataComponents/BIMDataList/BIMDataList.vue"
      >
        <template #module>
          <div style="width: 100%; height: 400px">
            <BIMDataList
              :items="items"
              :itemHeight="+itemHeight"
              :offset="+offset"
            >
              <template #default="{ item }">
                {{ item }}
              </template>
            </BIMDataList>
          </div>
        </template>

        <template #parameters>
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Item height"
            v-model="itemHeight"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="List size"
            v-model="size"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Offset"
            v-model="offset"
          />
        </template>

        <template #import>
          import BIMDataList from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataList/BIMDataList.vue"
        </template>

        <template #code>
          <pre>
            &lt;BIMDataList
              :items="items"
              :itemHeight="{{ +itemHeight }}"
              :offset="{{ +offset }}"
            /&gt;
              &lt;template #default="{ item, index }"&gt;
                &#123;&#123; item &#125;&#125;
              &lt;/template&gt;
            &lt;/BIMDataList&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
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

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

const getData = (size = 100) =>
  Array.from({ length: size }, (_, i) => `Item ${i + 1}`);

export default {
  components: {
    ComponentCode,
  },
  data() {
    return {
      size: 1000,
      itemHeight: 30,
      offset: 20,
      // Data
      propsData,
    };
  },
  inject: ["theme"],
  computed: {
    items() {
      return getData(+this.size);
    },
    currentTheme() {
      return this.theme.value;
    },
  },
};
</script>
