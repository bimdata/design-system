<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Plus />
  </Icon>
</template>

<script>
import Plus from "../BIMDataLibraryIcons/Plus.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Plus", Plus);
</script>

<style scoped src="../BIMDataIcon.css"></style>
