<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ImageCross />
  </Icon>
</template>

<script>
import ImageCross from "../BIMDataLibraryIcons/ImageCross.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("ImageCross", ImageCross);
</script>

<style scoped src="../BIMDataIcon.css"></style>
