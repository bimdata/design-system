<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Priority />
  </Icon>
</template>

<script>
import Priority from "../BIMDataLibraryIcons/Priority.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Priority", Priority);
</script>

<style scoped src="../BIMDataIcon.css"></style>
