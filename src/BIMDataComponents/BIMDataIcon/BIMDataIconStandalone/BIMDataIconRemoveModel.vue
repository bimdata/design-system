<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <RemoveModel />
  </Icon>
</template>

<script>
import RemoveModel from "../BIMDataLibraryIcons/RemoveModel.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("RemoveModel", RemoveModel);
</script>

<style scoped src="../BIMDataIcon.css"></style>
