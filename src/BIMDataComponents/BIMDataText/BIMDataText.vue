<template>
  <component :is="component" :style="style" :class="classes">
    <slot></slot>
  </component>
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
      default: "400",
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
      default: "color-granite-light",
      validator: color =>
        [
          "color-primary",
          "color-secondary",
          "color-silver",
          "color-silver-light",
          "color-silver-dark",
          "color-granite-light",
          "color-granite",
          "color-white",
          "color-black",
          "color-high",
          "color-warning",
          "color-success",
        ].includes(color),
    },
  },
  computed: {
    classes() {
      return `${this.color}`;
    },
    style() {
      return {
        fontSize: `${this.calcFontSize}`,
        lineHeight: `${this.calcLineHeight}`,
        display: `${this.display}`,
        fontWeight: `${this.fontWeight}`,
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
        }
        if (this.component === "h2") {
          return "30px";
        }
        if (this.component === "h3") {
          return "26px";
        }
        if (this.component === "h4") {
          return "24px";
        }
        if (this.component === "h5") {
          return "20px";
        } else {
          return "18px";
        }
      }
    },
  },
};
</script>
