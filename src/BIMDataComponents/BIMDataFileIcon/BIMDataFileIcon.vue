<template>
  <img
    class="file-icon"
    :width="size"
    :height="(+size * 4) / 3"
    :src="imgSrc"
  />
</template>

<script>
import icons from "./file-icons/index.js";

export default {
  props: {
    fileName: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 35,
    },
  },
  computed: {
    imgSrc() {
      const ext = this.fileName?.match(/\.([0-9a-zA-Z]+$)/)?.[1];
      return icons[ext?.toLowerCase()] ?? icons["unknown"];
    },
  },
};
</script>
