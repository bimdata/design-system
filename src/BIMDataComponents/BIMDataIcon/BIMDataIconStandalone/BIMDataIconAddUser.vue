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

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
