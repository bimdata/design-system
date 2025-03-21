<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Synchro2D />
  </Icon>
</template>

<script>
import Synchro2D from "../BIMDataLibraryIcons/Synchro2D.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Synchro2D", Synchro2D);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
