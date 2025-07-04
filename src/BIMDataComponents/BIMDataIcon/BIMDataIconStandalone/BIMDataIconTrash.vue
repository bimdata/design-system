<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Trash />
  </Icon>
</template>

<script>
import Trash from "../BIMDataLibraryIcons/Trash.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Trash", Trash);
</script>

<style scoped src="../BIMDataIcon.css"></style>
