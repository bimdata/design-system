<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Warning />
  </Icon>
</template>

<script>
import Warning from "../BIMDataLibraryIcons/Warning.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Warning", Warning);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
