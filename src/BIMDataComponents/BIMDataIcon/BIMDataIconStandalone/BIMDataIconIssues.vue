<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Issues />
  </Icon>
</template>

<script>
import Issues from "../BIMDataLibraryIcons/Issues.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Issues", Issues);
</script>

<style scoped src="../BIMDataIcon.css"></style>
