<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ProjectInvitationDenied />
  </Icon>
</template>

<script>
import ProjectInvitationDenied from "../BIMDataLibraryIcons/ProjectInvitationDenied.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("ProjectInvitationDenied", ProjectInvitationDenied);
</script>

<style scoped src="../_BIMDataIcon.scss"></style>
