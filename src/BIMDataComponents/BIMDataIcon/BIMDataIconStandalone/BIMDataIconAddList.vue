<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <AddList />
  </Icon>
</template>

<script>
import AddList from "../BIMDataLibraryIcons/AddList.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("AddList", AddList);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
