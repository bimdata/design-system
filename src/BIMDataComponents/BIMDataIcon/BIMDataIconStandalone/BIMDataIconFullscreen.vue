<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Fullscreen />
  </Icon>
</template>

<script>
import Fullscreen from "../BIMDataLibraryIcons/Fullscreen.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Fullscreen", Fullscreen);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
