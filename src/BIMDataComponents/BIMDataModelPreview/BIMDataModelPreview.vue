<template>
  <component
    class="bimdata-model-preview"
    :is="previewComponent"
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
    size: {
      type: String,
      default: "205px",
    },
    previewUrl: {
      type: String,
    },
    defaultUrl: {
      type: String,
    },
  },
  computed: {
    previewComponent() {
      return this.type === "3d" ? "Preview3D" : "Preview2D";
    },
  },
};
</script>
