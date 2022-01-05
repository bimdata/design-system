<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    width="100%"
    :fill="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <component :is="`bimdata-icon-${name}`" />
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

function formatIconComponentsNames(icons = {}) {
  return Object.entries(icons).reduce(
    (obj, [key, value]) => ({ ...obj, [`bimdata-icon-${key}`]: value }),
    {}
  );
}

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
      };
      if (this.rotation > 0) {
        style.transform = `rotate(${this.rotate}deg)`;
      }
      return style;
    },
  },
  methods: {
    getPixelSize() {
      return this.customSize ? this.customSize : sizeToPixel[this.size];
    },
  },
};
</script>

<style
  lang="scss"
  scoped
  src="../../assets/scss/_BIMDataVariables.scss"
></style>

<style lang="scss" src="./_BIMDataIcon.scss"></style>
