<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ProjectInvitationAccepted />
  </Icon>
</template>

<script>
import ProjectInvitationAccepted from "../BIMDataLibraryIcons/ProjectInvitationAccepted.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("ProjectInvitationAccepted", ProjectInvitationAccepted);
</script>

<style scoped src="../_BIMDataIcon.scss"></style>
