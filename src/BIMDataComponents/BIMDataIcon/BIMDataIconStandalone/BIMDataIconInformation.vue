<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Information />
  </Icon>
</template>

<script>
import Information from "../BIMDataLibraryIcons/Information.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Information", Information);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
