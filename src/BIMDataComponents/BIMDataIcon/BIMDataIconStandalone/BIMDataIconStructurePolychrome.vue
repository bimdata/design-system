<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <StructurePolychrome />
  </Icon>
</template>

<script>
import StructurePolychrome from "../BIMDataLibraryIcons/polychrome/StructurePolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("StructurePolychrome", StructurePolychrome);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
