<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Marketplace />
  </Icon>
</template>

<script>
import Marketplace from "../BIMDataLibraryIcons/Marketplace.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Marketplace", Marketplace);
</script>

<style scoped src="../BIMDataIcon.css"></style>
