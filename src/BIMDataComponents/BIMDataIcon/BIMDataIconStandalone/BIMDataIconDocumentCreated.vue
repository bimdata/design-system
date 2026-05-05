<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <DocumentCreated />
  </Icon>
</template>

<script>
import DocumentCreated from "../BIMDataLibraryIcons/DocumentCreated.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("DocumentCreated", DocumentCreated);
</script>

<style scoped src="../_BIMDataIcon.scss"></style>
