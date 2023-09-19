<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Storey />
  </Icon>
</template>

<script>
import Storey from "../BIMDataLibraryIcons/Storey.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Storey", Storey);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
