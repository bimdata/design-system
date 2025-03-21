<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Preview />
  </Icon>
</template>

<script>
import Preview from "../BIMDataLibraryIcons/Preview.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Preview", Preview);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
