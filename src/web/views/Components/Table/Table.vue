<template>
  <main class="article article-table">
    <div class="article-wrapper">
      <BIMDataText component="h1" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">
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
          >
          </BIMDataTable>
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
          "@bimdata/design-system/src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
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
          :rowHeight="42"
          :columns="propsData[0]"
          :rows="propsData.slice(1)"
        />
      </div>
      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
          Events:
        </BIMDataText>
        <BIMDataTable
          :rowHeight="42"
          :columns="eventsData[0]"
          :rows="eventsData.slice(1)"
        />
      </div>
      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Slots:
        </BIMDataText>
        <BIMDataTable :columns="slotsData[0]" :rows="slotsData.slice(1)" />
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
              { created_by: {firstName: "John", lastName: "Doe"}, fileName: "My_file_name", age: 26, priority: "High", tags: [{ name: "Tag 2", color: "#ff69b4"}],country: "Germany" },
              { created_by: {firstName: "Jane", lastName: "Doe"}, fileName: "My_other_file_name", age: 21, priority: "Low", tags: [{ name: "Tag 2", color: "#ff69b4"}],country: "Austria" },
              { created_by: {firstName: "Martine", lastName: "Durand"}, fileName: "My_file_name", age: 35, priority: "Medium", tags: [{ name: "My tag", color: "#2AAA8A"}, { name: "Reviewed", color: "#ff6954"}],country: "France" },
              { created_by: {firstName: "Giuseppe", lastName: "Bompiani"}, fileName: "One_file_name", age: 64, priority: "Low", tags: [{ name: "Tag 5", color: "#bf70a4"}],country: "Italy" },
              { created_by: {firstName: "Giuseppe", lastName: "Bompiani"}, fileName: "One_file_name", age: 64, priority: "low", tags: [{ name: "Missing", color: "#fh69u6"}],country: "Italy" },
              { created_by: {firstName: "Lev Davidovitch", lastName: "Landau"}, fileName: "filename", age: 23, priority: "low", tags: [{ name: "Tag 2", color: "#ff69b4"}],country: "Russia" }
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
            { 
              id: "fileName",
              label: "Filename",
              sortable: true, defaultSortOrder: "asc",
              sortFunction: (a, b) => {
                const fullFileNameA = `${a.fileName} ${a.extesionFile}`;
                const fullFileNameB = `${b.fileName} ${b.extesionFile}`;
                return fullFileNameA &lt; fullFileNameB ? 1 : -1;
              },
              id: "created_by",
              label: "Full name",
              filter: true,
              filterFunction: rowData => `${rowData.lastName} ${rowData.firstName}`,
              },
              { id: "age", label: "Age", width: "64px", sortable: true, defaultSortOrder: "asc" },
              { id: "priority", label: "Priority", width: "200px", align: "center", filter: true },
              { id: "tags", label: "Tags", width: "200px", align: "center", filter: true },
              { id: "country", label: "Country", width: "200px", align: "center", sortable: true, defaultSortOrder: "asc" }
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
              &lt;template #cell-filename="{ row }"&gt;
                {{ "{" + "{ `${row.fileName}${row.extensionFile}` }" + "}" }}
              &lt;/template&gt;
              &lt;template #cell-created_by="{ row }"&gt;
              &lt;FullNameCell :creator="row.created_by" /&gt;
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
          <template #cell-filename="{ row }">
            {{ `${row.fileName}${row.extensionFile}` }}
          </template>
          <template #cell-created_by="{ row }">
            <FullNameCell :creator="row.created_by" />
          </template>
          <template #cell-age="{ row }">
            <AgeCustomCell :age="row.age" />
          </template>
          <template #cell-tags="{ row }">
            <TagsCustomCell :tags="row.tags" />
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
          :rowHeight="42"
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
import slotsData from "./slots-data.js";

// Components
import Code from "../../Elements/Code/Code.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import AgeCustomCell from "./example/AgeCustomCell.vue";
import CountryCustomCell from "./example/CountryCustomCell.vue";
import FullNameCell from "./example/FullNameCell.vue";
import TagsCustomCell from "./example/TagsCustomCell.vue";

export default {
  components: {
    Code,
    ComponentCode,
    AgeCustomCell,
    CountryCustomCell,
    FullNameCell,
    TagsCustomCell,
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
          {
            id: "filename",
            label: "Filename",
            sortable: true,
            defaultSortOrder: "asc",
            sortFunction: (a, b) => {
              const fullFileNameA = `${a.fileName} ${a.extesionFile}`;
              const fullFileNameB = `${b.fileName} ${b.extesionFile}`;

              return fullFileNameA < fullFileNameB ? 1 : -1;
            },
          },
          {
            id: "created_by",
            label: "Full name",
            filter: true,
            filterFunction: rowData =>
              `${rowData.lastName} ${rowData.firstName}`,
          },
          {
            id: "age",
            label: "Age",
            width: "64px",
            sortable: true,
            defaultSortOrder: "asc",
          },
          {
            id: "priority",
            label: "Priority",
            width: "200px",
            align: "center",
            filter: true,
          },
          {
            id: "tags",
            label: "Tags",
            width: "200px",
            align: "center",
            filter: true,
            filterKey: "name",
          },
          {
            id: "country",
            label: "Country",
            width: "200px",
            align: "center",
            sortable: true,
            defaultSortOrder: "asc",
          },
        ],
        rows: [
          {
            created_by: {
              firstName: "John",
              lastName: "Doe",
            },
            fileName: "My_file_name",
            extensionFile: ".pdf",
            age: 26,
            priority: "High",
            tags: [
              {
                name: "Tag 2",
                color: "#ff69b4",
              },
            ],
            country: "Germany",
          },
          {
            created_by: {
              firstName: "Jane",
              lastName: "Doe",
            },
            fileName: "My_other_file_name",
            extensionFile: ".jpeg",
            age: 21,
            priority: "Low",
            tags: [
              {
                name: "Tag 2",
                color: "#ff69b4",
              },
            ],
            country: "Austria",
          },
          {
            created_by: {
              firstName: "Martine",
              lastName: "Durand",
            },
            fileName: "File_name",
            extensionFile: ".png",
            age: 35,
            priority: "Medium",
            tags: [
              {
                name: "My tag",
                color: "#2AAA8A",
              },
              {
                name: "Reviewed",
                color: "#ff6954",
              },
            ],
            country: "France",
          },
          {
            created_by: {
              firstName: "Giuseppe",
              lastName: "Bompiani",
            },
            fileName: "One_file_name",
            extensionFile: ".pdf",
            age: 64,
            priority: "Low",
            tags: [
              {
                name: "Tag 5",
                color: "#bf70a4",
              },
            ],
            country: "Italy",
          },
          {
            created_by: {
              firstName: "Enrico",
              lastName: "Doe",
            },
            fileName: "filename",
            extensionFile: ".pdf",
            age: 41,
            priority: "low",
            tags: [
              {
                name: "Missing",
                color: "#fh69u6",
              },
            ],
            country: "Italy",
          },
          {
            created_by: {
              firstName: "Lev Davidovitch",
              lastName: "Landau",
            },
            fileName: "filename",
            extensionFile: ".jpeg",
            age: 23,
            priority: "Medium",
            tags: [
              {
                name: "Tag 2",
                color: "#ff69b4",
              },
            ],
            country: "Russia",
          },
        ],
      },

      propsData,
      eventsData,
      columnsData,
      slotsData,
    };
  },
  inject: ["BIMDATA_DESIGN_SYSTEM_DARK_THEME"],
  computed: {
    currentTheme() {
      return this.BIMDATA_DESIGN_SYSTEM_DARK_THEME
        ? "theme-dark"
        : "theme-light";
    },
  },
};
</script>

<style scoped>
.selection-box {
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  padding-left: 72px;

  .selection-box__label {
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
