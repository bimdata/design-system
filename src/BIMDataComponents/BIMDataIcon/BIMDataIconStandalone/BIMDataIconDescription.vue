<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Description />
  </Icon>
</template>

<script>
import Description from "../BIMDataLibraryIcons/Description.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Description", Description);
</script>

<style scoped src="../BIMDataIcon.css"></style>
