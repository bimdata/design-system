<template>
  <div
    class="preview-3d"
    ref="container"
    :style="{ width: size, height: size }"
    @mousemove="onMouseMove"
  >
    <div class="viewport" ref="viewport">
      <img
        loading="lazy"
        :src="previewUrl || defaultUrl"
        :style="{ transform: `translateX(-${translation}px)` }"
      />
    </div>
  </div>
</template>

<script>
const NB_SLICES = 15;

export default {
  props: {
    size: {
      type: String,
    },
    previewUrl: {
      type: String,
    },
    defaultUrl: {
      type: String,
    },
  },
  data() {
    return {
      translation: 0,
    };
  },
  methods: {
    onMouseMove({ offsetX }) {
      const container = this.$refs.container;
      const viewport = this.$refs.viewport;

      if (container && viewport) {
        const { width: containerWidth } = container.getBoundingClientRect();
        const { width: viewportWidth } = viewport.getBoundingClientRect();

        let offset = Math.ceil(NB_SLICES * (1 - offsetX / containerWidth));
        offset = Math.abs(offset);
        offset = Math.min(offset, NB_SLICES);

        this.translation = (offset - 1) * viewportWidth;
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./Preview3D.scss"></style>
