<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <AttachFile />
  </Icon>
</template>

<script>
import AttachFile from "../BIMDataLibraryIcons/AttachFile.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("AttachFile", AttachFile);
</script>

<style scoped src="../BIMDataIcon.css"></style>
