<template>
  <main class="article article-table">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }} (Simple use case)</h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataTable
            :columns="simpleExample.columns"
            :rows="simpleExample.rows"
            :rowHeight="+simpleExample.rowHeight"
            :selectable="simpleExample.selectable"
            :paginated="simpleExample.paginated"
            :perPage="+simpleExample.perPage"
            @selection-changed="simpleExample.selection = $event"
          />
          <div class="selection-box">
            <div class="selection-box__label">Selection :</div>
            <div
              class="selection-box__item"
              v-for="(s, i) of simpleExample.selection"
              :key="i"
            >
              {{ `[${i}] - ${s.join(", ")}` }}
            </div>
            <div v-show="simpleExample.selection.length === 0">
              ( None )
            </div>
          </div>
        </template>

        <template #parameters>
          <div class="simple-example-controls">
            <h6 class="bimdata-h6">Style</h6>
            <BIMDataInput
              type="number"
              placeholder="Rows height in px"
              v-model="simpleExample.rowHeight"
            />
          </div>
          <div class="example-controls">
            <h6 class="bimdata-h6">Selection</h6>
            <BIMDataCheckbox
              text="selectable"
              v-model="simpleExample.selectable"
            />
          </div>
          <div class="example-controls">
            <h6 class="bimdata-h6">Pagination</h6>
            <BIMDataCheckbox
              text="paginated"
              v-model="simpleExample.paginated"
            />
            <BIMDataInput
              type="number"
              :disabled="!simpleExample.paginated"
              placeholder="Number of rows per page"
              v-model="simpleExample.perPage"
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
              {{ `:rowHeight="${simpleExample.rowHeight}"` }}
              {{ simpleExample.selectable ? ':selectable="true"' : "" }}
              {{ simpleExample.paginated ? ':paginated="true"' : "" }}
              {{
              simpleExample.paginated
                ? `:perPage="${simpleExample.perPage}"`
                : ""
            }}
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Props:</h5>
        <BIMDataTable
          :rowHeight="36"
          :columns="propsData[0]"
          :rows="propsData.slice(1)"
        />
      </div>
      <div class="m-t-12">
        <h5 class="bimdata-h5">Events:</h5>
        <BIMDataTable
          :rowHeight="36"
          :columns="eventsData[0]"
          :rows="eventsData.slice(1)"
        />
      </div>
    </div>
    <div class="article-wrapper">
      <h2 class="bimdata-h2">Advanced use case</h2>
      <div class="m-b-12">
        In the example above we show a table using simple data, columns and rows
        are simply arrays of strings. However, it often happens that rows are
        defined by an array of objects and we need to display some custom
        content (components) into table cells. BIMDataTable allows this by means
        of dynamic scoped slots.<br />
        Lets take the above example and tweak it a bit for demonstration
        purpose.
      </div>
      <div class="m-b-12">
        Say we have the following rows data (fetched from our user API):
        <Code language="javascript">
          <pre>
            let rows = [
              { firstName: "John", lastName: "Doe", age: 26, country: "Germany" },
              { firstName: "Jane", lastName: "Doe", age: 21, country: "Austria" },
              { firstName: "Martine", lastName: "Durand", age: 35, country: "France" },
              { firstName: "Giuseppe", lastName: "Bompiani", age: 64, country: "Italy" },
              { firstName: "Enrico", lastName: "Fermi", age: 41, country: "Italy" },
              { firstName: "Lev Davidovitch", lastName: "Landau", age: 23, country: "Russia" }
            ];
          </pre>
        </Code>
        And we want the <em>"firstName"</em> and <em>"lastName"</em> properties
        to be formatted as well as the <em>"age"</em> to be editable.<br />
        We also, we want the <em>"country"</em> to be displayed as a little
        country flag instead of the country name.
      </div>
      <div class="m-b-12">
        To do so, we can define table columns like this:
        <Code language="javascript">
          <pre>
            let columns = [
              { id: "fullName", label: "Name" },
              { id: "age", label: "Age", width: "40px" },
              { id: "country", label: "Country", width: "200px", align: "center" }
            ];
          </pre>
        </Code>
        The <strong>id</strong> field of each column will determine which field
        of the row object will be displayed in that column by default. It is
        also used to customize cell content using scoped slot.<br />
        The column <strong>label</strong> is the header text that will be
        displayed for that column.
      </div>
      <div class="m-b-12">
        Provided that we created some custom table cell components for
        <em>"age"</em> and <em>"country"</em> we can create our table like this:
        <Code language="xml">
          <pre>
            &lt;BIMDataTable :columns="columns" :rows="rows"&gt;
              &lt;template #cell-fullName="{ row }"&gt;
                {{ "{{ `${row.firstName} ${row.lastName}` }" + "}" }}
              &lt;/template&gt;
              &lt;template #cell-age="{ row }"&gt;
                &lt;AgeCustomCell :age="row.age" /&gt;
              &lt;/template&gt;
              &lt;template #cell-country="{ row }"&gt;
                &lt;CountryCustomCell :country="row.country" /&gt;
              &lt;/template&gt;
            &lt;/BIMDataTable&gt;
          </pre>
        </Code>
        Note that the names of the slots determine which column the template
        will be applied to.<br />
        For example, if we have a column with <strong>id </strong>
        <em>"foo"</em>, then the template for that column should be put in the
        slot with name <strong>cell-foo</strong>.<br />
        In addition, cell slots are <em>scoped slots</em> so you can access row
        data using the <strong>row</strong> scoped prop.
      </div>
      <div class="advanced-example-result m-b-12">
        <strong>Here is the result:</strong>
        <BIMDataTable
          :columns="advancedExample.columns"
          :rows="advancedExample.rows"
        >
          <template #cell-fullName="{ row }">
            {{ `${row.firstName} ${row.lastName}` }}
          </template>
          <template #cell-age="{ row }">
            <AgeCustomCell :age="row.age" />
          </template>
          <template #cell-country="{ row }">
            <CountryCustomCell :country="row.country" />
          </template>
        </BIMDataTable>
      </div>
      <div>
        If you to know more about dynamic slot names and scoped slots check out
        the following resources:
        <ul>
          <li>
            <a href="https://v3.vuejs.org/guide/component-slots.html">Slots</a>
          </li>
          <li>
            <a
              href="https://v3.vuejs.org/guide/component-slots.html#dynamic-slot-names"
              >Dynamic slot names</a
            >
          </li>
          <li>
            <a
              href="https://v3.vuejs.org/guide/component-slots.html#scoped-slots"
              >Scoped slots</a
            >
          </li>
        </ul>
      </div>

      <h2 class="bimdata-h2">Reference</h2>
      <div class="m-b-12">
        <h5 class="bimdata-h5">Columns:</h5>
        <BIMDataTable
          :rowHeight="36"
          :columns="columnsData[0]"
          :rows="columnsData.slice(1)"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Code from "../../Elements/Code/Code.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import AgeCustomCell from "./AgeCustomCell.vue";
import CountryCustomCell from "./CountryCustomCell.vue";

export default {
  components: {
    Code,
    ComponentCode,
    BIMDataCheckbox,
    BIMDataInput,
    BIMDataTable,
    AgeCustomCell,
    CountryCustomCell,
  },
  data() {
    return {
      simpleExample: {
        columns: ["First name", "Last name", "Age", "Country"],
        rows: [
          ["John", "Doe", 26, "Germany"],
          ["Jane", "Doe", 21, "Austria"],
          ["Martine", "Durand", 35, "France"],
          ["Giuseppe", "Bompiani", 64, "Italy"],
          ["Enrico", "Fermi", 41, "Italy"],
          ["Lev Davidovitch", "Landau", 23, "Russia"],
        ],
        rowHeight: 50,
        selectable: false,
        selection: [],
        paginated: false,
        perPage: 4,
      },

      advancedExample: {
        columns: [
          { id: "fullName", label: "Name" },
          { id: "age", label: "Age", width: "40px" },
          { id: "country", label: "Country", width: "200px", align: "center" },
        ],
        rows: [
          { firstName: "John", lastName: "Doe", age: 26, country: "Germany" },
          { firstName: "Jane", lastName: "Doe", age: 21, country: "Austria" },
          {
            firstName: "Martine",
            lastName: "Durand",
            age: 35,
            country: "France",
          },
          {
            firstName: "Giuseppe",
            lastName: "Bompiani",
            age: 64,
            country: "Italy",
          },
          { firstName: "Enrico", lastName: "Fermi", age: 41, country: "Italy" },
          {
            firstName: "Lev Davidovitch",
            lastName: "Landau",
            age: 23,
            country: "Russia",
          },
        ],
      },

      // Props docmentation
      propsData: [
        [
          "Props",
          "Type",
          "Required",
          "Default value",
          "Description",
          "Example",
        ],
        [
          "columns",
          "Array",
          "true",
          "",
          "Use this props to define table columns.",
          "['First name', 'Last name', 'Age']",
        ],
        [
          "rows",
          "Array",
          "true",
          "",
          "Use this props to define table rows.",
          "[ ['John', 'Doe', 23], ['Jane', 'Doe', 24] ]",
        ],
        [
          "rowHeight",
          "Number",
          "",
          "50",
          "Use this prop to set rows height (in px)",
          "",
        ],
        [
          "selectable",
          "Boolean",
          "",
          "false",
          "Use this props to make rows selectable.",
          "",
        ],
        [
          "paginated",
          "Boolean",
          "",
          "false",
          "Use this prop to have a paginated table",
          "",
        ],
        [
          "perPage",
          "Number",
          "",
          "10",
          "Use this prop to control the number of rows per page (when paginated)",
          "",
        ],
        [
          "placeholder",
          "String",
          "",
          "",
          "A text to display when the table is empty",
          "'Empty Table'",
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

      // Columns definition documentation
      columnsData: [
        ["Property", "Type/Values", "Description"],
        [
          "id",
          "String",
          "Column identifier that is used to determine which row field or which custom content will be displayed in that column.",
        ],
        ["label", "String", "Column header text"],
        ["width", "String", "Set column width (defaults to 'auto')"],
        [
          "align",
          "'left' ; 'center' ; 'right'",
          "Set how text is aligned in the column.",
        ],
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "./_Table.scss";
</style>
