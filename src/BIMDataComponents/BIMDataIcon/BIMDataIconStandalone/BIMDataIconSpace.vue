<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Space />
  </Icon>
</template>

<script>
import Space from "../BIMDataLibraryIcons/Space.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Space", Space);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
