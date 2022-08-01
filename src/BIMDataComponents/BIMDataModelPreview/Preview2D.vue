<template>
  <div
    class="preview-2d"
    :style="{ width: size, height: size }"
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
          width: size,
          height: size,
          transform: zoomImageTransform,
        }"
      >
        <img loading="lazy" :src="imgUrl" />
      </div>
    </div>
  </div>
</template>

<script>
const ZOOM_FACTOR = 3;

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
        translate(${this.zoomX}px, ${this.zoomY}px
      )`;
    },
    zoomImageTransform() {
      return `
        scale(${ZOOM_FACTOR})
        translate(-${this.zoomX}px, -${this.zoomY}px
      )`;
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

<style scoped lang="scss" src="./Preview2D.scss"></style>
