<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <AddFavorite />
  </Icon>
</template>

<script>
import AddFavorite from "../BIMDataLibraryIcons/AddFavorite.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("AddFavorite", AddFavorite);
</script>

<style scoped src="../BIMDataIcon.css"></style>
