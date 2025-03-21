<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <App />
  </Icon>
</template>

<script>
import App from "../BIMDataLibraryIcons/App.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("App", App);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
