<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ReadonlyFolder />
  </Icon>
</template>

<script>
import ReadonlyFolder from "../BIMDataLibraryIcons/ReadonlyFolder.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("ReadonlyFolder", ReadonlyFolder);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
