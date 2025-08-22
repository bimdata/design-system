<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Type />
  </Icon>
</template>

<script>
import Type from "../BIMDataLibraryIcons/Type.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Type", Type);
</script>

<style scoped src="../BIMDataIcon.css"></style>
