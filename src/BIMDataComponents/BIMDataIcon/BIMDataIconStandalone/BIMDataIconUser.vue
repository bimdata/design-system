<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <User />
  </Icon>
</template>

<script>
import User from "../BIMDataLibraryIcons/User.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("User", User);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
