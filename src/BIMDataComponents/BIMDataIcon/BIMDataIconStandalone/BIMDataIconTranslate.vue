<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Translate />
  </Icon>
</template>

<script>
import Translate from "../BIMDataLibraryIcons/Translate.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Translate", Translate);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
