<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <NamingConvention />
  </Icon>
</template>

<script>
import NamingConvention from "../BIMDataLibraryIcons/NamingConvention.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("NamingConvention", NamingConvention);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
