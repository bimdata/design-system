<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CreateComment />
  </Icon>
</template>

<script>
import CreateComment from "../BIMDataLibraryIcons/CreateComment.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("CreateComment", CreateComment);
</script>

<style scoped src="../BIMDataIcon.css"></style>
