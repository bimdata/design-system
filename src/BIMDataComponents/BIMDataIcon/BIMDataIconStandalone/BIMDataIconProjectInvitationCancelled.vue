<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ProjectInvitationCancelled />
  </Icon>
</template>

<script>
import ProjectInvitationCancelled from "../BIMDataLibraryIcons/ProjectInvitationCancelled.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon(
  "ProjectInvitationCancelled",
  ProjectInvitationCancelled,
);
</script>

<style scoped src="../_BIMDataIcon.scss"></style>
