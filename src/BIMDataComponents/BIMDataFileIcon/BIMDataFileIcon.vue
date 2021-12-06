<template>
  <img
    class="file-icon"
    :width="size"
    :height="(+size * 4) / 3"
    :src="imageUrl"
  />
</template>

<script>
import icons from "./file-icons/index.js";

export default {
  props: {
    name: {
      type: String,
      default: "unknown",
    },
    size: {
      type: [String, Number],
      default: "35",
    },
  },
  computed: {
    imageUrl() {
      return icons[`icon_${this.name}`] || icons.icon_unknown;
    },
  },
};
</script>
