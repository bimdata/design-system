<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Detach />
  </Icon>
</template>

<script>
import Discussions from "../BIMDataLibraryIcons/Discussions.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Discussions", Discussions);
</script>

<style scoped src="../BIMDataIcon.css"></style>
