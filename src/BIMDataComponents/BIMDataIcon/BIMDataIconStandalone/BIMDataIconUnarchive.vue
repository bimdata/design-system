<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Unarchive />
  </Icon>
</template>

<script>
import Unarchive from "../BIMDataLibraryIcons/Unarchive.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Unarchive", Unarchive);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
