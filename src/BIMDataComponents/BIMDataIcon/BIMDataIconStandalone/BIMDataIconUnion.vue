<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Union />
  </Icon>
</template>

<script>
import Union from "../BIMDataLibraryIcons/Union.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Union", Union);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
