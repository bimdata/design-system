<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Chevron />
  </Icon>
</template>

<script>
import Chevron from "../BIMDataLibraryIcons/Chevron.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Chevron", Chevron);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
