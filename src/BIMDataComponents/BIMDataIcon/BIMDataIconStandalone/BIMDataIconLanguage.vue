<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Language />
  </Icon>
</template>

<script>
import Language from "../BIMDataLibraryIcons/Language.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Language", Language);
</script>

<style scoped src="../BIMDataIcon.css"></style>
