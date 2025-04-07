<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Bcf />
  </Icon>
</template>

<script>
import Bcf from "../BIMDataLibraryIcons/Bcf.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Bcf", Bcf);
</script>

<style scoped src="../BIMDataIcon.css"></style>
