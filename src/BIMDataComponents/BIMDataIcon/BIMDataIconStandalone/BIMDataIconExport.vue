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

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
