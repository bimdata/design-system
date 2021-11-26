<template>
  <div
    class="bimdata-responsive-grid"
    :style="{
      gridTemplateColumns: `repeat(auto-fill, ${itemWidth})`,
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
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataResponsiveGrid.scss"></style>
