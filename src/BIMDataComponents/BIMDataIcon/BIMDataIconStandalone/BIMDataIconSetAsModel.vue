<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <SetAsModel />
  </Icon>
</template>

<script>
import SetAsModel from "../BIMDataLibraryIcons/SetAsModel.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("SetAsModel", SetAsModel);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
