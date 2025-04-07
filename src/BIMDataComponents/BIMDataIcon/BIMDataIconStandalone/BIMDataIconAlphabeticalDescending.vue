<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <AlphabeticalDescending />
  </Icon>
</template>

<script>
import AlphabeticalDescending from "../BIMDataLibraryIcons/AlphabeticalDescending.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("AlphabeticalDescending", AlphabeticalDescending);
</script>

<style scoped src="../BIMDataIcon.css"></style>
