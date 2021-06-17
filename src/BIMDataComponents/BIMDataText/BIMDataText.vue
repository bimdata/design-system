<template>
  <div :is="component" :style="style" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    component: {
      type: String,
      default: "p",
    },
    display: {
      type: String,
      default: "inline-block",
    },
    fontSize: {
      type: String,
    },
    fontWeight: {
      type: String,
      default: "primary-font",
    },
    lineHeight: {
      type: String,
    },
    margin: {
      type: String,
      default: "0px",
    },
    padding: {
      type: String,
      default: "0px",
    },
    color: {
      type: String,
      default: "color-tertiary-dark",
      validator: color =>
        [
          "color-primary",
          "color-secondary",
          "color-tertiary",
          "color-tertiary-lightest",
          "color-tertiary-dark",
          "color-tertiary-darkest",
          "color-white",
          "color-black",
          "color-high",
          "color-warning",
          "color-success",
          "color-neutral",
          "color-disabled",
        ].includes(color),
    },
  },
  computed: {
    classes() {
      return {
        [`${this.color}`]: this.color,
        [`${this.fontWeight}`]: this.fontWeight,
      };
    },
    style() {
      return {
        "font-size": `${this.calcFontSize}`,
        "line-height": `${this.calcLineHeight}`,
        display: `${this.display}`,
        margin: `${this.margin}`,
        padding: `${this.padding}`,
      };
    },
    calcFontSize() {
      if (this.fontSize) {
        return this.fontSize;
      } else {
        if (this.component === "h1") {
          return "30px";
        } else if (this.component === "h2") {
          return "26px";
        } else if (this.component === "h3") {
          return "24px";
        } else if (this.component === "h4") {
          return "20px";
        } else if (this.component === "h5") {
          return "16px";
        } else {
          return "14px";
        }
      }
    },
    calcLineHeight() {
      if (this.lineHeight) {
        return this.lineHeight;
      } else {
        if (this.component === "h1") {
          return "36px";
        } if (this.component === "h2") {
          return "30px";
        } if (this.component === "h3") {
          return "26px";
        } if (this.component === "h4") {
          return "24px";
        } if (this.component === "h5") {
          return "20px";
        } else {
          return "18px";
        }
      }
    },
  },
};
</script>
