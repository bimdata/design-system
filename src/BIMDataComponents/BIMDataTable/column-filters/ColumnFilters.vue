<template>
  <div class="column-filters p-12">
    <slot name="column-filters">
      <div
        v-for="element in columnElements"
        :key="element.text"
        class="column-filters__element flex justify-center"
      >
        <BIMDataCheckbox
          :text="element.text"
          :modelValue="element.checked"
          @update:modelValue="toggle(element, $event)"
        />
      </div>
    </slot>
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
    rows: {
      type: Array,
      required: true,
    },
    filters: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const columnFilters = computed(
      () =>
        props.filters.find(filter => filter.columnKey === props.column.id)
          ?.columnFilters ?? [],
    );
    const elements = computed(() => [
      ...new Set(props.rows.map(row => row.data[props.column.id])),
    ]);
    const columnElements = computed(() =>
      elements.value.map(element => ({
        text: element,
        checked: columnFilters.value.includes(element),
      })),
    );

    const toggle = (element, checked) => {
      const newColumnFilters = checked
        ? [...columnFilters.value, element.text]
        : columnFilters.value.filter(filter => filter !== element.text);
      emit("filter", {
        columnKey: props.column.id,
        columnFilters: newColumnFilters,
      });
    };

    return {
      columnElements,
      toggle,
    };
  },
};
</script>

<style scoped lang="scss" src="./_ColumnFilters.scss"></style>
