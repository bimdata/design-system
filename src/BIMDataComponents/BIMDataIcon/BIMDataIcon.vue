<template>
  <svg
    :fill="fillColor"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :style="style"
    :color="color"
    :class="classes"
  >
    <component :is="`bimdata-${name}`" />
  </svg>
</template>

<script>
import icons from "./BIMDataLibraryIcons/index.js";

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
  components: {
    ...formatIconComponentsNames(icons),
  },
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.keys(icons).includes(value);
      },
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
  },
  computed: {
    style() {
      const pixelSize = this.getPixelSize(this.size);
      if (this.rotate > 0) {
        return {
          width: `${pixelSize}px`,
          height: `${pixelSize}px`,
          transform: "rotate(" + this.rotate + "deg)",
        };
      } else {
        return {
          width: `${pixelSize}px`,
          height: `${pixelSize}px`,
        };
      }
    },
    classes() {
      return {
        "icon-fill": this.fill,
        "icon-stroke": this.stroke,
        [`icon-fill--${this.color}`]: this.fill && this.color,
        [`icon-stroke--${this.color}`]: this.stroke && this.color,
      };
    },
  },
  methods: {
    getPixelSize() {
      return this.customSize ? this.customSize : sizeToPixel[this.size];
    },
  },
};

function formatIconComponentsNames(icons = {}) {
  const iconsCopy = Object.assign({}, icons);
  Object.entries(icons).forEach(([key, value]) => {
    iconsCopy[`bimdata-${key}`] = value;
    delete iconsCopy[key];
  });
  return iconsCopy;
}
</script>

<style lang="scss">
// import BIMDATA VARIABLES
@import "../../assets/scss/_BIMDataVariables.scss";
@import "./_BIMDataIcon.scss";
</style>
