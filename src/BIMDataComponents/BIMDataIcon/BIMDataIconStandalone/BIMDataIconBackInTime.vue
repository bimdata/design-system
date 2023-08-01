<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <BackInTime />
  </Icon>
</template>

<script>
import BackInTime from "../BIMDataLibraryIcons/BackInTime.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("BackInTime", BackInTime);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
