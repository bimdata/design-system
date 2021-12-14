<template>
  <main class="article article-checkbox">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataFileManager
            :spaceId="515"
            :projectId="756"
            apiUrl="https://api-staging.bimdata.io"
            accessToken="fc83e49ca9444d3ea41d212599f39040"
            :select="selectChecked"
            :multi="multiChecked"
            @selection-change="onSelectionChange"
            style="resize: auto; overflow: hidden;"
          />
        </template>

        <template #parameters>
          <BIMDataCheckbox text="select" v-model="selectChecked">
          </BIMDataCheckbox>
          <BIMDataCheckbox
            text="multi"
            v-model="multiChecked"
            :disabled="!selectChecked"
          >
          </BIMDataCheckbox>
        </template>

        <template #import>
          import BIMDataCheckbox from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataCheckbox.js"
        </template>

        <template #code>
          <pre>
              &lt;BIMDataSmartFileManager
                :spaceId="515"
                :projectId="756"
                apiUrl="https://api-staging.bimdata.io"
                accessToken="fc83e49ca9444d3ea41d212599f39040"
                :select="{{ String(selectChecked) }}"
                :multi="{{ String(multiChecked) }}"
                /&gt;
            </pre
          >
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0"
          >Props:</BIMDataText
        >
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0"
          >Events:</BIMDataText
        >
        <BIMDataTable :columns="eventsData[0]" :rows="eventsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import BIMDataFileManager from "../../../../BIMDataSmartComponents/BIMDataFileManager/BIMDataFileManager.vue";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";

export default {
  components: {
    BIMDataFileManager,
    ComponentCode,
    BIMDataTable,
    BIMDataText,
    BIMDataCheckbox,
  },
  data() {
    return {
      selectChecked: false,
      multiChecked: false,
      selectedFiles: [],
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        [
          "apiUrl",
          "string",
          "https://api.bimdata.io",
          "The API url to target.",
        ],
        ["spaceId", "number", "null", "The space ID"],
        ["projectId", "number", "null", "The project ID"],
        ["accessToken", "string", "null", "The access token"],
        ["select", "boolean", "false", "Set the mode in select"],
        [
          "multi",
          "boolean",
          "false",
          "Set the mode in multi select. Ignored if select is false.",
        ],
        [
          "searchColor",
          "string",
          "secondary",
          "Set the background color of the search bar.",
        ],
      ],
      eventsData: [
        ["Event name", "Payload"],
        ["selection-change", "An array of selected files"],
        ["error", "The catched error."],
        [
          "success",
          "{ type: ['folderDeleted', 'fileDeleted', 'folderRenamed', 'fileRenamed', 'folderCreated', 'fileCreated'], message: String, content: Object }",
        ],
      ],
    };
  },
  methods: {
    onSelectionChange(selectedFiles) {
      this.selectedFiles = selectedFiles;
    },
  },
};
</script>

<style scoped lang="scss">
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
