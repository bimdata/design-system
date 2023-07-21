<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Project />
  </Icon>
</template>

<script>
import Project from "../BIMDataLibraryIcons/Project.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Project", Project);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
