<template>
  <span
    v-if="column.sortable"
    :class="[column.defaultSortAs === 'asc' ? 'asc' : 'desc', 'm-l-6']"
    @mousedown.prevent
  >
    <BIMDataIconUp
      v-if="column.defaultSortAs === 'desc'"
      size="xxxs"
      fill
      color="default"
    />
    <BIMDataIconDown
      v-if="column.defaultSortAs === 'asc'"
      size="xxxs"
      fill
      color="default"
    />
  </span>
</template>

<script>
export default {
  props: {
    column: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
span {
  cursor: pointer;
}
</style>
