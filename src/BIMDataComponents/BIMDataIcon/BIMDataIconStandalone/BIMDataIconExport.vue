<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Export />
  </Icon>
</template>

<script>
import Export from "../BIMDataLibraryIcons/Export.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Export", Export);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
