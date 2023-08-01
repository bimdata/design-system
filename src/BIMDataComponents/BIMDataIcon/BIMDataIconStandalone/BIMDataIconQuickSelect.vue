<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <QuickSelect />
  </Icon>
</template>

<script>
import QuickSelect from "../BIMDataLibraryIcons/QuickSelect.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("QuickSelect", QuickSelect);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
