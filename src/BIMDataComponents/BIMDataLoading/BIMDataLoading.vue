<template>
  <div class="bimdata-loading">
    <span class="bimdata-loading--square"></span>
    <BIMDataText color="color-white" margin="12px 0 0"
      ><span>loading...</span></BIMDataText
    >
  </div>
</template>

<script>
import BIMDataText from "../BIMDataText/BIMDataText.vue";
export default {
  components: {
    BIMDataText,
  },
};
</script>

<style lang="scss">
// import BIMDATA VARIABLES
@import "../../assets/scss/_BIMDataVariables.scss";

// import BIMDATA COMPONENT KEYFRAMES
@import "./_keyframes.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataLoading.scss";
</style>
