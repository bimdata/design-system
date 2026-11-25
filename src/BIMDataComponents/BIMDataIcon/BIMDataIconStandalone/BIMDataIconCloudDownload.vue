<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CloudDownload />
  </Icon>
</template>

<script>
import CloudDownload from "../BIMDataLibraryIcons/CloudDownload.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("CloudDownload", CloudDownload);
</script>

<style scoped src="../BIMDataIcon.css"></style>
