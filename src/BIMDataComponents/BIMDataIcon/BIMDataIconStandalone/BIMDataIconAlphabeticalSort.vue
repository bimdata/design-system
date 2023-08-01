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

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
