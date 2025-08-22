<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Index />
  </Icon>
</template>

<script>
import Index from "../BIMDataLibraryIcons/Index.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Index", Index);
</script>

<style scoped src="../BIMDataIcon.css"></style>
