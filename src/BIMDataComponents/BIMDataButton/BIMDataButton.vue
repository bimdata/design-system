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
  // import BIMDATA VARIABLES
  @import "@/assets/scss/_BIMDataVariables.scss";

  // import BIMDATA UTILITIES
  @import "@/assets/scss/utilities/_text.scss";

  // import BIMDATA STYLE COMPONENT
  @import "./_BIMDataButton.scss";
</style>
