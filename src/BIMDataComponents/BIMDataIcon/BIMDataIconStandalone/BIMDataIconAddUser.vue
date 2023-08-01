<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <AddUser />
  </Icon>
</template>

<script>
import AddUser from "../BIMDataLibraryIcons/AddUser.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("AddUser", AddUser);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
