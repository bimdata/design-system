<template>
  <main class="article article-table">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataTable :rows="rowData" :compensated="compensated"></BIMDataTable>
        </template>

        <template #parameters>
          <BIMDataCheckbox
            text="compensated"
            v-model="compensated"
          >
          </BIMDataCheckbox>
        </template>

        <template #import>
          import BIMDataTable from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataTable.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataTable :rows="rowData" compensated="{{compensated}}"&gt;&lt;/BIMDataTable&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";


export default {
  components: {
    ComponentCode,
    BIMDataTable,
    BIMDataInput,
    BIMDataCheckbox
  },
  data() {
    return {
      compensated: false,
      rowData: [
        ["First name", "Last name", "Country"],
        ["John", "Doe", "Germany"],
        ["Jane", "Doe", "Austria"],
      ],
      propsData: [
        ["Props", "Type", "Description", "Example"],
        [
          "rows",
          "[String, Number]",
          "Use this props to add header and body content to your table.",
          "In this example, rows is worth : "
        ],
        [
          "compensated",
          "Boolean",
          "Use this props to render a dense table.",
          ""
        ]
      ]
    };
  },
};
</script>

<style lang="scss" scoped></style>
