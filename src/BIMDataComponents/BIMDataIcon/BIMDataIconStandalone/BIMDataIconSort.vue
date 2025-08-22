<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Sort />
  </Icon>
</template>

<script>
import Sort from "../BIMDataLibraryIcons/Sort.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Sort", Sort);
</script>

<style scoped src="../BIMDataIcon.css"></style>
