<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Up />
  </Icon>
</template>

<script>
import Up from "../BIMDataLibraryIcons/Up.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Up", Up);
</script>

<style scoped src="../BIMDataIcon.css"></style>
