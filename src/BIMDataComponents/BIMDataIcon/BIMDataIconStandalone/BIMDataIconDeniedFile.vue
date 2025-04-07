<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <DeniedFile />
  </Icon>
</template>

<script>
import DeniedFile from "../BIMDataLibraryIcons/DeniedFile.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("DeniedFile", DeniedFile);
</script>

<style scoped src="../BIMDataIcon.css"></style>
