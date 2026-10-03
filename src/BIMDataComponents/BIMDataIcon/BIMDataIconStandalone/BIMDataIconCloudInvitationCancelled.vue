<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CloudInvitationCancelled />
  </Icon>
</template>

<script>
import CloudInvitationCancelled from "../BIMDataLibraryIcons/CloudInvitationCancelled.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("CloudInvitationCancelled", CloudInvitationCancelled);
</script>

<style scoped src="../BIMDataIcon.css"></style>
