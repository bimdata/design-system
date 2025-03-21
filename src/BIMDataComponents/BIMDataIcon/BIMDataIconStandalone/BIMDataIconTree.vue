<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Tree />
  </Icon>
</template>

<script>
import Tree from "../BIMDataLibraryIcons/Tree.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Tree", Tree);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
