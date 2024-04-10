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
              <div :style="{ display: 'inline-flex', 'align-items': 'center' }">
                {{ column.id ? column.label || column.id : column }}
                <slot name="column-header-right"></slot>
                <ColumnSorting
                  v-if="column.sortable"
                  :sortOrder="
                    !sortObject.order || sortObject.column !== column
                      ? 'asc'
                      : sortObject.order
                  "
                  :index="j"
                  :active="j === activeHeadercolumnKey"
                  @click="toggleSorting(column)"
                  @set-active="activeHeadercolumnKey = $event"
                />
                <div
                  v-if="column.filter"
                  v-clickaway="() => awayFromFilter(column)"
                >
                  <BIMDataButton
                    color="primary"
                    ghost
                    rounded
                    icon
                    class="m-l-6"
                    :class="{
                      active: filters.some(
                        filter => filter.columnKey === column.id,
                      ),
                    }"
                    @click="toggleFiltersMenu(column)"
                  >
                    <BIMDataIconCaret size="xxxs" fill color="default" />
                  </BIMDataButton>
                  <ColumnFilters
                    v-if="displayedColumnFilterId === column.id"
                    :column="column"
                    :columnData="
                      computedRows.map(
                        computedRow => computedRow.data[column.id],
                      )
                    "
                    :filters="
                      filters.find(filter => filter.columnKey === column.id)
                        ?.columnFilters ?? []
                    "
                    @filter="updateFilters(column, $event)"
                  >
                    <template #column-filter-empty>
                      <slot name="column-filter-empty"></slot>
                    </template>
                  </ColumnFilters>
                </div>
              </div>
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
            v-for="{ key, data } of displayedRows"
            :key="`body-row-${key}`"
            v-show="paginatedRows.includes(key)"
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
      :style="{
        visibility: displayedRows.length > perPage ? 'visible' : 'hidden',
      }"
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
        {{ `${pageIndexStart} - ${pageIndexEnd} / ${displayedRows.length}` }}
      </span>
      <BIMDataButton
        ghost
        rounded
        icon
        :disabled="pageIndexEnd === displayedRows.length"
        @click="pageIndex++"
      >
        <BIMDataIconChevron size="s" />
      </BIMDataButton>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch, shallowReactive } from "vue";
import { useRowSelection } from "./table-row-selection.js";
import clickaway from "../../BIMDataDirectives/click-away.js";

// Components
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";
import BIMDataCheckbox from "../BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataIconCaret from "../BIMDataIcon/BIMDataIconStandalone/BIMDataIconCaret.vue";
import BIMDataIconChevron from "../BIMDataIcon/BIMDataIconStandalone/BIMDataIconChevron.vue";
import ColumnSorting from "./column-sorting/ColumnSorting.vue";
import ColumnFilters from "./column-filters/ColumnFilters.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataCheckbox,
    BIMDataIconCaret,
    BIMDataIconChevron,
    ColumnSorting,
    ColumnFilters,
  },
  directives: { clickaway },
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
      props.rows.map((row, i) => ({ key: row[props.rowKey] ?? i, data: row })),
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
        },
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

    const displayedColumnFilterId = ref(null);

    const toggleFiltersMenu = column => {
      if (displayedColumnFilterId.value === column.id) {
        displayedColumnFilterId.value = null;
      } else {
        displayedColumnFilterId.value = column.id;
      }
    };

    const awayFromFilter = column => {
      if (column.id === displayedColumnFilterId.value) {
        displayedColumnFilterId.value = null;
      }
    };

    const sortObject = shallowReactive({ column: null, order: null });
    const filteringColumns = ref([]);
    const sortedRows = computed(() => {
      if (sortObject.column) {
        // by default, sort in ascending order
        const sortOrder = sortObject.order !== "desc" ? 1 : -1;
        if (sortObject.column.sortFunction) {
          const sortFunction = (a, b) => {
            return sortObject.column.sortFunction(a.data, b.data) * sortOrder;
          };
          return Array.from(computedRows.value).sort(sortFunction);
        } else {
          return Array.from(computedRows.value).sort((a, b) => {
            if (a.data[sortObject.column.id] < b.data[sortObject.column.id]) {
              return sortOrder;
            }
            if (a.data[sortObject.column.id] > b.data[sortObject.column.id]) {
              return -sortOrder;
            }
            return 0;
          });
        }
      }
      if (filteringColumns.value.length > 0) {
        return Array.from(computedRows.value).filter(row => {
          return (
            row.data[filteringColumns.value[0].id] ===
            filteringColumns.value[0].text
          );
        });
      }

      return computedRows.value;
    });

    const toggleSorting = column => {
      if (sortObject.column === column) {
        sortObject.order = sortObject.order === "asc" ? "desc" : "asc";
      } else {
        sortObject.column = column;
        sortObject.order = column.defaultSortOrder ?? "asc";
      }
    };

    /**
     * @typedef {Object} ColumnFilter
     * @property {number} columnKey
     * @property {any[]} columnFilters
     */

    /**
     * @type { { value: ColumnFilter[] } }
     */
    const filters = ref([]);

    const displayedRows = computed(() => {
      return sortedRows.value.filter(row => {
        return filters.value.every(filter => {
          const column = props.columns.find(
            column => column.id === filter.columnKey,
          );
          const columnRowData = row.data[filter.columnKey];

          if (columnRowData === null) return;

          if (Array.isArray(columnRowData)) {
            return columnRowData.some(columnRowDataElement =>
              filter.columnFilters.includes(
                column.filterKey
                  ? columnRowDataElement[column.filterKey]
                  : columnRowDataElement,
              ),
            );
          } else {
            return filter.columnFilters.includes(
              column.filterKey
                ? columnRowData[column.filterKey]
                : columnRowData,
            );
          }
        });
      });
    });

    /**
     * @param {ColumnFilter} columnFilter
     */
    const updateFilters = (column, columnFilters) => {
      filters.value = filters.value.filter(
        filter => filter.columnKey !== column.id,
      );
      if (columnFilters.length > 0) {
        filters.value.push({
          columnKey: column.id,
          columnFilters,
        });
      }
    };

    const paginatedRows = ref([]);
    const pageIndex = ref(0);
    const pageIndexStart = ref(1);
    const pageIndexEnd = ref(props.perPage);

    // Reset `pageIndex` when rows array or the number of rows per page change.
    watch(
      [displayedRows, () => props.perPage],
      () => {
        pageIndex.value = 0;
      },
      { immediate: true },
    );
    // Compute `paginatedRows` according to rows array and pagination settings.
    watch(
      [displayedRows, () => props.paginated, () => props.perPage, pageIndex],
      ([rows, paginated, perPage, index]) => {
        const rowKeys = rows.map(r => r.key);
        if (paginated) {
          const start = perPage * index;
          const end = start + perPage;

          paginatedRows.value = rowKeys.slice(start, end);
          pageIndexStart.value = start + 1;
          pageIndexEnd.value = Math.min(end, rows.length);
        } else {
          paginatedRows.value = rowKeys;
        }
      },
      { immediate: true },
    );

    return {
      // References
      activeHeadercolumnKey: null,
      computedRows,
      paginatedRows,
      pageIndex,
      pageIndexEnd,
      pageIndexStart,
      rowSelection,
      dragOveredRowKey,
      displayedColumnFilterId,
      filteringColumns,
      filters,
      sortObject,
      // Methods
      awayFromFilter,
      onDrop,
      onDragover,
      onDragleave,
      toggleAll,
      toggleRow,
      toggleSorting,
      updateFilters,
      toggleFiltersMenu,
      displayedRows,
    };
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataTable.scss"></style>
