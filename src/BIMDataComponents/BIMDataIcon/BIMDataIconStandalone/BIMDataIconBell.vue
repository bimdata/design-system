<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Bell />
  </Icon>
</template>

<script>
import Bell from "../BIMDataLibraryIcons/Bell.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Bell", Bell);
</script>

<style scoped src="../BIMDataIcon.css"></style>
