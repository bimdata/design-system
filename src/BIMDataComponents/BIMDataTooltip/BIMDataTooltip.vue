<template>
  <div class="bimdata-tooltip">
    <div
      class="bimdata-tooltip__content"
      @mouseover="isTooltipHover = true"
      @mouseleave="isTooltipHover = false"
    >
      <slot name="content"></slot>
    </div>
    <span
      v-if="isDisplayed"
      ref="tooltipText"
      class="bimdata-tooltip__text"
      :class="className"
      :style="getPosition()"
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
      type: [String, Array],
      required: true,
    },
  },
  data() {
    return {
      width: null,
      height: null,
      parentHeight: null,
      isTooltipHover: false,
    };
  },
  computed: {
    isDisplayed() {
      return this.message && this.isTooltipHover;
    },
  },
  watch: {
    isDisplayed() {
      if (this.isDisplayed) {
        this.$nextTick(() =>
          this.$options.resizeObserver.observe(this.$refs.tooltipText)
        );
      } else {
        this.$options.resizeObserver.unobserve(this.$refs.tooltipText);
      }
    },
  },
  mounted() {
    this.$options.resizeObserver = new ResizeObserver(this.onResize);
  },
  unmounted() {
    // for Vue3 compatibility (destroyed => unmounted)
    this.onDestroy();
  },
  destroyed() {
    this.onDestroy();
  },
  methods: {
    onDestroy() {
      if (this.$options.resizeObserver) {
        this.$options.resizeObserver.disconnect();
      }
    },
    onResize(entries) {
      entries.forEach(entry => {
        this.width = entry.target.clientWidth;
        this.height = entry.target.clientHeight;
        this.parentHeight = entry.target.offsetParent.clientHeight;
      });
    },
    getPosition() {
      if (this.className) {
        if (this.className.includes("bimdata-tooltip--left")) {
          return {
            right: -this.width - 12 + "px",
            top: (this.parentHeight - this.height) / 2 + "px",
          };
        }
        if (this.className.includes("bimdata-tooltip--right")) {
          return {
            left: -this.width - 12 + "px",
            top: (this.parentHeight - this.height) / 2 + "px",
          };
        }
        if (this.className.includes("bimdata-tooltip--bottom")) {
          return { top: this.parentHeight + 12 + "px" };
        }
        if (this.className.includes("bimdata-tooltip--up")) {
          return { top: -this.height - 12 + "px" };
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_BIMDataVariables.scss";
@import "../../assets/scss/utilities/_text.scss";
</style>

<style lang="scss" src="./_BIMDataTooltip.scss"></style>
