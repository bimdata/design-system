<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Isolate />
  </Icon>
</template>

<script>
import Isolate from "../BIMDataLibraryIcons/Isolate.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Isolate", Isolate);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
