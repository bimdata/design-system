<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FavoriteFill />
  </Icon>
</template>

<script>
import FavoriteFill from "../BIMDataLibraryIcons/FavoriteFill.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("FavoriteFill", FavoriteFill);
</script>

<style scoped src="../BIMDataIcon.css"></style>
