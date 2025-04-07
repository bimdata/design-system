<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Restore />
  </Icon>
</template>

<script>
import Restore from "../BIMDataLibraryIcons/Restore.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Restore", Restore);
</script>

<style scoped src="../BIMDataIcon.css"></style>
