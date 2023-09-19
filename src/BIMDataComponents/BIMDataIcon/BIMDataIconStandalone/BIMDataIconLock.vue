<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Lock />
  </Icon>
</template>

<script>
import Lock from "../BIMDataLibraryIcons/Lock.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Lock", Lock);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
