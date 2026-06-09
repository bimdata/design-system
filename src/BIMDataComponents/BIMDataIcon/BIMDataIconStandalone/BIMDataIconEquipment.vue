<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Equipment />
  </Icon>
</template>

<script>
import Equipment from "../BIMDataLibraryIcons/Equipment.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Equipment", Equipment);
</script>

<style scoped src="../BIMDataIcon.css"></style>
