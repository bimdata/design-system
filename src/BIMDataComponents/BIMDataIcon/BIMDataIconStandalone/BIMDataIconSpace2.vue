<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Space2 />
  </Icon>
</template>

<script>
import Space2 from "../BIMDataLibraryIcons/Space2.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Space2", Space2);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
