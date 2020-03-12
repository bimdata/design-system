<template>
  <BIMDataIcon icon-name="search" width="18" height="18" x="23" y="23" class="bimdata-fill-primary">
    <BIMDataBurgerMenuIcon />
  </BIMDataIcon>
</template>

<script>
/* import BIMData ICONS */
import BIMDataIcon from "../BIMDataIcons/BIMDataIcon.vue";
import BIMDataBurgerMenuIcon from "../BIMDataIcons/BIMDataLibraryIcons/BIMDataBurgerMenuIcon";

export default {
  components: {
    BIMDataIcon,
    BIMDataBurgerMenuIcon
  }
}
</script>