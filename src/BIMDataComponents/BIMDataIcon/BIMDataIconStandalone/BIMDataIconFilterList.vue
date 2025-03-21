<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FilterList />
  </Icon>
</template>

<script>
import FilterList from "../BIMDataLibraryIcons/FilterList.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("FilterList", FilterList);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
