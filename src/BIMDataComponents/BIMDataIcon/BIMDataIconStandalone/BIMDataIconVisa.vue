<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Visa />
  </Icon>
</template>

<script>
import Visa from "../BIMDataLibraryIcons/Visa.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Visa", Visa);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
