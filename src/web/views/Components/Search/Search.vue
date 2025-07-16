<template>
  <main class="article article-search">
    <div class="article-wrapper">
      <BIMDataText
        component="h1"
        :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'"
      >
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
            margin="12px 0"
            type="number"
            placeholder="Preview width (in px)"
            backgroundColor="white"
            v-model="width"
            :dark="currentTheme === 'theme-dark' ? true : false"
          />
          <BIMDataInput
            margin="12px 0"
            type="number"
            placeholder="Preview height (in px)"
            backgroundColor="white"
            v-model="height"
            :dark="currentTheme === 'theme-dark' ? true : false"
          />
          <BIMDataInput
            margin="12px 0 18px"
            type="string"
            placeholder="Placeholder"
            backgroundColor="white"
            v-model="placeholder"
            :dark="currentTheme === 'theme-dark' ? true : false"
          />
          <BIMDataCheckbox
            text="clear"
            v-model="isClear"
            :dark="currentTheme === 'theme-dark' ? true : false"
          />
          <BIMDataCheckbox
            text="disabled"
            v-model="isDisabled"
            :dark="currentTheme === 'theme-dark' ? true : false"
          />
          <div
            v-for="[key, values] in Object.entries(searchOptions)"
            :key="key"
          >
            <BIMDataText
              component="h5"
              :color="
                currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
              "
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
              :dark="currentTheme === 'theme-dark' ? true : false"
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
        style: ["primary", "secondary", "tertiary", "quaternary"],
      },
      propsData,
      eventsData,
    };
  },
  inject: ["theme"],
  computed: {
    changeBackgroundColor() {
      return {
        "bimdata-ds__demo__silver-light":
          this.selectedSearchOptionsstyle === "secondary",
      };
    },
    currentTheme() {
      return this.theme.value;
    },
  },
  methods: {
    getOverviewSearchClasses() {
      return `bimdata-search-bar__${this.selectedSearchOptionskinds} bimdata-search-bar__${this.selectedSearchOptionsstyle}`;
    },
  },
};
</script>

<style scoped>
.theme-dark {
  .article-search {
    .bimdata-search-bar {
      color: var(--color-primary);
      &.bimdata-search-bar__quaternary {
        color: var(--color-quaternary-lighter);
      }
    }
  }
}
</style>
