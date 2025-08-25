<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Offline />
  </Icon>
</template>

<script>
import Offline from "../BIMDataLibraryIcons/Offline.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Offline", Offline);
</script>

<style scoped src="../BIMDataIcon.css"></style>
