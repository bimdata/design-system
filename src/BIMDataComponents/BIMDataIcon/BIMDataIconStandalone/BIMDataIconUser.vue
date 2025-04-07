<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <User />
  </Icon>
</template>

<script>
import User from "../BIMDataLibraryIcons/User.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("User", User);
</script>

<style scoped src="../BIMDataIcon.css"></style>
