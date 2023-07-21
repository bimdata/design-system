<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Logout />
  </Icon>
</template>

<script>
import Logout from "../BIMDataLibraryIcons/Logout.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Logout", Logout);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
