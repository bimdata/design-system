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
    name() {
      return (this.getFileExtension(this.fileName) || "unknown").toLowerCase();
    },
    imageUrl() {
      return icons[`icon_${this.name}`] || icons.icon_unknown;
    },
  },
  methods: {
    getFileExtension(fileName = "") {
      const match = fileName.match(/\.([0-9a-z]+$)/);
      const extension = match && match[1];
      if (extension && extension.toLowerCase() === "ifczip") {
        return "ifc";
      } else {
        return extension;
      }
    },
  },
};
</script>
