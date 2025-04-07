<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Screenshot />
  </Icon>
</template>

<script>
import Screenshot from "../BIMDataLibraryIcons/Screenshot.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Screenshot", Screenshot);
</script>

<style scoped src="../BIMDataIcon.css"></style>
