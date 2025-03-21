<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Redo />
  </Icon>
</template>

<script>
import Redo from "../BIMDataLibraryIcons/Redo.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Redo", Redo);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
