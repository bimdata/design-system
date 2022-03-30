<template>
  <div class="bimdata-loading">
    <span class="bimdata-loading--square"></span>
    <BIMDataText color="color-white" margin="12px 0 0"
      ><span>{{ message }}</span
      ><br /><span>{{ subMessage }}</span></BIMDataText
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

<style
  lang="scss"
  scoped
  src="../../assets/scss/_BIMDataVariables.scss"
></style>

<style lang="scss" src="./_BIMDataLoading.scss"></style>
