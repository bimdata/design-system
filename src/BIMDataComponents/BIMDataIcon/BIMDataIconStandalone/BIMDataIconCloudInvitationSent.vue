<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CloudInvitationSent />
  </Icon>
</template>

<script>
import CloudInvitationSent from "../BIMDataLibraryIcons/CloudInvitationSent.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("CloudInvitationSent", CloudInvitationSent);
</script>

<style scoped src="../BIMDataIcon.css"></style>
