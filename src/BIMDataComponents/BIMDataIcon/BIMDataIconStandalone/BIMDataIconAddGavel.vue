<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <AddGavel />
  </Icon>
</template>

<script>
import AddGavel from "../BIMDataLibraryIcons/AddGavel.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("AddGavel", AddGavel);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
