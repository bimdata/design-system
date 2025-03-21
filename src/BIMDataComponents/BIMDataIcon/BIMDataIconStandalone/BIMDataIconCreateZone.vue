<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CreateZone />
  </Icon>
</template>

<script>
import CreateZone from "../BIMDataLibraryIcons/CreateZone.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("CreateZone", CreateZone);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
