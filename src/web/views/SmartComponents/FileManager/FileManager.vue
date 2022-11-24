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
            accessToken="eGNpr626gNtn8QrB5gk0imfrukoHDQiW"
            :select="selectChecked"
            :multi="multiChecked"
            @selection-change="onSelectionChange"
            style="resize: auto; overflow: hidden"
            :headerButtons="headerButtons"
            :headerSearch="headerSearch"
            :alreadySelectedIds="[2694]"
            :selectableFileTypes="['pdf', 'dwg']"
            :viewPdf="isViewPdf"
          />
        </template>

        <template #parameters>
          <BIMDataCheckbox text="select" v-model="selectChecked" />
          <BIMDataCheckbox
            text="multi"
            v-model="multiChecked"
            :disabled="!selectChecked"
          />
          <BIMDataCheckbox text="header buttons" v-model="headerButtons" />
          <BIMDataCheckbox text="header search" v-model="headerSearch" />
          <BIMDataCheckbox text="viewPdf" v-model="isViewPdf" />
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
                :headerButtons="{{ headerButtons }}"
                :headerSearch="{{ headerSearch }}"
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
      headerButtons: true,
      headerSearch: true,
      isViewPdf: false,
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
        [
          "headerButtons",
          "boolean",
          "true",
          "If false, the header buttons are not visible.",
        ],
        [
          "headerSearch",
          "boolean",
          "true",
          "If false, the header search is not visible.",
        ],
        [
          "alreadySelectedIds",
          "number[]",
          "[]",
          "An array of already selected ids. In select mode, already selected ids are not selectable and displayed as in success.",
        ],
        [
          "selectableFileTypes",
          "string[]",
          "[]",
          "An array of file type. In select mode, if some selectable file types are given, only those are selectable.",
        ],
        [
          "viewPdf",
          "Boolean",
          "false",
          "Allow PDF to be seen within a viewer.",
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
