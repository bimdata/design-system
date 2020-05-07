<template>
  <button
    class="bimdata-btn"
    :style="{ 'min-width': width, height: height }"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: "150px"
    },
    height: {
      type: [Number, String],
      default: "32px"
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "./_BIMDataButton.scss";
</style>
