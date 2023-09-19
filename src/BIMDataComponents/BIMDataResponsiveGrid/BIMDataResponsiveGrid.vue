<template>
  <div
    class="bimdata-responsive-grid"
    :style="{
      gridTemplateColumns: isRepeatFit
        ? `repeat(auto-fit, minmax(${itemWidth}, 1fr))`
        : `repeat(auto-fill, minmax(${itemWidth}, 1fr))`,
      rowGap,
      columnGap,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    itemWidth: {
      type: String,
      default: "100px",
    },
    rowGap: {
      type: String,
      default: "12px",
    },
    columnGap: {
      type: String,
      default: "12px",
    },
    isRepeatFit: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataResponsiveGrid.scss"></style>
