<template>
  <main class="article article-tabs">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
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
          <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
            >Properties</BIMDataText
          >
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
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Props:</BIMDataText
        >
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Events:</BIMDataText
        >
        <BIMDataTable :columns="eventsData[0]" :rows="eventsData.slice(1)" />
      </div>
    </div>

    <div class="article-wrapper">
      <BIMDataText component="h2" color="color-primary" margin="15px 0 10px"
        >Custom tabs</BIMDataText
      >
      <div class="m-b-12">
        The tabs component also allow you to define a custom tab content by
        means of
        <a href="https://v3.vuejs.org/guide/component-slots.html#scoped-slots"
          >scoped slots</a
        >.<br />
        Below is an example of how to do this.
      </div>
      <div class="m-b-12">
        <Code language="xml">
          <pre>
            &lt;BIMDataTabs
              :tabs="[
                { id: 0, text: 'IFC', icon: 'ifc' },
                { id: 1, text: 'BCF', icon: 'bcf' },
                { id: 2, text: 'My Account', icon: 'user' },
                { id: 3, text: 'Settings', icon: 'settings' },
              ]"
              width="100%"
              height="40px"
              tabSize="220px"
              :selected="0"
            &gt;
              &lt;template #tab="{ tab }"&gt;
                &lt;BIMDataIcon :name="tab.icon" size="xs" /&gt;
                &lt;span style="margin-left: 6px;"&gt;
                  {{ "{{ tab.text }" + "}" }}
                &lt;/span&gt;
              &lt;/template&gt;
            &lt;/BIMDataTabs&gt;
          </pre>
        </Code>
      </div>
      <div class="m-b-12">
        Result:
      </div>
      <div class="m-b-12">
        <BIMDataTabs
          :tabs="[
            { id: 0, text: 'IFC', icon: 'ifc' },
            { id: 1, text: 'BCF', icon: 'bcf' },
            { id: 2, text: 'My Account', icon: 'user' },
            { id: 3, text: 'Settings', icon: 'settings' },
          ]"
          width="100%"
          height="40px"
          tabSize="220px"
          :selected="0"
        >
          <template #tab="{ tab }">
            <BIMDataIcon :name="tab.icon" size="xs" />
            <span style="margin-left: 6px;">{{ tab.text }}</span>
          </template>
        </BIMDataTabs>
      </div>
    </div>
  </main>
</template>

<script>
import BIMDataIcon from "../../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataInput from "../../../../BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataTabs from "../../../../BIMDataComponents/BIMDataTabs/BIMDataTabs.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import Code from "../../Elements/Code/Code.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataIcon,
    BIMDataInput,
    BIMDataTable,
    BIMDataTabs,
    BIMDataText,
    Code,
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
          "32px",
          "Use this props to change the min-height of the tabs container",
        ],
        [
          "tabSize",
          "[String, Number]",
          "",
          "120px",
          "The size of tabs in px or %",
        ],
        [
          "selected",
          "[String, Number]",
          "",
          "",
          "The id (or index) of the tab to be selected",
        ],
      ],

      eventsData: [
        ["Event", "Data Type", "Data", "Description"],
        [
          "tab-click",
          "Object",
          "The clicked tab item",
          "This event is fired when a tab is clicked. " +
            "Note that clicking a tab will select it, so a 'tab-click' event always comes with an associated 'tab-selected' event.",
        ],
        [
          "tab-selected",
          "Object",
          "The selected tab item",
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
