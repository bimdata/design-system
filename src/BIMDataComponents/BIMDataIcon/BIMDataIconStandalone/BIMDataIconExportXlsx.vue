<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ExportXlsx />
  </Icon>
</template>

<script>
import ExportXlsx from "../BIMDataLibraryIcons/ExportXlsx.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("ExportXlsx", ExportXlsx);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
