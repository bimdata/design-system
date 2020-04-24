<template>
  <main class="article your-file-class">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>

      <ComponentCode :componentTitle='$route.name' :class="changeBackgroundColor">
        <template #module >
          <BIMDataSearch :class="getOverviewSearchClasses()" placeholder="Search"></BIMDataSearch>
        </template>

        <template #parameters>
          <div class="bimdata-ds__demo__parameters__options" v-for="[key, values] in Object.entries(searchOptions)" :key="key">
            <h5>{{ key }}</h5>
            <BIMDataRadio
              v-for="value in values"
              :key="value"
              :text="value"
              :id="value"
              :value="value"
              :name="key"
              v-model="$data[`selectedSearchOptions${key}`]"
            >
            </BIMDataRadio>
          </div>
        </template>

        <template #code>
          <pre>
            &lt;BIMDataSearch placeholder="Search" class="bimdata-search-bar__{{selectedSearchOptionskinds}} bimdata-search-bar__{{selectedSearchOptionsstyle}}"&gt;
            &lt;/BIMDataSearch&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5>Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>

    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataTable from "@/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataRadio from "@/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";

import BIMDataSearch from "@/BIMDataComponents/BIMDataSearch/BIMDataSearchInput.vue";

export default {
  components: {
    ComponentCode,
    BIMDataTable,
    BIMDataRadio,
    BIMDataSearch
  },
  data(){
    return {
      backgroundColor: false,
      selectedSearchOptionskinds: "radius",
      selectedSearchOptionsstyle: "primary",
      searchOptions: {
        kinds: [
          "radius",
          "square"
        ],
        style: [
          "primary",
          "secondary"
        ]
      },
      propsData: [
        [
          "Props", "Type", "Default value", "Description"
        ],
        [
          "placeholder", "String", "''", "Use this props to add a placeholder"
        ],
        [
          "width", "[Number, String]", "150px", "Use this props to change the width of the search component"
        ],
        [
          "height", "[Number, String]", "32px", "Use this props to change the height of the search component"
        ],
        [
          "autofocus", "Boolean", "false", "Use this boolean to add an autofocus on the input search"
        ]
      ]
    }
  },
  methods: {
    getOverviewSearchClasses(){
      return `bimdata-search-bar__${this.selectedSearchOptionskinds} bimdata-search-bar__${this.selectedSearchOptionsstyle}`
    }
  },
  computed: {
    changeBackgroundColor() {
      return {
        'bimdata-ds__demo__tertiary-lightest': this.selectedSearchOptionsstyle === "secondary"
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_Search.scss";
</style>