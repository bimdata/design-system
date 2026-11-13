<template>
  <component
    :is="iconComponent"
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  />
</template>

<script>
import iconsColors from "../../assets/iconsColors.js";
import darkThemeMixin from "../mixins/darkTheme.js";
import * as standaloneIcons from "./BIMDataIconStandalone/index.js";

const DEFAULT_ICON_NAME = "question";

// Case-insensitive index, e.g. "model3d" -> BIMDataIconModel3D
const iconsByLowerName = Object.fromEntries(
  Object.entries(standaloneIcons).map(([componentName, component]) => [
    componentName.toLowerCase(),
    component,
  ])
);

/**
 * Resolve an icon by name:
 *  1. among the design-system icons (case-insensitive, e.g. "model3d"),
 *  2. among the icons registered globally by the app, e.g.
 *     app.component("BIMDataIconCustom", ...) -> name="custom".
 */
function resolveIcon(name, appComponents) {
  if (typeof name !== "string") return undefined;
  const trimmed = name.trim();
  if (!trimmed) return undefined;

  const icon = iconsByLowerName[`bimdataicon${trimmed.toLowerCase()}`];
  if (icon) return icon;

  const componentName = `BIMDataIcon${trimmed[0].toUpperCase()}${trimmed.slice(1)}`;
  // `hasOwn` (rather than a plain read) so the plugin's icon fallback Proxy
  // does not answer for unknown names: the warning is emitted below instead.
  if (appComponents && Object.prototype.hasOwnProperty.call(appComponents, componentName)) {
    return appComponents[componentName];
  }
  return undefined;
}

const defaultIcon = resolveIcon(DEFAULT_ICON_NAME);

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
  mixins: [darkThemeMixin],
  props: {
    name: {
      type: String,
      default: DEFAULT_ICON_NAME,
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
    iconComponent() {
      const icon = resolveIcon(this.name, this.$.appContext.components);
      if (icon) return icon;

      console.warn(
        `[BIMDataIcon] Unknown icon name "${this.name}", falling back to "${DEFAULT_ICON_NAME}".`
      );
      return defaultIcon;
    },
    classes() {
      return {
        "icon-fill": this.fill,
        "icon-stroke": this.stroke,
        [`icon-fill--${this.color}`]: this.fill && this.color,
        [`icon-stroke--${this.color}`]: this.stroke && this.color,
        dark: this.isDark,
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
  },
  methods: {
    getPixelSize() {
      return this.customSize ? this.customSize : sizeToPixel[this.size];
    },
  },
};
</script>

<style scoped src="./BIMDataIcon.css"></style>
