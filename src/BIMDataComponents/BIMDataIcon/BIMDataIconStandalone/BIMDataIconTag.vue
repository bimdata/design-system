<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Tag />
  </Icon>
</template>

<script>
import Tag from "../BIMDataLibraryIcons/Tag.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Tag", Tag);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
