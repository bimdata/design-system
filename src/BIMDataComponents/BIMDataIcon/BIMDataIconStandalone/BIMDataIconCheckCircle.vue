<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CheckCircle />
  </Icon>
</template>

<script>
import CheckCircle from "../BIMDataLibraryIcons/CheckCircle.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("CheckCircle", CheckCircle);
</script>

<style scoped src="../BIMDataIcon.css"></style>
