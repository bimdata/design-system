<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FavoriteStroke />
  </Icon>
</template>

<script>
import FavoriteStroke from "../BIMDataLibraryIcons/FavoriteStroke.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("FavoriteStroke", FavoriteStroke);
</script>

<style scoped src="../BIMDataIcon.css"></style>
