<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Section />
  </Icon>
</template>

<script>
import Section from "../BIMDataLibraryIcons/Section.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Section", Section);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
