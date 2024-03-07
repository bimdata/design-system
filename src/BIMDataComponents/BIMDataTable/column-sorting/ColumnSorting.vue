<template>
  <span
    :class="[column.defaultSortOrder === 'asc' ? 'asc' : 'desc', 'm-l-6']"
    @mousedown.prevent
  >
    <BIMDataIconCaret
      v-if="column.defaultSortOrder === 'desc'"
      :rotate="180"
      size="xxxs"
      fill
      color="default"
    />
    <BIMDataIconCaret
      v-if="column.defaultSortOrder === 'asc'"
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
