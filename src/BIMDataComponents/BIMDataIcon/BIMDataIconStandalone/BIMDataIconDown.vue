<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Down />
  </Icon>
</template>

<script>
import Down from "../BIMDataLibraryIcons/Down.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Down", Down);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
