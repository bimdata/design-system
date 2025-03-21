<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FilePdfPolychrome />
  </Icon>
</template>

<script>
import FilePdfPolychrome from "../BIMDataLibraryIcons/polychrome/FilePdfPolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FilePdfPolychrome", FilePdfPolychrome);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
