<template>
  <component
    :is="previewComponent"
    class="bimdata-model-preview"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor,
    }"
    v-bind="$props"
  />
</template>

<script>
import Preview2D from "./Preview2D.vue";
import Preview3D from "./Preview3D.vue";

export default {
  components: {
    Preview2D,
    Preview3D,
  },
  props: {
    type: {
      type: String,
      default: "3d",
      validator: v => ["2d", "3d"].includes(v),
    },
    width: {
      type: Number,
      default: 240,
    },
    height: {
      type: Number,
      default: 240,
    },
    previewUrl: {
      type: String,
    },
    defaultUrl: {
      type: String,
    },
    backgroundColor: {
      type: String,
      default: "var(--color-silver-light)",
    },
    zoomFactor: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    previewComponent() {
      return this.type === "3d" ? "Preview3D" : "Preview2D";
    },
  },
};
</script>
