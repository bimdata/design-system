<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Organization />
  </Icon>
</template>

<script>
import Organization from "../BIMDataLibraryIcons/Organization.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Organization", Organization);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
