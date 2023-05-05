<template>
  <main class="article article-checkbox">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataFileManager
            style="resize: auto; overflow: hidden"
            :locale="locale"
            :apiUrl="apiUrl"
            :spaceId="spaceId"
            :projectId="projectId"
            :accessToken="accessToken"
            :select="select"
            :multi="multi"
            :searchColor="searchColor"
            :headerButtons="headerButtons"
            :headerSearch="headerSearch"
            :alreadySelectedIds="alreadySelectedIds"
            :selectableFileTypes="selectableFileTypes"
            :viewPdf="viewPdf"
            :pdfPageSelect="pdfPageSelect"
            @selection-change="selectedFiles = $event"
          />
        </template>

        <template #parameters>
          <BIMDataCheckbox text="select" v-model="select" />
          <BIMDataCheckbox text="multi" v-model="multi" :disabled="!select" />
          <BIMDataCheckbox text="headerButtons" v-model="headerButtons" />
          <BIMDataCheckbox text="headerSearch" v-model="headerSearch" />
          <BIMDataCheckbox text="viewPdf" v-model="viewPdf" />
          <BIMDataCheckbox
            text="pdfPageSelect"
            v-model="pdfPageSelect"
            :disabled="!select"
          />
          <div class="m-t-24">
            <BIMDataInput
              placeholder="selectableFileTypes"
              v-model="selectableFileTypesValue"
            />
          </div>
        </template>

        <template #import>
          import BIMDataFileManager from
          "@bimdata/design-system/dist/js/BIMDataSmartComponents/BIMDataFileManager.js"
        </template>

        <template #code>
          <pre>
            &lt;BIMDataFileManager
              locale="{{ locale }}"
              :apiUrl="~ BIMData API URL ~"
              :spaceId="~ your space id ~"
              :projectId="~ your project id ~"
              :accessToken="~ your access token ~"
              :select="{{ select }}"
              :multi="{{ multi }}"
              searchColor="{{ searchColor }}"
              :headerButtons="{{ headerButtons }}"
              :headerSearch="{{ headerSearch }}"
              :selectableFileTypes="{{
              JSON.stringify(selectableFileTypes).replace(/"/g, "'")
            }}"
              :viewPdf="{{ viewPdf }}"
              :pdfPageSelect="{{ pdfPageSelect }}"
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Props:
        </BIMDataText>
        <BIMDataTable
          :columns="propsData[0]"
          :rows="propsData.slice(1)"
          :rowHeight="36"
        />
        <BIMDataText color="color-primary" margin="15px 0 0">
          <strong>*</strong> : Required props.
        </BIMDataText>
      </div>
      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Events:
        </BIMDataText>
        <BIMDataTable
          :columns="eventsData[0]"
          :rows="eventsData.slice(1)"
          :rowHeight="36"
        />
      </div>
    </div>
  </main>
</template>

<script>
import eventsData from "./events-data.js";
import propsData from "./props-data.js";
// Components
import BIMDataCheckbox from "../../../../BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataInput from "../../../../BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataFileManager from "../../../../BIMDataSmartComponents/BIMDataFileManager/BIMDataFileManager.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataCheckbox,
    BIMDataInput,
    BIMDataTable,
    BIMDataText,
    BIMDataFileManager,
    ComponentCode,
  },
  data() {
    return {
      propsData,
      eventsData,

      locale: "en",
      apiUrl: "https://api-staging.bimdata.io",
      spaceId: 515,
      projectId: 756,
      accessToken: "eGNpr626gNtn8QrB5gk0imfrukoHDQiW",
      select: false,
      multi: false,
      searchColor: "primary",
      headerButtons: true,
      headerSearch: true,
      alreadySelectedIds: [],
      selectableFileTypes: [],
      viewPdf: false,
      pdfPageSelect: false,

      selectableFileTypesValue: "dwg, pdf",
      selectedFiles: [],
    };
  },
  watch: {
    selectableFileTypesValue: {
      immediate: true,
      handler: function (value) {
        this.selectableFileTypes = value
          ? value.split(",").map(s => s.trim())
          : [];
      },
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
