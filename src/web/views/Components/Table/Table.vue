<template>
  <main class="article article-table">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <GenericTable
            :columns="columns"
            :rows="rows"
            :rowHeight="+rowHeight"
            :selectable="selectable"
            :paginated="paginated"
            :perPage="+perPage"
            @selection-changed="selection = $event"
          />
          <div class="selection-box">
            <div class="selection-box__label">Selection :</div>
            <div
              class="selection-box__item"
              v-for="(s, i) of selection"
              :key="i"
            >
              {{ `[${i}] - ${s.join(", ")}` }}
            </div>
            <div v-show="selection.length === 0">
              ( None )
            </div>
          </div>
        </template>

        <template #parameters>
          <div class="example-controls">
            <h6 class="bimdata-h6">Style</h6>
            <BIMDataInput
              type="number"
              placeholder="Rows height in px"
              v-model="rowHeight"
            />
          </div>
          <div class="example-controls">
            <h6 class="bimdata-h6">Selection</h6>
            <BIMDataCheckbox text="selectable" v-model="selectable" />
          </div>
          <div class="example-controls">
            <h6 class="bimdata-h6">Pagination</h6>
            <BIMDataCheckbox text="paginated" v-model="paginated" />
            <BIMDataInput
              type="number"
              :disabled="!paginated"
              placeholder="Number of rows per page"
              v-model="perPage"
            />
          </div>
        </template>

        <template #import>
          import BIMDataTable from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataTable/BIMDataTable.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataTable
              :columns="columns"
              :rows="rows"
              {{ `:rowHeight="${rowHeight}"` }}
              {{ selectable ? ':selectable="true"' : "" }}
              {{ paginated ? ':paginated="true"' : "" }}
              {{ paginated ? `:perPage="${perPage}"` : "" }}
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Props:</h5>
        <GenericTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
      <div class="m-t-12">
        <h5 class="bimdata-h5">Events:</h5>
        <GenericTable :columns="eventsData[0]" :rows="eventsData.slice(1)" />
      </div>
    </div>
    <div class="article-wrapper">
      <h2 class="bimdata-h2">Advanced use case</h2>
      <div>
        In the example above we show a table using simple data, columns and rows
        are simply arrays of string. However, it often happens that we need to
        some custom content into table cells. BIMDataTable allows this by means
        of dynamic scoped slots.
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import GenericTable from "../../../../BIMDataComponents/BIMDataTable/GenericTable.vue";

export default {
  components: {
    ComponentCode,
    BIMDataCheckbox,
    BIMDataInput,
    GenericTable,
  },
  data() {
    return {
      columns: ["First name", "Last name", "Country"],
      rows: [
        ["John", "Doe", "Germany"],
        ["Jane", "Doe", "Austria"],
        ["Martine", "Durand", "France"],
        ["Giuseppe", "Bompiani", "Italy"],
        ["Enrico", "Fermi", "Italy"],
        ["Lev Davidovitch", "Landau", "Russia"],
      ],
      rowHeight: 50,
      selectable: false,
      selection: [],
      paginated: false,
      perPage: 4,

      // Props docmentation
      propsData: [
        ["Props", "Type", "Description", "Example"],
        [
          "columns",
          "Array",
          "Use this props to define table columns.",
          "['First name', 'Last name', 'Age']",
        ],
        [
          "rows",
          "Array",
          "Use this props to define table rows.",
          "[ ['John', 'Doe', 23], ['Jane', 'Doe', 24] ]",
        ],
        [
          "selectable",
          "Boolean",
          "Use this props to make rows selectable.",
          "",
        ],
      ],

      // Events documentation
      eventsData: [
        ["Event", "Data Type", "Data", "Description"],
        [
          "selection-changed",
          "Array",
          "The list of selected rows",
          "Fired each time the selection change",
        ],
        [
          "row-selected",
          "Object",
          "The selected row",
          "Fired each time a row is selected",
        ],
        [
          "row-unselected",
          "Object",
          "The unselected row",
          "Fired each time a row is unselected",
        ],
        [
          "all-selected",
          "-",
          "none",
          "Fired when all rows are selected at once",
        ],
        [
          "all-unselected",
          "-",
          "none",
          "Fired when all rows are unselected at once",
        ],
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "./_Table.scss";
</style>
