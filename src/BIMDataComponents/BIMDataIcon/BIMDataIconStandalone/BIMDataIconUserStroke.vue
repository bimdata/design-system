<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <UserStroke />
  </Icon>
</template>

<script>
import UserStroke from "../BIMDataLibraryIcons/UserStroke.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("UserStroke", UserStroke);
</script>

<style scoped src="../BIMDataIcon.css"></style>
