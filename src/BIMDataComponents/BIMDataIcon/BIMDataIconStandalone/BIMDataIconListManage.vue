<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ListManage />
  </Icon>
</template>

<script>
import ListManage from "../BIMDataLibraryIcons/ListManage.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("ListManage", ListManage);
</script>

<style scoped src="../BIMDataIcon.css"></style>
