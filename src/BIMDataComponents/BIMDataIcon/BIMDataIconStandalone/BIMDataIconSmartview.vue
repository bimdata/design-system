<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Smartview />
  </Icon>
</template>

<script>
import Smartview from "../BIMDataLibraryIcons/Smartview.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Smartview", Smartview);
</script>

<style scoped src="../BIMDataIcon.css"></style>
