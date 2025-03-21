<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <BurgerMenu />
  </Icon>
</template>

<script>
import BurgerMenu from "../BIMDataLibraryIcons/BurgerMenu.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("BurgerMenu", BurgerMenu);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
