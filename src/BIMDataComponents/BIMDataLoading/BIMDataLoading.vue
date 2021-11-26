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

<style lang="scss" src="./_BIMDataLoading.scss"></style>
