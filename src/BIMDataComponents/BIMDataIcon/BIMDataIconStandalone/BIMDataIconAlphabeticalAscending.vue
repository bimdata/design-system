<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <AlphabeticalAscending />
  </Icon>
</template>

<script>
import AlphabeticalAscending from "../BIMDataLibraryIcons/AlphabeticalAscending.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("AlphabeticalAscending", AlphabeticalAscending);
</script>

<style scoped src="../BIMDataIcon.css"></style>
