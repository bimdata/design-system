<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Archive />
  </Icon>
</template>

<script>
import Archive from "../BIMDataLibraryIcons/Archive.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Archive", Archive);
</script>

<style scoped src="../BIMDataIcon.css"></style>
