<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <DocInfoPolychrome />
  </Icon>
</template>

<script>
import DocInfoPolychrome from "../BIMDataLibraryIcons/polychrome/DocInfoPolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("DocInfoPolychrome", DocInfoPolychrome);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
