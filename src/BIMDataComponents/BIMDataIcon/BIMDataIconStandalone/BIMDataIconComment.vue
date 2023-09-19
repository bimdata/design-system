<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Comment />
  </Icon>
</template>

<script>
import Comment from "../BIMDataLibraryIcons/Comment.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Comment", Comment);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
