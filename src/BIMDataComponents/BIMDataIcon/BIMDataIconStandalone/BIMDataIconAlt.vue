<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Alt />
  </Icon>
</template>

<script>
import Alt from "../BIMDataLibraryIcons/Alt.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Alt", Alt);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
