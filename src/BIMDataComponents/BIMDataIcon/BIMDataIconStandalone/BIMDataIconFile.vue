<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <File />
  </Icon>
</template>

<script>
import File from "../BIMDataLibraryIcons/File.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("File", File);
</script>

<style scoped src="../BIMDataIcon.css"></style>
