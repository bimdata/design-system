<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Viewer2DPolychrome />
  </Icon>
</template>

<script>
import Viewer2DPolychrome from "../BIMDataLibraryIcons/polychrome/Viewer2DPolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Viewer2DPolychrome", Viewer2DPolychrome);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
