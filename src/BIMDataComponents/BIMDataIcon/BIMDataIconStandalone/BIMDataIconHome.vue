<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Home />
  </Icon>
</template>

<script>
import Home from "../BIMDataLibraryIcons/Home.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Home", Home);
</script>

<style scoped src="../BIMDataIcon.css"></style>
