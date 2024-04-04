<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Zone2 />
  </Icon>
</template>

<script>
import Zone2 from "../BIMDataLibraryIcons/Zone2.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Zone2", Zone2);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
