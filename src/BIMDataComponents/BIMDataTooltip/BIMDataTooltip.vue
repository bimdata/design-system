<template>
  <div class="bimdata-tooltip">
    <div
      class="bimdata-tooltip__content"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <!-- slot "content" for retro-compatibility -->
      <slot name="content"></slot>
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
          ..._className,
        ]"
        :style="{ maxWidth }"
      >
        {{ _text }}
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
          "success",
          "warning",
          "high",
        ].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },

    // props for retro-compatibility
    message: {
      type: String,
    },
    className: {
      type: [String, Array],
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
      return !this.disabled && this._text && this.hover;
    },

    // computed for retro-compatibility
    _text() {
      return this.text || this.message;
    },
    _className() {
      // convert it to an array if it's a string
      return [this.className].flat();
    },
  },
};
</script>

<style lang="scss" scoped src="./_BIMDataTooltip.scss"></style>
