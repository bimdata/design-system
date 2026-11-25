<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Message />
  </Icon>
</template>

<script>
import Message from "../BIMDataLibraryIcons/Message.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Message", Message);
</script>

<style scoped src="../BIMDataIcon.css"></style>
