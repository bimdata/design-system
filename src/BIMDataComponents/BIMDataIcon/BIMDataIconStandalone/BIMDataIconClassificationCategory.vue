<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ClassificationCategory />
  </Icon>
</template>

<script>
import ClassificationCategory from "../BIMDataLibraryIcons/ClassificationCategory.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("ClassificationCategory", ClassificationCategory);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
