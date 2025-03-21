<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Api />
  </Icon>
</template>

<script>
import Api from "../BIMDataLibraryIcons/Api.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Api", Api);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
