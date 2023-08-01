<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Viewer3DPolychrome />
  </Icon>
</template>

<script>
import Viewer3DPolychrome from "../BIMDataLibraryIcons/polychrome/Viewer3DPolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Viewer3DPolychrome", Viewer3DPolychrome);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
