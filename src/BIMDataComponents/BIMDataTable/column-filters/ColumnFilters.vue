<template>
  <div class="column-filters p-12">
    <div
      v-for="element in columnElements"
      :key="element.data"
      class="column-filters__element flex align-center"
    >
      <BIMDataCheckbox
        :text="element.data"
        :modelValue="element.checked"
        @update:modelValue="toggle(element.data, $event)"
      />
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import BIMDataCheckbox from "../../BIMDataCheckbox/BIMDataCheckbox.vue";
export default {
  components: {
    BIMDataCheckbox,
  },
  props: {
    column: {
      type: Object,
      required: true,
    },
    columnData: {
      type: Array,
      required: true,
    },
    filters: {
      type: Array,
      required: true,
    },
  },
  emits: ["filter"],
  setup(props, { emit }) {
    const column = props.column;

    const elements = computed(() => {
      const columnData = props.columnData;
      const newColumnData = columnData.filter(data => data !== null);
      return [
        ...new Set(
          newColumnData.flatMap(data => {
            if (!Array.isArray(data)) {
              data = [data];
            }
            return column?.filterKey
              ? data.map(d => d[column?.filterKey])
              : data;
          }),
        ),
      ];
    });

    const columnElements = computed(() =>
      elements.value.map(element => ({
        data: element,
        checked: props.filters.includes(element),
      })),
    );

    const toggle = (element, checked) => {
      const newFilters = new Set(props.filters);

      if (checked) {
        newFilters.add(element);
      } else {
        newFilters.delete(element);
      }

      emit("filter", [...newFilters]);
    };

    return {
      columnElements,
      toggle,
    };
  },
};
</script>

<style scoped lang="scss" src="./_ColumnFilters.scss"></style>
