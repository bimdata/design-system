<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Key />
  </Icon>
</template>

<script>
import Key from "../BIMDataLibraryIcons/Key.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Key", Key);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
