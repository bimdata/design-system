<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <List />
  </Icon>
</template>

<script>
import List from "../BIMDataLibraryIcons/List.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("List", List);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
