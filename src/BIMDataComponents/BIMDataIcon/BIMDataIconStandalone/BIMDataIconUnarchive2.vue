<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Unarchive2 />
  </Icon>
</template>

<script>
import Unarchive2 from "../BIMDataLibraryIcons/Unarchive2.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Unarchive2", Unarchive2);
</script>

<style scoped src="../BIMDataIcon.css"></style>
