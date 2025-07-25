<template>
  <main class="article autocomplete-search">
    <div class="article-wrapper">
      <BIMDataText component="h1" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">
        {{ $route.name }}
      </BIMDataText>

      <ComponentCode :componentTitle="$route.name" :class="changeBackgroundColor" language="javascript">
        <template #module>
          <div>
            <BIMDataSearchAutocomplete
              placeholder="Search"
              :items="apps"
              :loading="isLoading"
              :autoclear="isAutoclear"
              :color="getOverviewSearchColor()"
              @item-click="selectedApp = $event"
              @all-results-click="onAllResultsClick"
            >
              <template #logoPlaceholder>
                <span>I lost my LOGO :'(</span>
              </template>
            </BIMDataSearchAutocomplete>
            <BIMDataButton
              style="display: inline-flex; margin-left: 12px"
              :color="currentTheme === 'theme-dark' ? 'quaternary' : 'default'" ghost rounded normal height="42px"  padding="0px 1.5rem"
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
          import BIMDataSearchAutocomplete from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataSearchAutocomplete/BIMDataSearchAutocomplete.vue";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataSearchAutocomplete
              placeholder="Search"
              :items="apps"
              {{ isLoading ? ':loading="true"' : "" }}
              {{ isAutoclear ? ':autoclear="true"' : "" }}
              color="{{ selectedSearchOptionsstyle }}"
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

export default {
  components: {
    ComponentCode,
  },
  data: function () {
    return {
      propsData,
      slotsData,
      isLoading: false,
      isAutoclear: true,
      selectedApp: null,
      selectedSearchOptionsstyle: "primary",
      searchOptions: {
        style: ["primary", "secondary", "tertiary", "quaternary"],
      },
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
  inject: ["BIMDATA_DESIGN_SYSTEM_DARK_THEME"],
  computed: {
    changeBackgroundColor() {
      return {
        "bimdata-ds__demo__silver-light":
          this.selectedSearchOptionsstyle === "secondary",
      };
    },
    currentTheme() {
      return this.BIMDATA_DESIGN_SYSTEM_DARK_THEME
        ? "theme-dark"
        : "theme-light";
    },
  },
  methods: {
    onAllResultsClick($event) {
      console.log($event);
    },
    getOverviewSearchColor() {
      return this.selectedSearchOptionsstyle;
    }
  },
};
</script>
