<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Rules />
  </Icon>
</template>

<script>
import Rules from "../BIMDataLibraryIcons/Rules.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Rules", Rules);
</script>

<style scoped src="../BIMDataIcon.css"></style>
