<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <TagStroke />
  </Icon>
</template>

<script>
import TagStroke from "../BIMDataLibraryIcons/TagStroke.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("TagStroke", TagStroke);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
