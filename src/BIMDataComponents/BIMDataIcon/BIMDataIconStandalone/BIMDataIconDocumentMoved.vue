<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <DocumentMoved />
  </Icon>
</template>

<script>
import DocumentMoved from "../BIMDataLibraryIcons/DocumentMoved.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("DocumentMoved", DocumentMoved);
</script>

<style scoped src="../BIMDataIcon.css"></style>
