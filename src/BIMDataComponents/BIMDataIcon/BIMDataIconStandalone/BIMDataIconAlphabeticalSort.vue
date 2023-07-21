<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <AlphabeticalSort />
  </Icon>
</template>

<script>
import AlphabeticalSort from "../BIMDataLibraryIcons/AlphabeticalSort.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("AlphabeticalSort", AlphabeticalSort);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
