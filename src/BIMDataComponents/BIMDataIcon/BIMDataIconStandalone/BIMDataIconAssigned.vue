<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Assigned />
  </Icon>
</template>

<script>
import Assigned from "../BIMDataLibraryIcons/Assigned.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Assigned", Assigned);
</script>

<style scoped src="../BIMDataIcon.css"></style>
