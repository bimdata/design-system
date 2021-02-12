<template>
  <main class="article article-tabs">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>

      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataTabs
            :tabs="tabs"
            :width="width"
            :height="height"
            :tabSize="tabSize"
            @tab-selected="activeTab = $event"
            :selected="0"
          />
          <div class="active-tab">Active Tab: {{ activeTab || "none" }}</div>
        </template>
        <template #parameters>
          <h5 class="bimdata-h5">Properties</h5>
          <BIMDataInput
            type="number"
            v-model="tabNumber"
            placeholder="Number of tabs"
          />
          <BIMDataInput
            v-model="width"
            placeholder="Tabs container width in px or %"
          />
          <BIMDataInput
            v-model="height"
            placeholder="Tabs minimum height in px"
          />
          <BIMDataInput
            v-model="tabSize"
            placeholder="Tabs minimum width in px or %"
          />
        </template>
        <template #import>
          import BIMDataTabs from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataTabs.js";
        </template>
        <template #code>
          <pre>
            &lt;BIMDataTabs
              :tabs="tabs"
              {{ `width="${width}"` }}
              {{ `height="${height}"` }}
              {{ `tabSize="${tabSize}"` }}
              @tab-selected="activeTab = $event"
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Events:</h5>
        <BIMDataTable :rows="eventsData"></BIMDataTable>
      </div>
    </div>
  </main>
</template>

<script>
import BIMDataInput from "../../../../BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataTabs from "../../../../BIMDataComponents/BIMDataTabs/BIMDataTabs.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataInput,
    BIMDataTable,
    BIMDataTabs,
    ComponentCode,
  },
  data() {
    return {
      tabNumber: 5,
      width: "100%",
      height: "40px",
      tabSize: "100",
      activeTab: "",

      propsData: [
        ["Props", "Type", "Required", "Default value", "Description"],
        [
          "tabs",
          "Array<{ id: String, label: String }>",
          "true",
          "",
          "The list of tab items (i.e. tabs id and label)",
        ],
        [
          "width",
          "[String, Number]",
          "",
          "100%",
          "Use this props to change the width of the tabs container",
        ],
        [
          "height",
          "[String, Number]",
          "",
          "30px",
          "Use this props to change the min-height of the tabs container",
        ],
        [
          "tabSize",
          "[String, Number]",
          "",
          "20%",
          "The size of tabs in px or %",
        ],
        [
          "selected",
          "[String, Number]",
          "",
          "",
          "The name (or index) of the tab to be selected",
        ],
      ],

      eventsData: [
        ["Event", "Data Type", "Data", "Description"],
        [
          "tab-click",
          "String",
          "The name of the clicked tab",
          "This event is fired when a tab is clicked",
        ],
        [
          "tab-selected",
          "String",
          "The name of the selected tab",
          "This event is fired when a tab is selected",
        ],
      ],
    };
  },
  computed: {
    tabs() {
      return [...Array(+this.tabNumber).keys()].map(i => ({
        id: i,
        label: `Tab ${i + 1}`,
      }));
    },
  },
};
</script>

<style lang="scss" scoped>
// import COMPONENT STYLE
@import "./_Tabs.scss";
</style>
