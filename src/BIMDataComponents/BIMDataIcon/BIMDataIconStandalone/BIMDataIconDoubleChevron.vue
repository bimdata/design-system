<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <DoubleChevron />
  </Icon>
</template>

<script>
import DoubleChevron from "../BIMDataLibraryIcons/DoubleChevron.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("DoubleChevron", DoubleChevron);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
