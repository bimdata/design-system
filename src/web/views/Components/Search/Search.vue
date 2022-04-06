<template>
  <main class="article article-search">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode
        :componentTitle="$route.name"
        :class="changeBackgroundColor"
        language="javascript"
      >
        <template #module>
          <BIMDataSearch
            :class="getOverviewSearchClasses()"
            placeholder="Search"
            value=""
          />
        </template>

        <template #parameters>
          <div
            v-for="[key, values] in Object.entries(searchOptions)"
            :key="key"
          >
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
            >
              {{ key }}
            </BIMDataText>
            <BIMDataRadio
              v-for="value in values"
              :key="value"
              :text="value"
              :id="value"
              :value="value"
              :name="key"
              v-model="$data[`selectedSearchOptions${key}`]"
            />
          </div>
        </template>

        <template #import>
          import BIMDataSearch from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataSearch.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataSearch
              placeholder="Search"
              color="{{ selectedSearchOptionsstyle }}"
              {{ selectedSearchOptionskinds }}
            /&gt;
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
import propsData from "./props-data.js";
// Components
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataSearch from "../../../../../src/BIMDataComponents/BIMDataSearch/BIMDataSearch.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    ComponentCode,
    BIMDataTable,
    BIMDataRadio,
    BIMDataSearch,
    BIMDataText,
  },
  data() {
    return {
      backgroundColor: false,
      selectedSearchOptionskinds: "radius",
      selectedSearchOptionsstyle: "primary",
      searchOptions: {
        kinds: ["radius", "square"],
        style: ["primary", "secondary"],
      },
      propsData,
    };
  },
  computed: {
    changeBackgroundColor() {
      return {
        "bimdata-ds__demo__silver-light":
          this.selectedSearchOptionsstyle === "secondary",
      };
    },
  },
  methods: {
    getOverviewSearchClasses() {
      return `bimdata-search-bar__${this.selectedSearchOptionskinds} bimdata-search-bar__${this.selectedSearchOptionsstyle}`;
    },
  },
};
</script>
