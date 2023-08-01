<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Videocam />
  </Icon>
</template>

<script>
import Videocam from "../BIMDataLibraryIcons/Videocam.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Videocam", Videocam);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
