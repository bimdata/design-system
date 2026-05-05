<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CloudInvitationDenied />
  </Icon>
</template>

<script>
import CloudInvitationDenied from "../BIMDataLibraryIcons/CloudInvitationDenied.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("CloudInvitationDenied", CloudInvitationDenied);
</script>

<style scoped src="../_BIMDataIcon.scss"></style>
