<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <InProgressFile />
  </Icon>
</template>

<script>
import InProgressFile from "../BIMDataLibraryIcons/InProgressFile.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("InProgressFile", InProgressFile);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
