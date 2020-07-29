<template>
  <main class="article article-pagination">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataPaginatedList
            :list="paginatedListExample"
            :perPage="Number(numberInput)"
          >
          </BIMDataPaginatedList>
        </template>

        <template #parameters>
          <BIMDataInput
            v-model="numberInput"
            placeholder="Number of items per page"
            type="number"
          ></BIMDataInput>
        </template>

        <template #import>
          import BIMDataPaginatedList from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataPaginatedList.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataPaginatedList :list="paginatedListExample" :perPage="{{
              numberInput
            }}"&gt;&lt;/BIMDataPaginatedList&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Slots:</h5>
        <BIMDataTable :rows="slotsData"></BIMDataTable>
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataPaginatedList from "../../../../../src/BIMDataComponents/BIMDataPaginatedList/BIMDataPaginatedList.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

export default {
  components: {
    ComponentCode,
    BIMDataPaginatedList,
    BIMDataInput,
    BIMDataTable,
  },
  data() {
    return {
      numberInput: 4,
      paginatedListExample: [
        "item 01",
        "item 02",
        "item 03",
        "item 04",
        "item 05",
        "item 06",
        "item 07",
        "item 08",
        "item 09",
        "item 10",
        "item 11",
        "item 12",
      ],
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        [
          "list",
          "Array",
          "() => []",
          "Use this props to pass your list to the component",
        ],
        [
          "perPage",
          "Number",
          "10",
          "Use this props for custom the number of items per page",
        ],
        [
          "elementKey",
          "String",
          "",
          "If ever the elements in the list are objects, allows to indicate the key which will be used as key for the v-for for vuejs.",
        ],
      ],
      slotsData: [
        ["slot name", "Description"],
        ["#header", "Use this slot to add a header to your paginated list."],
        ["#element", "Template of each element"],
        [
          "#empty",
          "Use this slot to customize the display if your list is empty.",
        ],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// import COMPONENT STYLE
@import "./_Pagination.scss";
</style>
