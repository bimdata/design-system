<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Author />
  </Icon>
</template>

<script>
import Author from "../BIMDataLibraryIcons/Author.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Author", Author);
</script>

<style scoped src="../BIMDataIcon.css"></style>
