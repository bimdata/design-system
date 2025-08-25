<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <AccountSettings />
  </Icon>
</template>

<script>
import AccountSettings from "../BIMDataLibraryIcons/AccountSettings.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("AccountSettings", AccountSettings);
</script>

<style scoped src="../BIMDataIcon.css"></style>
