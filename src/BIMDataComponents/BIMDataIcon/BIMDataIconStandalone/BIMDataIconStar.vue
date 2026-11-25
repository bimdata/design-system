<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Star />
  </Icon>
</template>

<script>
import Star from "../BIMDataLibraryIcons/Star.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Star", Star);
</script>

<style scoped src="../BIMDataIcon.css"></style>
