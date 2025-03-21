<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Zone />
  </Icon>
</template>

<script>
import Zone from "../BIMDataLibraryIcons/Zone.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Zone", Zone);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
