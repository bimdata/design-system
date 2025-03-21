<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <AddFolder />
  </Icon>
</template>

<script>
import AddFolder from "../BIMDataLibraryIcons/AddFolder.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("AddFolder", AddFolder);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
