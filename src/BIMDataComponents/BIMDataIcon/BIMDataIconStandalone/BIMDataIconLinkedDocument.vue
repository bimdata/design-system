<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <LinkedDocument />
  </Icon>
</template>

<script>
import LinkedDocument from "../BIMDataLibraryIcons/LinkedDocument.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("LinkedDocument", LinkedDocument);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
