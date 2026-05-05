<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <AddAlert />
  </Icon>
</template>

<script>
import AddAlert from "../BIMDataLibraryIcons/AddAlert.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("AddAlert", AddAlert);
</script>

<style scoped src="../_BIMDataIcon.scss"></style>
