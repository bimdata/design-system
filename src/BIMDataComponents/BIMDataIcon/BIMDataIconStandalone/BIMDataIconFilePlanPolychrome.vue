<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FilePlanPolychrome />
  </Icon>
</template>

<script>
import FilePlanPolychrome from "../BIMDataLibraryIcons/polychrome/FilePlanPolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FilePlanPolychrome", FilePlanPolychrome);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
