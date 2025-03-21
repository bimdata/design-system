<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <UnknownFile />
  </Icon>
</template>

<script>
import UnknownFile from "../BIMDataLibraryIcons/UnknownFile.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("UnknownFile", UnknownFile);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
