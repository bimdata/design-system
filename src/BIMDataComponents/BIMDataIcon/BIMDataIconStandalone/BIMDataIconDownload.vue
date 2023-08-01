<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Download />
  </Icon>
</template>

<script>
import Download from "../BIMDataLibraryIcons/Download.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Download", Download);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
