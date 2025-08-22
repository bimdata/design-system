<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Statut />
  </Icon>
</template>

<script>
import Statut from "../BIMDataLibraryIcons/Statut.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Statut", Statut);
</script>

<style scoped src="../BIMDataIcon.css"></style>
