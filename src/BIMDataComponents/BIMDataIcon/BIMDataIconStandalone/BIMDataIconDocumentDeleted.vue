<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <DocumentDeleted />
  </Icon>
</template>

<script>
import DocumentDeleted from "../BIMDataLibraryIcons/DocumentDeleted.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("DocumentDeleted", DocumentDeleted);
</script>

<style scoped src="../_BIMDataIcon.scss"></style>
