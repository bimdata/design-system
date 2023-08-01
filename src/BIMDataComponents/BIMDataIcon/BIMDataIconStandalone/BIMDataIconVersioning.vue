<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Versioning />
  </Icon>
</template>

<script>
import Versioning from "../BIMDataLibraryIcons/Versioning.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Versioning", Versioning);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
