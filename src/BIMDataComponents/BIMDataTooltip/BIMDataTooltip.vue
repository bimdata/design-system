<template>
  <div class="bimdata-tooltip" ref="tooltip">
    <span><slot name="content"></slot></span>
    <span
      class="bimdata-tooltip__text"
      :class="className"
      :style="getWidth()"
      >{{ message }}</span
    >
  </div>
</template>

<script>
export default {
  name: "BaseTooltip",
  props: {
    message: {
      type: String,
      default: null,
    },
    className: {
      type: String,
      validator() {
        return "bimdata-tooltip__left" || "bimdata-tooltip__right" || "bimdata-tooltip__up";
        }
    }
  },
  data() {
    return {
      width: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.width = this.$refs.tooltip.clientWidth;
    });
  },
  methods: {
    getWidth(){
      if(this.className === "bimdata-tooltip--left"){
        return { 'right': this.width + 'px' };
      }
      if(this.className === "bimdata-tooltip--right"){
        return { 'left': this.width + 'px' };
      }
    }
  },
};
</script>

<style lang="scss">
// import BIMDATA VARIABLES
@import "../../assets/scss/_BIMDataVariables.scss";

// import BIMDATA MIXINS
@import "../../assets/scss/mixins/_font-size.scss";
@import "../../assets/scss/mixins/_pseudo.scss";

// import BIMDATA STYLE COMPONENT
@import "./_keyframes.scss";
@import "./_BIMDataTooltip.scss";
</style>
