<template>
  <main class="article your-file-class">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>

      <Code componentTitle='Search' :class="changeBackgroundColor">
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
      </Code>

      <TableProperties :properties="properties"></TableProperties>

    </div>
  </main>
</template>

<script>
import Code from "../../Components/Code.vue";
import TableProperties from "../../TableProperties/TableProperties.vue";
import BIMDataRadio from "@/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";

import BIMDataSearch from "../../../../BIMDataComponents/BIMDataSearch/BIMDataSearchBar.vue";

export default {
  components: {
    Code,
    TableProperties,
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
      properties: [
      {
        property:"placeholder",
        type: "String",
        defaultValue: '" "',
        description: "Use this property to add a placeholder"
      },
      {
        property: "width",
        type: "[Number, String]",
        defaultValue: "150px",
        description: "Use this property to change the width of the search component"
      },
      {
        property: "height",
        type: "[Number, String]",
        defaultValue: "32px",
        description: "Use this property to change the height of the search component"
      },
      {
        property: "autofocus",
        type: "Boolean",
        defaultValue: "false",
        description: "Use this property to add an autofocus on the input search"
      }
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
  @import "../../../../assets/scss/_BIMDataVariables.scss";

  @import "./_Search.scss";
</style>