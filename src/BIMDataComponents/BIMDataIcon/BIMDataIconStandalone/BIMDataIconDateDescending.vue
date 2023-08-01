<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <DateDescending />
  </Icon>
</template>

<script>
import DateDescending from "../BIMDataLibraryIcons/DateDescending.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("DateDescending", DateDescending);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
