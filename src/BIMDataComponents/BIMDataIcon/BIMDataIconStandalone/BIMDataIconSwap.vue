<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Swap />
  </Icon>
</template>

<script>
import Swap from "../BIMDataLibraryIcons/Swap.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Swap", Swap);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
