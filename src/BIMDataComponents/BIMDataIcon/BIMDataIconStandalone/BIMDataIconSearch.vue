<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Search />
  </Icon>
</template>

<script>
import Search from "../BIMDataLibraryIcons/Search.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Search", Search);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
