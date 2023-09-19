<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Navigation />
  </Icon>
</template>

<script>
import Navigation from "../BIMDataLibraryIcons/Navigation.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Navigation", Navigation);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
