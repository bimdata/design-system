<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Plan />
  </Icon>
</template>

<script>
import Plan from "../BIMDataLibraryIcons/Plan.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Plan", Plan);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
