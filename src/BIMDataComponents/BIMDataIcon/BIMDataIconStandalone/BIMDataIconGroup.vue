<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Group />
  </Icon>
</template>

<script>
import Group from "../BIMDataLibraryIcons/Group.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Group", Group);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
