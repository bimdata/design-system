<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Undo />
  </Icon>
</template>

<script>
import Undo from "../BIMDataLibraryIcons/Undo.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Undo", Undo);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
