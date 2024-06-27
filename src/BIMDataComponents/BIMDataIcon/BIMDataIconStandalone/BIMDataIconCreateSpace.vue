<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CreateSpace />
  </Icon>
</template>

<script>
import CreateSpace from "../BIMDataLibraryIcons/CreateSpace.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("CreateSpace", CreateSpace);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
