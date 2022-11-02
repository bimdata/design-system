<template>
  <div class="bimdata-table">
    <div
      class="bimdata-table__container"
      :style="{
        height: paginated ? `${(perPage + 1) * rowHeight}px` : undefined,
      }"
    >
      <table :style="{ width: tableWidth, tableLayout }">
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
          <tr key="head-row-1">
            <th
              class="cell-sub-header"
              :colspan="columns.length + (selectable ? 1 : 0)"
            >
              <slot name="sub-header"></slot>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) of rows"
            :key="`body-row-${rowKey ? row[rowKey] : i}`"
            v-show="displayedRows.includes(i)"
            :style="{ height: `${rowHeight}px` }"
          >
            <td class="cell-checkbox" v-if="selectable">
              <BIMDataCheckbox
                :modelValue="selection.has(i)"
                @update:modelValue="toggleRowSelection(i)"
              />
            </td>
            <td
              v-for="(column, j) of columns"
              :key="`body-row-${rowKey ? row[rowKey] : i}-col-${j}`"
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
        v-if="rows.length === 0"
        :style="{
          height: `calc(100% - ${placeholder ? rowHeight : 0}px)`,
        }"
      >
        <slot name="placeholder">
          {{ placeholder }}
        </slot>
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
        :disabled="pageIndexStart === 1"
        @click="pageIndex--"
      >
        <BIMDataIconChevron size="s" :rotate="180" />
      </BIMDataButton>
      <span class="bimdata-table__page-nav__text">
        {{ `${pageIndexStart} - ${pageIndexEnd} / ${rows.length}` }}
      </span>
      <BIMDataButton
        ghost
        rounded
        icon
        :disabled="pageIndexEnd === rows.length"
        @click="pageIndex++"
      >
        <BIMDataIconChevron size="s" />
      </BIMDataButton>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
// Components
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";
import BIMDataCheckbox from "../BIMDataCheckbox/BIMDataCheckbox.vue";
import { BIMDataIconChevron } from "../BIMDataIcon/BIMDataIconStandalone/index.js";

export default {
  components: {
    BIMDataButton,
    BIMDataCheckbox,
    BIMDataIconChevron,
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
    rowKey: {
      type: String,
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
    tableWidth: {
      type: String,
      default: "100%",
    },
    tableLayout: {
      type: String,
      default: "auto",
    },
  },
  emits: [
    "selection-changed",
    "row-selected",
    "row-deselected",
    "all-selected",
    "all-deselected",
  ],
  setup(props, { emit }) {
    // `selection` ref is a map of currently selected rows where
    // keys are rows' indexes and values the row objects.
    const selection = ref(new Map());
    watch(selection, map => {
      // Emit a 'selection-changed' event with the array of selected
      // row objects each time selection ref is updated.
      emit("selection-changed", Array.from(map.values()));
    });

    // `rowSelectionRefs` holds an array of ref that represent each
    // row selection state together with its 'unwatch' function.
    let rowSelectionRefs = [];

    /**
     * Stop every row selection watcher and reset the `rowSelectionRefs` array.
     */
    const resetRowSelectionRefs = () => {
      rowSelectionRefs.forEach(selectionRef => selectionRef.unwatch());
      rowSelectionRefs = [];
    };

    /**
     * Reset the current `rowSelectionRefs` and create a new one from
     * the given rows array with the given initial value.
     * A watcher is attached to each selection ref in order to handle
     * selection updates effects (e.g. event emission).
     *
     * @param {Array} rows an array of row objects
     * @param {Boolean} value selection refs initial value
     */
    const buildRowSelectionRefs = (rows, value) => {
      resetRowSelectionRefs();
      rowSelectionRefs = rows.map((row, i) => {
        const rr = ref(value);
        return {
          ref: rr,
          unwatch: watch(rr, checked => {
            if (props.selectable) {
              if (checked) {
                selection.value.set(i, row);
                selection.value = new Map([...selection.value.entries()]);
                emit("row-selected", row);
              } else {
                selection.value.delete(i);
                selection.value = new Map([...selection.value.entries()]);
                emit("row-deselected", row);
              }
            }
          }),
        };
      });
    };

    // `fullSelectionRef` controls whether all rows are (un)selected at once.
    const fullSelectionRef = ref(false);
    watch(fullSelectionRef, checked => {
      if (props.selectable) {
        // When `fullSelectionRef` change, rebuild the rows' selection refs
        // with corresponding initial value and emit the appropriate events.
        if (checked) {
          selection.value = new Map([...props.rows.map((row, i) => [i, row])]);
          buildRowSelectionRefs(props.rows, true);
          emit("all-selected");
        } else {
          selection.value = new Map();
          buildRowSelectionRefs(props.rows, false);
          emit("all-deselected");
        }
      }
    });

    const toggleRowSelection = i => {
      rowSelectionRefs[i].ref.value = !rowSelectionRefs[i].ref.value;
    };
    const toggleFullSelection = () => {
      fullSelectionRef.value = !fullSelectionRef.value;
    };

    const displayedRows = ref([]);
    const pageIndex = ref(0);
    const pageIndexStart = ref(1);
    const pageIndexEnd = ref(props.perPage);

    // Reset selection when rows array change.
    watch(
      () => props.rows,
      () => {
        selection.value = new Map();
        // `setTimeout` is needed here to avoid row selection issues
        // when adding new rows. This is probably due to some Vue internal
        // mechanism, no other workaround could be found for now.
        setTimeout(() => buildRowSelectionRefs(props.rows, false));
      },
      { immediate: true }
    );
    // Reset `pageIndex` when rows array or the number of rows per page change.
    watch(
      [() => props.rows, () => props.perPage],
      () => {
        pageIndex.value = 0;
      },
      { immediate: true }
    );
    // Compute `displayedRows` according to rows array and pagination settings.
    watch(
      [() => props.rows, () => props.paginated, () => props.perPage, pageIndex],
      () => {
        const rowIndexes = props.rows.map((_, i) => i);
        if (props.paginated) {
          const start = props.perPage * pageIndex.value;
          const end = start + props.perPage;

          displayedRows.value = rowIndexes.slice(start, end);
          pageIndexStart.value = start + 1;
          pageIndexEnd.value = Math.min(end, props.rows.length);
        } else {
          displayedRows.value = rowIndexes;
        }
      },
      { immediate: true }
    );

    return {
      // References
      displayedRows,
      pageIndex,
      pageIndexEnd,
      pageIndexStart,
      selection,
      // Methods
      toggleFullSelection,
      toggleRowSelection,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/_BIMDataVariables.scss";
@import "./_BIMDataTable.scss";
</style>
