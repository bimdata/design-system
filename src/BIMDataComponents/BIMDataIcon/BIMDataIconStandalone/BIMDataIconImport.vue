<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Import />
  </Icon>
</template>

<script>
import Import from "../BIMDataLibraryIcons/Import.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Import", Import);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
