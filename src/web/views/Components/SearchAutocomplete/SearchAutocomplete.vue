<template>
  <main class="article autocomplete-search">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>

      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <div>
            <BIMDataSearchAutocomplete
              class="m-t-24"
              placeholder="Search"
              :items="apps"
              :loading="isLoading"
              :autoclear="isAutoclear"
              @item-click="selectedApp = $event"
              @all-results-click="onAllResultsClick"
            >
              <template #logoPlaceholder>
                <span>I lost my LOGO :'(</span>
              </template>
            </BIMDataSearchAutocomplete>
            <BIMDataButton
              style="display: inline-flex; margin-left: 12px"
              fill
              radius
              @click="selectedApp = null"
            >
              Reset
            </BIMDataButton>
          </div>
          <div class="m-t-24">
            {{ selectedApp ? JSON.stringify(selectedApp) : "" }}
          </div>
        </template>

        <template #parameters>
          <div class="m-t-12">
            <BIMDataCheckbox text="Loading" v-model="isLoading" />
          </div>
          <div class="m-t-12">
            <BIMDataCheckbox text="Autoclear" v-model="isAutoclear" />
          </div>
        </template>

        <template #import>
          import BIMDataSearchAutocomplete from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataSearchAutocomplete.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataSearchAutocomplete
              placeholder="Search"
              :items="apps"
              {{ isLoading ? ':loading="true"' : "" }}
              {{ isAutoclear ? ':autoclear="true"' : "" }}
              @item-click="onItemClick"
              @all-results-click="onAllResultsClick"
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

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Slots:
        </BIMDataText>
        <BIMDataTable :columns="slotsData[0]" :rows="slotsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";
import slotsData from "./slots-data.js";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataButton from "../../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataCheckbox from "../../../../BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataSearchAutocomplete from "../../../../BIMDataComponents/BIMDataSearchAutocomplete/BIMDataSearchAutocomplete.vue";
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";

export default {
  components: {
    ComponentCode,
    BIMDataButton,
    BIMDataCheckbox,
    BIMDataSearchAutocomplete,
    BIMDataText,
    BIMDataTable,
  },
  data: function () {
    return {
      propsData,
      slotsData,
      isLoading: false,
      isAutoclear: true,
      selectedApp: null,
      apps: [
        {
          title: "App 01",
          text: "Ceci est une première longue description pour faire un test",
          logo: "https://picsum.photos/200/300",
        },
        {
          title: "App 02",
          text: "Description here",
          logo: "https://picsum.photos/id/237/200/300",
        },
        {
          title: "App 03",
          text: "Description here",
          logo: "https://picsum.photos/seed/picsum/200/300",
        },
        {
          title: "App 04",
          text: "Description here",
        },
      ],
    };
  },
  methods: {
    onAllResultsClick($event) {
      console.log($event);
    },
  },
};
</script>
