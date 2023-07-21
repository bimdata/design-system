<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ClassificationCategory />
  </Icon>
</template>

<script>
import ClassificationCategory from "../BIMDataLibraryIcons/ClassificationCategory.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("ClassificationCategory", ClassificationCategory);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
