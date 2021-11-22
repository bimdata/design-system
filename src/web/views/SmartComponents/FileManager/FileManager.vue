<template>
  <main class="article article-checkbox">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <div style="width: 90%; height: 90%;">
            <BIMDataSmartFileManager
              :spaceId="515"
              :projectId="756"
              apiUrl="https://api-staging.bimdata.io"
              accessToken="fc83e49ca9444d3ea41d212599f39040"
              :select="selectChecked"
              :multi="multiChecked"
              @file-selected="onFileSelected"
              @file-deselected="onFileDeselected"
              :selectedFiles="selectedFiles"
            />
          </div>
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
          <p>Selected Files:</p>
          <ul>
            <li v-for="selectedFile of selectedFiles" :key="selectedFile.id">
              {{ selectedFile.name }}
            </li>
          </ul>
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
    </div>
  </main>
</template>

<script>
import BIMDataSmartFileManager from "../../../../SmartComponents/BIMDataSmartFileManager/BIMDataSmartFileManager.js";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";

export default {
  components: {
    BIMDataSmartFileManager,
    ComponentCode,
    BIMDataTable,
    BIMDataText,
    BIMDataCheckbox,
  },
  data() {
    return {
      selectedFiles: [],
      selectChecked: false,
      multiChecked: false,
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
      ],
    };
  },
  methods: {
    onFileSelected(file) {
      this.selectedFiles.push(file);
    },
    onFileDeselected(file) {
      this.selectedFiles = this.selectedFiles.filter(
        selectedFile => selectedFile !== file
      );
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
