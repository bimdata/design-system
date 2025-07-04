<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Send />
  </Icon>
</template>

<script>
import Send from "../BIMDataLibraryIcons/Send.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Send", Send);
</script>

<style scoped src="../BIMDataIcon.css"></style>
