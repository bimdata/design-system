<template>
  <main class="article article-pagination">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataPaginatedList
            :list="paginatedListExample"
            :perPage="Number(numberInput)"
            :numberDataElements="isNumberDataElements"
          >
          </BIMDataPaginatedList>
        </template>

        <template #parameters>
          <BIMDataInput
            v-model="numberInput"
            placeholder="Number of items per page"
            type="number"
          ></BIMDataInput>

          <BIMDataCheckbox
            text="numberDataElements"
            v-model="isNumberDataElements"
          />
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
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0"
          >Props:</BIMDataText
        >
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0"
          >Slots:</BIMDataText
        >
        <BIMDataTable :columns="slotsData[0]" :rows="slotsData.slice(1)" />
      </div>

      <div class="m-t-24">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Events:</BIMDataText
        >
        <BIMDataTable :columns="eventData[0]" :rows="eventData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataPaginatedList from "../../../../../src/BIMDataComponents/BIMDataPaginatedList/BIMDataPaginatedList.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";

export default {
  components: {
    ComponentCode,
    BIMDataPaginatedList,
    BIMDataCheckbox,
    BIMDataInput,
    BIMDataTable,
    BIMDataText,
  },
  data() {
    return {
      numberInput: 4,
      isNumberDataElements: true,
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
        ["loading", "Boolean", "false", "Use this props to display a loader."],
        [
          "numberDataElement",
          "Boolean",
          "true",
          "Display further informations about the number of total element.",
        ],
        [
          "backgroundColor",
          "String",
          "var(--color-white)",
          "Modify background color of pagination element.",
        ],
      ],
      slotsData: [
        ["Slot name", "Description"],
        ["header", "Use this slot to add a header to your paginated list."],
        ["element", "Template of each element"],
        [
          "empty",
          "Use this slot to customize the display if your list is empty.",
        ],
      ],
      eventData: [
        ["Slot name", "Description"],
        ["element-click", "Use this event to get the clicked element data"],
      ],
    };
  },
};
</script>
