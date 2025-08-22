<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Notifications />
  </Icon>
</template>

<script>
import Notifications from "../BIMDataLibraryIcons/Notifications.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Notifications", Notifications);
</script>

<style scoped src="../BIMDataIcon.css"></style>
