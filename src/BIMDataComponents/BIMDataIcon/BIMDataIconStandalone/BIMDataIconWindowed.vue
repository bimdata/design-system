<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Windowed />
  </Icon>
</template>

<script>
import Windowed from "../BIMDataLibraryIcons/Windowed.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Windowed", Windowed);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
