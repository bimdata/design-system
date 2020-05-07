<template>
  <div class="bimdata-tooltip">
    <div class="bimdata-tooltip__content" @mouseover="isTooltipHover = true" @mouseleave="isTooltipHover = false">
      <slot name="content"></slot>
    </div>
    <span
      v-if="isTooltipHover"
      ref="tooltip"
      class="bimdata-tooltip__text"
      :class="className"
      :style="position"
    >{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseTooltip",
  props: {
    message: {
      type: String,
      default: null,
      required: true
    },
    className: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      width: null,
      height: null,
      parentHeight: null,
      isTooltipHover: false
    };
  },
  mounted() {
    this.$options.resizeObserver = new ResizeObserver(this.onResize);
  },
  watch: {
    isTooltipHover() {
      if (this.isTooltipHover) {
        this.$nextTick(() =>
          this.$options.resizeObserver.observe(this.$refs.tooltip)
        );
      } else {
        this.$options.resizeObserver.unobserve(this.$refs.tooltip);
      }
    }
  },
  destroyed() {
    if (this.$options.resizeObserver) {
      this.$options.resizeObserver.disconnect();
    }
  },
  methods: {
    onResize(entries) {
      entries.forEach(entry => {
        this.width = entry.target.clientWidth;
        this.height = entry.target.clientHeight;
        this.parentHeight = entry.target.offsetParent.clientHeight;
      });
    }
  },
  computed: {
    position() {
      if (this.className) {
        if (this.className.includes("bimdata-tooltip--left")) {
          return {
            left: -this.width - 6 + "px",
            top: (this.parentHeight - this.height) / 2 + "px"
          };
        }
        if (this.className.includes("bimdata-tooltip--right")) {
          return {
            right: -this.width - 6 + "px",
            top: (this.parentHeight - this.height) / 2 + "px"
          };
        }
        if (this.className.includes("bimdata-tooltip--bottom")) {
          return { top: this.parentHeight + 6 + "px" };
        }
        if (this.className.includes("bimdata-tooltip--up")) {
          return { top: -this.height - 6 + "px" };
        }
      }
    }
  }
};
</script>

<style lang="scss">
  // import BIMDATA VARIABLES
  @import "@/assets/scss/_BIMDataVariables.scss";

  // import BIMDATA UTILITIES
  @import "@/assets/scss/utilities/_text.scss";

  // import BIMDATA MIXINS
  @import "@/assets/scss/mixins/_pseudo.scss";

  // import BIMDATA STYLE COMPONENT
  @import "./_keyframes.scss";
  @import "./_BIMDataTooltip.scss";
</style>
