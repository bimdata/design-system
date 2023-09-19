<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ScreenConfig />
  </Icon>
</template>

<script>
import ScreenConfig from "../BIMDataLibraryIcons/ScreenConfig.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("ScreenConfig", ScreenConfig);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
