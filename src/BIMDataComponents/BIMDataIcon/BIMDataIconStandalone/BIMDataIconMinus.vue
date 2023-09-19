<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Minus />
  </Icon>
</template>

<script>
import Minus from "../BIMDataLibraryIcons/Minus.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Minus", Minus);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
