<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Save />
  </Icon>
</template>

<script>
import Save from "../BIMDataLibraryIcons/Save.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Save", Save);
</script>

<style scoped src="../BIMDataIcon.css"></style>
