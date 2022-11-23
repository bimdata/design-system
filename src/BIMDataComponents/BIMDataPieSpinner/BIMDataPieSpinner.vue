<template>
  <div class="bimdata-pie-spinner">
    <svg
      :viewBox="`0 0 ${width} ${width}`"
      xmlns="http://www.w3.org/2000/svg"
      fill="transparent"
      :width="width"
      :height="width"
      style="transform: rotate(-90deg)"
    >
      <circle
        :cx="width / 2"
        :cy="width / 2"
        :r="(width - strokeWidth) / 2"
        :stroke="stroke"
        :stroke-width="strokeWidth"
        class="bimdata-pie-spinner__path"
        :style="`--delay: ${delay}s;
        --iteration: ${laps};
        --dasharray: ${dashArray};
        --dashoffset-from: ${dashOffsetFrom};
        --dashoffset-to: ${dashOffsetTo};`"
        @animationiteration="
          $emit('lap', (delay * laps - $event.elapsedTime) / delay)
        "
        @animationend="$emit('stop')"
      />
    </svg>
    <div
      class="bimdata-pie-spinner__inside"
      :style="{ width: width + 'px', height: width + 'px' }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 22,
    },
    strokeWidth: {
      type: Number,
      default: 2,
    },
    stroke: {
      type: String,
      default: "currentColor",
    },
    delay: {
      type: Number,
      default: 1,
    },
    laps: {
      type: [Number, String],
      default: 1,
    },
    dashOffsetFrom: {
      type: Number,
      default: 0,
    },
    dashOffsetTo: {
      type: Number,
      default: 63,
    },
    dashArray: {
      type: Number,
      default: 63,
    },
  },
  emits: ["lap", "stop"],
};
</script>

<style lang="scss">
@import "./_BIMDataPieSpinner.scss";
</style>
