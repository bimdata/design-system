<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Calendar />
  </Icon>
</template>

<script>
import Calendar from "../BIMDataLibraryIcons/Calendar.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Calendar", Calendar);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
