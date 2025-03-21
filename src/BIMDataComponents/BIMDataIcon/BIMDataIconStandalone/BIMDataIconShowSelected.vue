<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ShowSelected />
  </Icon>
</template>

<script>
import ShowSelected from "../BIMDataLibraryIcons/ShowSelected.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("ShowSelected", ShowSelected);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
