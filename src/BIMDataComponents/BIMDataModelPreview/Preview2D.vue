<template>
  <div
    class="preview-2d"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    @mousemove="onMouseMove"
  >
    <img loading="lazy" :src="imgUrl" />

    <div
      v-show="hover"
      class="zoom"
      :style="{
        transform: zoomTransform,
      }"
    >
      <div
        class="zoomImage"
        :style="{
          width: `${width}px`,
          height: `${height}px`,
          transform: zoomImageTransform,
        }"
      >
        <img loading="lazy" :src="imgUrl" />
      </div>
    </div>
  </div>
</template>

<script>
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
    zoomFactor: {
      type: Number,
    },
  },
  data() {
    return {
      hover: false,
      zoomX: 0,
      zoomY: 0,
    };
  },
  computed: {
    imgUrl() {
      return this.previewUrl || this.defaultUrl;
    },
    zoomTransform() {
      return `
        translate(${this.zoomX}px, ${this.zoomY}px)
      `;
    },
    zoomImageTransform() {
      return `
        scale(${this.zoomFactor})
        translate(-${this.zoomX}px, -${this.zoomY}px)
      `;
    },
  },
  methods: {
    onMouseMove({ offsetX, offsetY }) {
      this.zoomX = offsetX;
      this.zoomY = offsetY;
    },
  },
};
</script>

<style scoped lang="scss">
.preview-2d {
  position: relative;
  height: 100%;
  user-select: none;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .zoom {
    position: absolute;
    top: -50px;
    left: -50px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: var(--box-shadow);
    background-color: var(--color-white);
    overflow: hidden;

    pointer-events: none;
  }

  .zoomImage {
    position: absolute;
    top: 50px;
    left: 50px;
    transform-origin: top left;
  }
}
</style>
