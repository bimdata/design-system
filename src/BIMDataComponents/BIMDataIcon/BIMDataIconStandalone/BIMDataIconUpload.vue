<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Upload />
  </Icon>
</template>

<script>
import Upload from "../BIMDataLibraryIcons/Upload.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Upload", Upload);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
