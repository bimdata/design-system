<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Delete />
  </Icon>
</template>

<script>
import Delete from "../BIMDataLibraryIcons/Delete.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Delete", Delete);
</script>

<style scoped src="../BIMDataIcon.css"></style>
