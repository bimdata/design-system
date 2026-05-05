<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CloudInvitationAccepted />
  </Icon>
</template>

<script>
import CloudInvitationAccepted from "../BIMDataLibraryIcons/CloudInvitationAccepted.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("CloudInvitationAccepted", CloudInvitationAccepted);
</script>

<style scoped src="../_BIMDataIcon.scss"></style>
