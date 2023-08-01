<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Building />
  </Icon>
</template>

<script>
import Building from "../BIMDataLibraryIcons/Building.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Building", Building);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
