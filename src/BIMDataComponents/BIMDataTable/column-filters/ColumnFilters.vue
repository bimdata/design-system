<template>
  <div class="column-filters p-12">
    <span v-for="element in elements" :key="element.id"> {{ element }}</span>
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  props: {
    column: {
      type: Object,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const filteredElements = computed(() => {
      return props.rows.map(row => {
        return row.data[props.column.id];
      });
    });
    const elements = ref([]);
    elements.value = [...new Set(filteredElements.value)];
    return {
      elements,
      filteredElements,
    };
  },
};
</script>

<style scoped lang="scss" src="./_ColumnFilters.scss"></style>
