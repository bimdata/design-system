<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Drag />
  </Icon>
</template>

<script>
import Drag from "../BIMDataLibraryIcons/Drag.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Drag", Drag);
</script>

<style scoped src="../BIMDataIcon.css"></style>
