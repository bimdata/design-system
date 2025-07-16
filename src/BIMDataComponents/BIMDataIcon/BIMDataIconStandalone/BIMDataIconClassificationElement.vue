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

<style scoped src="../BIMDataIcon.css"></style>
