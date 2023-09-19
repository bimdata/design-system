<template>
  <main class="article article-tabs">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
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
          <div class="m-t-24">Active Tab: {{ activeTab || "none" }}</div>
        </template>
        <template #parameters>
          <BIMDataText
            component="h5"
            color="color-primary"
            margin="15px 0 10px"
          >
            Properties
          </BIMDataText>
          <BIMDataInput
            type="number"
            v-model="tabNumber"
            placeholder="Number of tabs"
          />
          <BIMDataInput
            margin="24px 0"
            v-model="width"
            placeholder="Tabs container width in px or %"
          />
          <BIMDataInput
            v-model="height"
            placeholder="Tabs minimum height in px"
          />
          <BIMDataInput
            margin="24px 0"
            v-model="tabSize"
            placeholder="Tabs minimum width in px or %"
          />
        </template>
        <template #import>
          import BIMDataTabs from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataTabs/BIMDataTabs.vue";
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
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
          Events:
        </BIMDataText>
        <BIMDataTable :columns="eventsData[0]" :rows="eventsData.slice(1)" />
      </div>
    </div>

    <div class="article-wrapper">
      <BIMDataText component="h2" color="color-primary" margin="15px 0 10px">
        Custom tabs
      </BIMDataText>
      <div class="m-b-12">
        The tabs component also allow you to define a custom tab content by
        means of
        <a href="https://v3.vuejs.org/guide/component-slots.html#scoped-slots">
          scoped slots </a
        >.<br />
        Below is 2 examples of how to do this.
      </div>

      <div class="m-b-12">Result:</div>
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
            <BIMDataIcon :name="tab.icon" size="xs" margin="0 6px 0 0" />
            <span>{{ tab.text }}</span>
          </template>
        </BIMDataTabs>
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
                &lt;BIMDataIcon :name="tab.icon" size="xs" margin="0 6px 0 0" /&gt;
                &lt;span&gt;{{ "{{ tab.text }" + "}" }}&lt;/span&gt;
              &lt;/template&gt;
            &lt;/BIMDataTabs&gt;
          </pre>
        </Code>
      </div>

      <CustomTabColors />
    </div>
  </main>
</template>

<script>
import eventsData from "./events-data.js";
import propsData from "./props-data.js";
import Code from "../../Elements/Code/Code.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import CustomTabColors from "./CustomTabColors.vue";

export default {
  components: {
    Code,
    ComponentCode,
    CustomTabColors,
  },
  data() {
    return {
      tabNumber: 5,
      width: "100%",
      height: "40px",
      tabSize: "100",
      activeTab: "",
      propsData,
      eventsData,
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
