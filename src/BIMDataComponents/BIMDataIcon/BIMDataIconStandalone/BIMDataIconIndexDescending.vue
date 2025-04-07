<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <IndexDescending />
  </Icon>
</template>

<script>
import IndexDescending from "../BIMDataLibraryIcons/IndexDescending.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("IndexDescending", IndexDescending);
</script>

<style scoped src="../BIMDataIcon.css"></style>
