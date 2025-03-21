<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FitView />
  </Icon>
</template>

<script>
import FitView from "../BIMDataLibraryIcons/FitView.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("FitView", FitView);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
