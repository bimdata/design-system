<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <AddFile />
  </Icon>
</template>

<script>
import AddFile from "../BIMDataLibraryIcons/AddFile.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("AddFile", AddFile);
</script>

<style scoped src="../BIMDataIcon.css"></style>
