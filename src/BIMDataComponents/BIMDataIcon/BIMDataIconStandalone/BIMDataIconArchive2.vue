<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Archive2 />
  </Icon>
</template>

<script>
import Archive2 from "../BIMDataLibraryIcons/Archive2.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Archive2", Archive2);
</script>

<style scoped src="../BIMDataIcon.css"></style>
