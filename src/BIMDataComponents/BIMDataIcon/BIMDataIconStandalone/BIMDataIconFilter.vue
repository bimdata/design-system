<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Filter />
  </Icon>
</template>

<script>
import Filter from "../BIMDataLibraryIcons/Filter.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Filter", Filter);
</script>

<style scoped src="../BIMDataIcon.css"></style>
