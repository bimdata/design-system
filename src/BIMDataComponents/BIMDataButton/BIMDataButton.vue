<template>
  <button
    class="bimdata-btn"
    :class="classes"
    :style="style"
    @click="$emit('click', $event)"
    :color="color"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<script>
import colors from "../../assets/colors.js";

export default {
  name: "BIMDataButton",
  props: {
    width: {
      type: String,
      default: "32px",
    },
    height: {
      type: String,
      default: "32px",
    },
    fill: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    ripple: {
      type: Boolean,
      default: false,
    },
    radius: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "default",
      validator: color => colors.includes(color),
    },
  },
  emits: ["click"],
  computed: {
    classes() {
      return {
        "bimdata-btn__icon": this.icon,
        "bimdata-btn__fill": this.fill,
        "bimdata-btn__outline": this.outline,
        "bimdata-btn__ghost": this.ghost,
        "bimdata-btn__ripple": this.ripple,
        "bimdata-btn__radius": this.radius,
        "bimdata-btn__square": this.square,
        "bimdata-btn__rounded": this.rounded,
        [`bimdata-btn__fill--${this.color}`]: this.fill && this.color,
        [`bimdata-btn__outline--${this.color}`]: this.outline && this.color,
        [`bimdata-btn__ghost--${this.color}`]: this.ghost && this.color,
        [`bimdata-btn__ripple--${this.color}`]: this.ripple && this.color,
      };
    },
    style() {
      return {
        "min-width": `${this.width}`,
        "min-height": `${this.height}`,
      };
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataButton.scss"></style>
