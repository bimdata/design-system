<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <DateDescending />
  </Icon>
</template>

<script>
import DateDescending from "../BIMDataLibraryIcons/DateDescending.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("DateDescending", DateDescending);
</script>

<style scoped src="../BIMDataIcon.css"></style>
