<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Explosion />
  </Icon>
</template>

<script>
import Explosion from "../BIMDataLibraryIcons/Explosion.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Explosion", Explosion);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
