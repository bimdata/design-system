<template>
  <div class="bimdata-spinner">
    <div class="bimdata-spinner--square" :style="getStyle()"></div>
  </div>
</template>

<script>
export default {
  props: ["size", "border"],
  methods: {
    getStyle() {
      if (this.size) {
        return {
          width: this.size,
          height: this.size,
          "border-width": this.border ? this.border : null,
        };
      }
    },
  },
};
</script>

<style lang="scss">
// import BIMDATA VARIABLES
@import "../../assets/scss/_BIMDataVariables.scss";

// import BIMDATA COMPONENT KEYFRAMES
@import "./_keyframes.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataSpinner.scss";
</style>
