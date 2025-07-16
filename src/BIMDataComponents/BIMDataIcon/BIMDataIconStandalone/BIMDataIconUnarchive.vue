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

<style scoped src="../BIMDataIcon.css"></style>
