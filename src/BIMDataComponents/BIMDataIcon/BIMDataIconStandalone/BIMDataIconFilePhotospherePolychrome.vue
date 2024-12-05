<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FilePhotospherePolychrome />
  </Icon>
</template>

<script>
import FilePhotospherePolychrome from "../BIMDataLibraryIcons/polychrome/FilePhotospherePolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FilePhotospherePolychrome", FilePhotospherePolychrome);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
