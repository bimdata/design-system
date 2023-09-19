<template>
  <div class="bimdata-loading">
    <span class="bimdata-loading--square"></span>
    <BIMDataText color="color-white" margin="12px 0 0"
      ><p>{{ message }}</p>
      <p>{{ subMessage }}</p></BIMDataText
    >
  </div>
</template>

<script>
import BIMDataText from "../BIMDataText/BIMDataText.vue";
export default {
  components: {
    BIMDataText,
  },
  props: {
    message: {
      type: String,
      default: "loading...",
    },
    subMessage: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataLoading.scss"></style>
