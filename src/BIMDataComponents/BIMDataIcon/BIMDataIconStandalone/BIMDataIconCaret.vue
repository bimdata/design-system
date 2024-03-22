<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Caret />
  </Icon>
</template>

<script>
import Caret from "../BIMDataLibraryIcons/Caret.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Caret", Caret);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
