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
            :placeholder="placeholder"
            value=""
            :clear="isClear"
            :width="width + 'px'"
            :height="height + 'px'"
            :disabled="isDisabled"
          />
        </template>

        <template #parameters>
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Preview width (in px)"
            v-model="width"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Preview height (in px)"
            v-model="height"
          />
          <BIMDataInput
            margin="24px 0"
            type="string"
            placeholder="Placeholder"
            v-model="placeholder"
          />
          <BIMDataCheckbox text="clear" v-model="isClear" />
          <BIMDataCheckbox text="disabled" v-model="isDisabled" />
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
          "@bimdata/design-system/src/BIMDataComponents/BIMDataSearch/BIMDataSearch.vue";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataSearch
              placeholder="{{ placeholder }}"
              color="{{ selectedSearchOptionsstyle }}"
              {{ selectedSearchOptionskinds }}
              clear="{{ isClear }}"
              disabled="{{ isDisabled }}"
              :width="{{ width + "px" }}"
              :height="{{ height + "px" }}"
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

      <div class="m-t-24">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Events:</BIMDataText
        >
        <BIMDataTable :columns="eventsData[0]" :rows="eventsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";
import eventsData from "./events-data.js";

// Components
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
  },
  data() {
    return {
      backgroundColor: false,
      placeholder: "Search",
      isClear: false,
      isDisabled: false,
      width: 150,
      height: 32,
      selectedSearchOptionskinds: "radius",
      selectedSearchOptionsstyle: "primary",
      searchOptions: {
        kinds: ["radius", "square"],
        style: ["primary", "secondary"],
      },
      propsData,
      eventsData,
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
