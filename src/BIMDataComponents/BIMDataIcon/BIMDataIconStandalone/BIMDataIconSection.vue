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

<style scoped src="../BIMDataIcon.css"></style>
