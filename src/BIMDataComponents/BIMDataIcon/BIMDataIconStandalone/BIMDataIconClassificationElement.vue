<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ClassificationElement />
  </Icon>
</template>

<script>
import ClassificationElement from "../BIMDataLibraryIcons/ClassificationElement.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("ClassificationElement", ClassificationElement);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
