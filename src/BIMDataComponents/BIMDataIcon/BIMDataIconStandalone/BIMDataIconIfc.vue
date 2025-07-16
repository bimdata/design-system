<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Ifc />
  </Icon>
</template>

<script>
import Ifc from "../BIMDataLibraryIcons/Ifc.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Ifc", Ifc);
</script>

<style scoped src="../BIMDataIcon.css"></style>
