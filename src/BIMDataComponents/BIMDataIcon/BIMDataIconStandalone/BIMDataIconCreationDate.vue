<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CreationDate />
  </Icon>
</template>

<script>
import CreationDate from "../BIMDataLibraryIcons/CreationDate.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("CreationDate", CreationDate);
</script>

<style scoped src="../BIMDataIcon.css"></style>
