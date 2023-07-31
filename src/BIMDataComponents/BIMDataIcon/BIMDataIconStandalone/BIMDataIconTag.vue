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

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
