<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <SyncPending />
  </Icon>
</template>

<script>
import SyncPending from "../BIMDataLibraryIcons/SyncPending.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("SyncPending", SyncPending);
</script>

<style scoped src="../BIMDataIcon.css"></style>
