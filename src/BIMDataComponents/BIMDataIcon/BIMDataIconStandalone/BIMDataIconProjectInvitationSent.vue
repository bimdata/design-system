<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ProjectInvitationSent />
  </Icon>
</template>

<script>
import ProjectInvitationSent from "../BIMDataLibraryIcons/ProjectInvitationSent.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("ProjectInvitationSent", ProjectInvitationSent);
</script>

<style scoped src="../BIMDataIcon.css"></style>
