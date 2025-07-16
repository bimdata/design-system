<template>
  <button
    class="bimdata-btn"
    :class="buttonClasses"
    :style="buttonStyles"
    @click="$emit('click', $event)"
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
    weight: {
      type: String,
      default: "normal",
      validator: weight => ["light", "normal", "bold"].includes(weight),
    },
    size: {
      type: String,
      default: "15px",
    },
    padding: {
      type: String,
      default: "0 calc(var(--spacing-unit) / 2)",
    },
  },
  emits: ["click"],
  computed: {
    buttonClasses() {
      return {
        icon: this.icon,
        fill: this.fill,
        outline: this.outline,
        ghost: this.ghost,
        ripple: this.ripple,
        radius: this.radius,
        square: this.square,
        rounded: this.rounded,
        [this.color]: true,
      };
    },
    buttonStyles() {
      return {
        "min-width": `${this.width}`,
        "min-height": `${this.height}`,
        "font-size": `${this.size}`,
        padding: this.padding,
      };
    },
  },
};
</script>

<style scoped src="./BIMDataButton.css"></style>
