<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Invitation />
  </Icon>
</template>

<script>
import Invitation from "../BIMDataLibraryIcons/Invitation.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Invitation", Invitation);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
