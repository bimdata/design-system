<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <StarFill />
  </Icon>
</template>

<script>
import StarFill from "../BIMDataLibraryIcons/StarFill.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("StarFill", StarFill);
</script>

<style scoped src="../BIMDataIcon.css"></style>
