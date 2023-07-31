<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Screenshot />
  </Icon>
</template>

<script>
import Screenshot from "../BIMDataLibraryIcons/Screenshot.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Screenshot", Screenshot);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
