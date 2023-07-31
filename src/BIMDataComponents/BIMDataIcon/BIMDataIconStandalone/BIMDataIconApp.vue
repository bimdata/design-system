<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <App />
  </Icon>
</template>

<script>
import App from "../BIMDataLibraryIcons/App.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("App", App);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
