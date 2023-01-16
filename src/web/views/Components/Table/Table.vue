<template>
  <main class="article article-table">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }} (Simple use case)
      </BIMDataText>
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
            <div v-show="simpleExample.selection.length === 0">( None )</div>
          </div>
        </template>

        <template #parameters>
          <div class="simple-example-controls">
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
            >
              Style
            </BIMDataText>
            <BIMDataInput
              type="number"
              placeholder="Rows height in px"
              v-model="simpleExample.rowHeight"
            />
          </div>
          <div class="example-controls">
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
            >
              Sélection
            </BIMDataText>
            <BIMDataCheckbox
              text="selectable"
              v-model="simpleExample.selectable"
            />
          </div>
          <div class="example-controls">
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
            >
              Pagination
            </BIMDataText>
            <BIMDataCheckbox
              text="paginated"
              v-model="simpleExample.paginated"
            />
            <BIMDataInput
              margin="24px 0 0 0"
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
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
          Props:
        </BIMDataText>
        <BIMDataTable
          :rowHeight="36"
          :columns="propsData[0]"
          :rows="propsData.slice(1)"
        />
      </div>
      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
          Events:
        </BIMDataText>
        <BIMDataTable
          :rowHeight="36"
          :columns="eventsData[0]"
          :rows="eventsData.slice(1)"
        />
      </div>
    </div>

    <div class="article-wrapper">
      <BIMDataText component="h2" color="color-primary" margin="15px 0 10px">
        Advanced use case
      </BIMDataText>
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
              { id: "age", label: "Age", width: "64px" },
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
                {{ "{" + "{ `${row.firstName} ${row.lastName}` }" + "}" }}
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
            <a href="https://v3.vuejs.org/guide/component-slots.html">
              Slots
            </a>
          </li>
          <li>
            <a
              href="https://v3.vuejs.org/guide/component-slots.html#dynamic-slot-names"
            >
              Dynamic slot names
            </a>
          </li>
          <li>
            <a
              href="https://v3.vuejs.org/guide/component-slots.html#scoped-slots"
            >
              Scoped slots
            </a>
          </li>
        </ul>
      </div>

      <BIMDataText component="h2" color="color-primary" margin="15px 0 10px">
        Reference
      </BIMDataText>
      <div class="m-b-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
          Columns:
        </BIMDataText>
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
import columnsData from "./columns-data.js";
import eventsData from "./events-data.js";
import propsData from "./props-data.js";
// Components
import Code from "../../Elements/Code/Code.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import AgeCustomCell from "./example/AgeCustomCell.vue";
import CountryCustomCell from "./example/CountryCustomCell.vue";

export default {
  components: {
    Code,
    ComponentCode,
    BIMDataCheckbox,
    BIMDataInput,
    BIMDataTable,
    BIMDataText,
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
      console,
      advancedExample: {
        columns: [
          {
            id: "fullName",
            label: "Name",
          },
          {
            id: "age",
            label: "Age",
            width: "64px",
          },
          {
            id: "country",
            label: "Country",
            width: "200px",
            align: "center",
          },
        ],
        rows: [
          {
            firstName: "John",
            lastName: "Doe",
            age: 26,
            country: "Germany",
          },
          {
            firstName: "Jane",
            lastName: "Doe",
            age: 21,
            country: "Austria",
          },
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
          {
            firstName: "Enrico",
            lastName: "Fermi",
            age: 41,
            country: "Italy",
          },
          {
            firstName: "Lev Davidovitch",
            lastName: "Landau",
            age: 23,
            country: "Russia",
          },
        ],
      },

      propsData,
      eventsData,
      columnsData,
    };
  },
};
</script>

<style scoped lang="scss">
.selection-box {
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  padding-left: 72px;

  &__label {
    margin-bottom: 12px;
    font-weight: 700;
  }
}

.advanced-example-result {
  .bimdata-table {
    margin: 12px 0;
    box-shadow: var(--box-shadow);
  }
}
</style>
