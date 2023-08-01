<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Cloud />
  </Icon>
</template>

<script>
import Cloud from "../BIMDataLibraryIcons/Cloud.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Cloud", Cloud);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
