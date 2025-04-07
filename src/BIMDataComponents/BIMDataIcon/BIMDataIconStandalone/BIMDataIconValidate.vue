<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Validate />
  </Icon>
</template>

<script>
import Validate from "../BIMDataLibraryIcons/Validate.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Validate", Validate);
</script>

<style scoped src="../BIMDataIcon.css"></style>
