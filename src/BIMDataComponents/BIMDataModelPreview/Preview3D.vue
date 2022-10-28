<template>
  <div class="preview-3d" @mousemove="onMouseMove">
    <div
      class="viewport"
      :style="{ width: `${viewportWidth}px`, height: `${height}px` }"
    >
      <img
        loading="lazy"
        :src="previewUrl || defaultUrl"
        :style="{ transform: `translateX(-${translation}px)` }"
      />
    </div>
  </div>
</template>

<script>
/**
 * Note:
 * 3D model preview images should be composed of *15 SQUARE SLICES* to be displayed properly.
 */
const NB_SLICES = 15;

export default {
  props: {
    width: {
      type: Number,
    },
    height: {
      type: Number,
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
  computed: {
    viewportWidth() {
      return Math.min(this.width, this.height);
    },
  },
  methods: {
    onMouseMove({ offsetX }) {
      let offset = Math.ceil(NB_SLICES * (1 - offsetX / this.width));
      offset = Math.abs(offset);
      offset = Math.min(offset, NB_SLICES);

      this.translation = (offset - 1) * this.viewportWidth;
    },
  },
};
</script>

<style scoped lang="scss">
.preview-3d {
  user-select: none;

  .viewport {
    margin: auto;
    overflow: hidden;
    pointer-events: none;

    img {
      width: auto;
      height: 100%;
    }
  }
}
</style>
