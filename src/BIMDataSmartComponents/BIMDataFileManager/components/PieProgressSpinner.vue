<template>
  <div class="bimdata-pie-progress-spinner">
    <svg
      :viewBox="`0 0 ${width} ${width}`"
      xmlns="http://www.w3.org/2000/svg"
      fill="transparent"
      :width="width"
      :height="width"
      style="transform: rotate(-90deg);"
    >
      <circle
        class="bimdata-pie-progress-spinner__path--back"
        :cx="width / 2"
        :cy="width / 2"
        :r="(width - strokeWidth) / 2"
        stroke="lightgray"
        :stroke-width="strokeWidth"
      />
      <circle
        class="bimdata-pie-progress-spinner__path"
        :cx="width / 2"
        :cy="width / 2"
        :r="(width - strokeWidth) / 2"
        :stroke="color"
        :stroke-width="strokeWidth"
        :style="`--dashoffset: ${dashoffset};`"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "currentColor",
    },
    progress: {
      type: Number,
      default: 0,
      validator(value) {
        return value >= 0 && value <= 100;
      },
    },
  },
  data() {
    return {
      width: 22,
      strokeWidth: 3,
    };
  },
  computed: {
    dashoffset() {
      return 63 - (this.progress / 100) * 63;
    },
  },
};
</script>

<style lang="scss">
.bimdata-pie-progress-spinner {
  &__path {
    &--back {
      position: absolute;
      top: 0px;
      left: 0px;
    }
    stroke-dasharray: 63;
    stroke-dashoffset: var(--dashoffset, 0);
  }
}
</style>
