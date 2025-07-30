<template>
  <component :is="component" :style="style" :class="classes" class="bimdata-text">
    <slot></slot>
  </component>
</template>

<script>
export default {
  inject: {
    darkThemeRef: {
      from: "BIMDATA_DESIGN_SYSTEM_DARK_THEME",
      default: () => ({ value: false }),
    },
  },
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
          "color-primary-lighter",
          "color-secondary",
          "color-secondary-lighter",
          "color-tertiary",
          "color-tertiary-lighter",
          "color-quaternary",
          "color-quaternary-lighter",
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
      return `${this.color} ${this.isDark ? "dark" : ""}`;
    },
    style() {
      return {
        fontSize: `${this.calcFontSize}`,
        lineHeight: `${this.calcLineHeight}`,
        display: `${this.display}`,
        fontWeight: `${this.calcFontWeight}`,
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
    calcFontWeight() {
      if (this.fontWeight) {
        return this.fontWeight;
      } else {
        if (this.component === "h1") {
          return "700";
        } else if (this.component === "h2") {
          return "700";
        } else if (this.component === "h3") {
          return "500";
        } else if (this.component === "h4") {
          return "500";
        } else if (this.component === "h5") {
          return "500";
        } else {
          return "400";
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
    isDark() {
      return this.darkThemeRef;
    },
  },
};
</script>

<style scoped src="./BIMDataText.css"></style>