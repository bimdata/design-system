<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Failed />
  </Icon>
</template>

<script>
import Failed from "../BIMDataLibraryIcons/Failed.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Failed", Failed);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
