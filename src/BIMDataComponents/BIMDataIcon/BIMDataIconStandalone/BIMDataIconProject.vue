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

<style scoped src="../BIMDataIcon.css"></style>
