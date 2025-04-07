<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Refresh />
  </Icon>
</template>

<script>
import Refresh from "../BIMDataLibraryIcons/Refresh.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Refresh", Refresh);
</script>

<style scoped src="../BIMDataIcon.css"></style>
