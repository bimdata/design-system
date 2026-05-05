<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <MarkEmail />
  </Icon>
</template>

<script>
import MarkEmail from "../BIMDataLibraryIcons/MarkEmail.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("MarkEmail", MarkEmail);
</script>

<style scoped src="../_BIMDataIcon.scss"></style>
