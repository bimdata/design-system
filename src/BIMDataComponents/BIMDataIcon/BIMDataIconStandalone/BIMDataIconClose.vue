<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Close />
  </Icon>
</template>

<script>
import Close from "../BIMDataLibraryIcons/Close.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Close", Close);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
