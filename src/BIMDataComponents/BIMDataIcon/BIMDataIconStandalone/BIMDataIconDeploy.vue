<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Deploy />
  </Icon>
</template>

<script>
import Deploy from "../BIMDataLibraryIcons/Deploy.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Deploy", Deploy);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
