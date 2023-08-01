<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Split />
  </Icon>
</template>

<script>
import Split from "../BIMDataLibraryIcons/Split.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Split", Split);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
