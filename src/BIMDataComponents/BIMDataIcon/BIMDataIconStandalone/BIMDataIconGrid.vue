<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Grid />
  </Icon>
</template>

<script>
import Grid from "../BIMDataLibraryIcons/Grid.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Grid", Grid);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
