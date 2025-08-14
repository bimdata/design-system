<template>
  <component
    :is="`BIMDataIcon${capitalized(name)}`"
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  />
</template>

<script>
import iconsColors from "../../assets/iconsColors.js";

const sizeToPixel = {
  xxxs: 10,
  xxs: 13,
  xs: 16,
  s: 18,
  m: 22,
  l: 28,
  xl: 36,
  xxl: 45,
  xxxl: 60,
};

export default {
  name: "BIMDataIcon",
  inject: {
    darkThemeRef: {
      from: "BIMDATA_DESIGN_SYSTEM_DARK_THEME",
      default: () => ({ value: false }),
    },
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "default",
      validator: color => iconsColors.includes(color),
    },
    fillColor: {
      type: String,
      default: "currentColor",
    },
    fill: {
      type: Boolean,
      default: false,
    },
    stroke: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "s",
      validator(value) {
        return Object.keys(sizeToPixel).includes(value);
      },
    },
    customSize: {
      type: [Number, String],
      default: null,
    },
    rotate: {
      type: Number,
      default: 0,
    },
    margin: {
      type: String,
      default: "0px",
    },
  },
  computed: {
    classes() {
      return {
        "icon-fill": this.fill,
        "icon-stroke": this.stroke,
        [`icon-fill--${this.color}`]: this.fill && this.color,
        [`icon-stroke--${this.color}`]: this.stroke && this.color,
        "dark": this.isDark
      };
    },
    style() {
      const pixelSize = this.getPixelSize(this.size);
      const style = {
        width: `${pixelSize}px`,
        minWidth: `${pixelSize}px`,
        height: `${pixelSize}px`,
        minHeight: `${pixelSize}px`,
        margin: `${this.margin}`,
        transform: `rotate(${this.rotate}deg)`,
      };
      return style;
    },
    isDark() {
      return this.darkThemeRef;
    },
  },
  methods: {
    getPixelSize() {
      return this.customSize ? this.customSize : sizeToPixel[this.size];
    },
    capitalized(name) {
      const capitalizedFirst = name[0].toUpperCase();
      const rest = name.slice(1);

      return capitalizedFirst + rest;
    },
  },
};
</script>

<style scoped src="./BIMDataIcon.css"></style>
