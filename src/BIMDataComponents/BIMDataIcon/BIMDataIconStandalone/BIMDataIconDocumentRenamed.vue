<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <DocumentRenamed />
  </Icon>
</template>

<script>
import DocumentRenamed from "../BIMDataLibraryIcons/DocumentRenamed.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("DocumentRenamed", DocumentRenamed);
</script>

<style scoped src="../_BIMDataIcon.scss"></style>
