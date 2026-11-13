<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Question />
  </Icon>
</template>

<script>
import Question from "../BIMDataLibraryIcons/Question.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Question", Question);
</script>

<style scoped src="../BIMDataIcon.css"></style>
