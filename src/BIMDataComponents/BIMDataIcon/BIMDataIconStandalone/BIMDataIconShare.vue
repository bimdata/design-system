<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Share />
  </Icon>
</template>

<script>
import Share from "../BIMDataLibraryIcons/Share.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Share", Share);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
