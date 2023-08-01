<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Pathway />
  </Icon>
</template>

<script>
import Pathway from "../BIMDataLibraryIcons/Pathway.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Pathway", Pathway);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
