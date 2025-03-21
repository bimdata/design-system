<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Attach />
  </Icon>
</template>

<script>
import Attach from "../BIMDataLibraryIcons/Attach.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Attach", Attach);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
