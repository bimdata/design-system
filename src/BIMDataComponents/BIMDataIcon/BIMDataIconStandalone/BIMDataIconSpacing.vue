<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Spacing />
  </Icon>
</template>

<script>
import Spacing from "../BIMDataLibraryIcons/Spacing.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Spacing", Spacing);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
