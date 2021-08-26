<template>
  <div class="bimdata-table">
    <div
      class="bimdata-table__container"
      :style="{
        height: paginated ? `${(perPage + 1) * rowHeight}px` : undefined,
      }"
    >
      <table>
        <thead>
          <tr key="head-row-0" :style="{ height: `${rowHeight}px` }">
            <th class="cell-checkbox" v-if="selectable">
              <BIMDataCheckbox
                :disabled="rows.length === 0"
                :modelValue="rows.length > 0 && selection.size === rows.length"
                @update:modelValue="toggleFullSelection"
              />
            </th>
            <th
              v-for="(column, j) of columns"
              :key="`head-row-0-col-${j}`"
              :style="{
                width: column.width || 'auto',
                textAlign: column.align || 'left',
              }"
            >
              {{ column.id ? column.label || column.id : column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) of rows"
            :key="`body-row-${i}`"
            v-show="displayedRows.includes(i)"
            :style="{ height: `${rowHeight}px` }"
          >
            <td class="cell-checkbox" v-if="selectable">
              <BIMDataCheckbox
                :modelValue="selection.has(i)"
                @update:modelValue="toggleSelection(i)"
              />
            </td>
            <td
              v-for="(column, j) of columns"
              :key="`body-row-${i}-col-${j}`"
              :style="{
                width: column.width || 'auto',
                textAlign: column.align || 'left',
              }"
            >
              <slot :name="`cell-${column.id}`" :row="row">
                {{ row[column.id] || row[j] || "" }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="bimdata-table__container__placeholder"
        v-if="rows.length === 0 && placeholder"
        :style="{
          height: `calc(100% - ${rowHeight}px)`,
        }"
      >
        {{ placeholder }}
      </div>
    </div>
    <div
      class="bimdata-table__page-nav"
      v-if="paginated"
      :style="{ visibility: rows.length > perPage ? 'visible' : 'hidden' }"
    >
      <BIMDataButton
        ghost
        rounded
        icon
        :disabled="pageStartIndex === 1"
        @click="pageIndex--"
      >
        <BIMDataIcon name="chevron" size="s" :rotate="180" />
      </BIMDataButton>
      <span class="bimdata-table__page-nav__text">
        {{ `${pageStartIndex} - ${pageEndIndex} of ${rows.length}` }}
      </span>
      <BIMDataButton
        ghost
        rounded
        icon
        :disabled="pageEndIndex === rows.length"
        @click="pageIndex++"
      >
        <BIMDataIcon name="chevron" size="s" />
      </BIMDataButton>
    </div>
  </div>
</template>

<script>
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";
import BIMDataCheckbox from "../BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataIcon from "../BIMDataIcon/BIMDataIcon.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataCheckbox,
    BIMDataIcon,
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    rowHeight: {
      type: Number,
      default: 50,
    },
    selectable: {
      type: Boolean,
      default: false,
    },
    paginated: {
      type: Boolean,
      default: false,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  emits: [
    "selection-changed",
    "row-selected",
    "row-unselected",
    "all-selected",
    "all-unselected",
  ],
  data() {
    return {
      displayedRows: [],
      pageIndex: 0,
      pageStartIndex: 1,
      pageEndIndex: 1,
      selection: new Map(),
      selectionRefs: [],
      oldSelectionRefs: [],
      fullSelectionRef: false,
    };
  },
  watch: {
    rows: {
      immediate: true,
      handler(value) {
        this.selection = new Map();
        this.buildSelectionRefs(value, false);
        this.setPagination();
      },
    },
    paginated: {
      immediate: true,
      handler() {
        this.setPagination();
      },
    },
    perPage: {
      immediate: true,
      handler() {
        this.pageIndex = 0;
        this.setPagination();
      },
    },
    pageIndex: {
      immediate: true,
      handler() {
        this.setPagination();
      },
    },
    selection: {
      handler(map) {
        this.$emit("selection-changed", Array.from(map.values()));
      },
    },
    selectionRefs: {
      handler(newValue) {
        if (this.$props.selectable) {
          const index = newValue.findIndex(
            (s, i) => s !== this.oldSelectionRefs[i]
          );
          if (index !== -1) {
            const checked = newValue[index];
            const row = this.$props.rows[index];
            if (checked) {
              this.selection.set(index, row);
              this.selection = new Map([...this.selection.entries()]);
              this.$emit("row-selected", row);
            } else {
              this.selection.delete(index);
              this.selection = new Map([...this.selection.entries()]);
              this.$emit("row-unselected", row);
            }
          }
        }
      },
    },
    fullSelectionRef: {
      handler(checked) {
        if (this.$props.selectable) {
          if (checked) {
            this.selection = new Map([
              ...this.$props.rows.map((row, i) => [i, row]),
            ]);
            this.buildSelectionRefs(this.$props.rows, true);
            this.$emit("all-selected");
          } else {
            this.selection = new Map();
            this.buildSelectionRefs(this.$props.rows, false);
            this.$emit("all-unselected");
          }
        }
      },
    },
  },
  created() {
    this.pageEndIndex = this.$props.perPage;
  },
  methods: {
    buildSelectionRefs(rows, value) {
      this.selectionRefs = Array.from(rows, () => value);
    },
    toggleFullSelection() {
      this.fullSelectionRef = !this.fullSelectionRef;
    },
    toggleSelection(i) {
      this.oldSelectionRefs = this.selectionRefs.slice();
      this.selectionRefs.splice(i, 1, !this.selectionRefs[i]);
    },
    setPagination() {
      const rowIndexes = this.$props.rows.map((_, i) => i);
      if (this.$props.paginated) {
        const start = this.$props.perPage * this.pageIndex;
        const end = start + this.$props.perPage;

        this.displayedRows = rowIndexes.slice(start, end);
        this.pageStartIndex = start + 1;
        this.pageEndIndex = Math.min(end, this.$props.rows.length);
      } else {
        this.displayedRows = rowIndexes;
      }
    },
  },
};
</script>

<style scoped lang="scss">
// Import BIMDATA VARIABLES
@import "../../assets/scss/_BIMDataVariables.scss";

// Component styles
@import "./_BIMDataTable.scss";
</style>
