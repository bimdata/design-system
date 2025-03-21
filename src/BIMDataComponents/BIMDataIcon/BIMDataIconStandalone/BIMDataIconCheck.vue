<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Check />
  </Icon>
</template>

<script>
import Check from "../BIMDataLibraryIcons/Check.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Check", Check);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
