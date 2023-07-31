<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Edit />
  </Icon>
</template>

<script>
import Edit from "../BIMDataLibraryIcons/Edit.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Edit", Edit);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
