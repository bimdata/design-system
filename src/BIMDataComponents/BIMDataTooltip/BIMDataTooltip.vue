<template>
  <div class="bimdata-tooltip">
    <div
      class="bimdata-tooltip__content"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <slot></slot>
    </div>
    <Transition name="fade">
      <div
        v-show="isDisplayed"
        ref="tooltipText"
        class="bimdata-tooltip__tooltip"
        :class="[
          `bimdata-tooltip__tooltip--${position}`,
          `bimdata-tooltip__tooltip--${color}`,
        ]"
        :style="{ maxWidth }"
      >
        {{ text }}
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    maxWidth: {
      type: String,
      default: "240px",
    },
    position: {
      type: String,
      default: "bottom",
      validator: value => ["top", "right", "bottom", "left"].includes(value),
    },
    color: {
      type: String,
      default: "primary",
      validator: value =>
        [
          "white",
          "primary",
          "secondary",
          "granite-light",
          "silver-light",
        ].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      width: null,
      height: null,
      parentHeight: null,
      hover: false,
    };
  },
  computed: {
    isDisplayed() {
      return !this.disabled && this.text && this.hover;
    },
  },
};
</script>

<style lang="scss" scoped src="./_BIMDataTooltip.scss"></style>
