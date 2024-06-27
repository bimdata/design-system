<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Gavel />
  </Icon>
</template>

<script>
import Gavel from "../BIMDataLibraryIcons/Gavel.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Gavel", Gavel);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
