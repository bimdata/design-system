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
                :modelValue="
                  rows.length > 0 && rowSelection.size === rows.length
                "
                @update:modelValue="toggleAll"
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
            <th class="cell-sub-header" :colspan="columns.length + selectable">
              <slot name="sub-header"></slot>
            </th>
          </tr>
        </thead>
        <tbody @dragleave="onDragleave">
          <tr
            v-for="{ key, data } of computedRows"
            :key="`body-row-${key}`"
            v-show="displayedRows.includes(key)"
            :style="{ height: `${rowHeight}px` }"
            @drop="onDrop(data, $event)"
            @dragover="onDragover(key, data, $event)"
            :class="{
              'bimdata-table__row--drag-overed': dragOveredRowKey === key,
            }"
          >
            <td class="cell-checkbox" v-if="selectable">
              <BIMDataCheckbox
                :modelValue="rowSelection.has(key)"
                @update:modelValue="toggleRow({ key, data })"
              />
            </td>
            <td
              v-for="(column, j) of columns"
              :key="`body-row-${key}-col-${j}`"
              :style="{
                width: column.width || 'auto',
                textAlign: column.align || 'left',
              }"
            >
              <slot :name="`cell-${column.id}`" :row="data">
                {{ data[column.id] || data[j] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="bimdata-table__container__placeholder"
        v-if="rows.length === 0"
        :style="{
          height: `calc(100% - ${rowHeight}px)`,
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
import { computed, ref, watch } from "vue";
import { useRowSelection } from "./table-row-selection.js";
// Components
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";
import BIMDataCheckbox from "../BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataIconChevron from "../BIMDataIcon/BIMDataIconStandalone/BIMDataIconChevron.vue";

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
    selection: {
      type: Map,
      default: () => new Map(),
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
    canDragOverRow: {
      type: Function,
      default: () => false,
    },
  },
  emits: [
    "update:selection",
    "selection-changed",
    "row-selected",
    "row-deselected",
    "all-selected",
    "all-deselected",
    "row-drop",
  ],
  setup(props, { emit }) {
    // Compute rows keys based on props values.
    const computedRows = computed(() =>
      props.rows.map((row, i) => ({ key: row[props.rowKey] ?? i, data: row }))
    );

    const { rowSelection, toggleRowSelection, toggleFullSelection } =
      useRowSelection(
        computedRows,
        computed(() => props.selection),
        {
          rowSelectionUpdateEffect: map => {
            emit("update:selection", map);
            emit("selection-changed", Array.from(map.values()));
          },
          rowSelectionToggleEffect: (selected, { data }) => {
            if (selected) {
              emit("row-selected", data);
            } else {
              emit("row-deselected", data);
            }
          },
          fullSelectionToggleEffect: selected => {
            if (selected) {
              emit("all-selected");
            } else {
              emit("all-deselected");
            }
          },
        }
      );

    const toggleRow = row => {
      if (props.selectable) {
        toggleRowSelection(row);
      }
    };
    const toggleAll = () => {
      if (props.selectable) {
        toggleFullSelection();
      }
    };

    const displayedRows = ref([]);
    const pageIndex = ref(0);
    const pageIndexStart = ref(1);
    const pageIndexEnd = ref(props.perPage);

    // Reset `pageIndex` when rows array or the number of rows per page change.
    watch(
      [computedRows, () => props.perPage],
      () => {
        pageIndex.value = 0;
      },
      { immediate: true }
    );
    // Compute `displayedRows` according to rows array and pagination settings.
    watch(
      [computedRows, () => props.paginated, () => props.perPage, pageIndex],
      ([rows, paginated, perPage, index]) => {
        const rowKeys = rows.map(r => r.key);
        if (paginated) {
          const start = perPage * index;
          const end = start + perPage;

          displayedRows.value = rowKeys.slice(start, end);
          pageIndexStart.value = start + 1;
          pageIndexEnd.value = Math.min(end, rows.length);
        } else {
          displayedRows.value = rowKeys;
        }
      },
      { immediate: true }
    );

    const onDrop = (data, event) => {
      if (props.canDragOverRow(data)) {
        emit("row-drop", { data, event });
        dragOveredRowKey.value = null;
      }
    };
    const dragOveredRowKey = ref(null);
    const onDragover = (key, data, event) => {
      if (props.canDragOverRow(data)) {
        event.preventDefault();
        dragOveredRowKey.value = key;
      }
    };
    const onDragleave = () => {
      dragOveredRowKey.value = null;
    };

    return {
      // References
      computedRows,
      displayedRows,
      pageIndex,
      pageIndexEnd,
      pageIndexStart,
      rowSelection,
      dragOveredRowKey,
      // Methods
      onDrop,
      onDragover,
      onDragleave,
      toggleAll,
      toggleRow,
    };
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataTable.scss"></style>
