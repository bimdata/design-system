<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Back />
  </Icon>
</template>

<script>
import Back from "../BIMDataLibraryIcons/Back.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Back", Back);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
