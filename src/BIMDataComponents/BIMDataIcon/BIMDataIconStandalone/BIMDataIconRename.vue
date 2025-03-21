<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Rename />
  </Icon>
</template>

<script>
import Rename from "../BIMDataLibraryIcons/Rename.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Rename", Rename);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
