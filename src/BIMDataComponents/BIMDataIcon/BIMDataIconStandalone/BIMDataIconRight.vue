<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Right />
  </Icon>
</template>

<script>
import Right from "../BIMDataLibraryIcons/Right.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Right", Right);
</script>

<style scoped src="../BIMDataIcon.css"></style>
