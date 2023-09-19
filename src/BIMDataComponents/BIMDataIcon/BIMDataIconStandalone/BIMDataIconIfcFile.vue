<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <IfcFile />
  </Icon>
</template>

<script>
import IfcFile from "../BIMDataLibraryIcons/IfcFile.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("IfcFile", IfcFile);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
