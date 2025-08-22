<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <DueDate />
  </Icon>
</template>

<script>
import DueDate from "../BIMDataLibraryIcons/DueDate.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("DueDate", DueDate);
</script>

<style scoped src="../BIMDataIcon.css"></style>
