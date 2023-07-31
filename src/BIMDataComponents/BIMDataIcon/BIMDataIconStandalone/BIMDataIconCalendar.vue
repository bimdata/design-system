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

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
