<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <DateAscending />
  </Icon>
</template>

<script>
import DateAscending from "../BIMDataLibraryIcons/DateAscending.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("DateAscending", DateAscending);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
