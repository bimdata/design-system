<template>
  <svg
    fill="currentColor"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :width="width"
    :height="height"
    :style="style"
  >
    <component :is="`bimdata-${name}`" />
  </svg>
</template>

<script>
import illustrations from "./BIMDataLibraryIllustrations/index.js";

export default {
  name: "BIMDataIcon",
  components: {
    ...formatIconComponentsNames(illustrations)
  },
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.keys(illustrations).includes(value);
      }
    },
    x: {
      type: [Number, String],
      default: 90,
    },
    y: {
      type: [Number, String],
      default: 90,
    },
    customWidth: {
      type: [Number, String],
      default: null,
    },
    customHeight: {
      type: [Number, String],
      default: null,
    }
  },
  computed: {
    width() {
      return `${this.x}px`;
    },
    height() {
      return `${this.y}px`;

    },
    viewBox() {
      return `0 0 ${this.x} ${this.y}`;
    },
    style() {
      return {
        width: `${this.customWidth}px`,
        height: `${this.customHeight}px`
      };
    },
  },
};

function formatIconComponentsNames(illustrations = {}) {
  const illustrationsCopy = Object.assign({}, illustrations);
  Object.entries(illustrations).forEach(([key, value]) => {
    illustrationsCopy[`bimdata-${key}`] = value;
    delete illustrationsCopy[key];
  });
  return illustrationsCopy;
}
</script>
