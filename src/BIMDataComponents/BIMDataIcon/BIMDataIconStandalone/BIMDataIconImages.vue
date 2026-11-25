<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Images />
  </Icon>
</template>

<script>
import Images from "../BIMDataLibraryIcons/Images.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Images", Images);
</script>

<style scoped src="../BIMDataIcon.css"></style>
