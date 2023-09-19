<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <IndexAscending />
  </Icon>
</template>

<script>
import IndexAscending from "../BIMDataLibraryIcons/IndexAscending.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("IndexAscending", IndexAscending);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
