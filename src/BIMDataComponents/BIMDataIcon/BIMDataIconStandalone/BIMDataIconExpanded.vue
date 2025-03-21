<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Expanded />
  </Icon>
</template>

<script>
import Expanded from "../BIMDataLibraryIcons/Expanded.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Expanded", Expanded);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
