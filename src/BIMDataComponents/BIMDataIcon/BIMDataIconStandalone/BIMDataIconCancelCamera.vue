<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CancelCamera />
  </Icon>
</template>

<script>
import CancelCamera from "../BIMDataLibraryIcons/CancelCamera.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("CancelCamera", CancelCamera);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
