<template>
  <div
    class="bimdata-multiple-pie-chart"
    ref="container"
    :style="
      `--graph-draw-time: ${graphDrawTime}s;` +
      `width: ${size}px;` +
      `height: ${size}px;`
    "
  >
    <svg width="100%" height="100%" :viewBox="viewBox">
      <g v-for="(barData, i) of relevantBarsData" :key="i">
        <circle
          :cx="center"
          :cy="center"
          :r="getRadius(i)"
          :stroke="placeholderBarStroke"
          :stroke-width="placeholderBarStrokeWidth"
          fill="none"
        />

        <path
          v-if="barData.percentage < 100"
          class="path"
          :d="getPath(barData.percentage, i)"
          :stroke="barData.color"
          :stroke-width="barStrokeWidth"
          stroke-linecap="round"
          fill="none"
        />
        <circle
          v-else
          class="path"
          :cx="center"
          :cy="center"
          :r="getRadius(i)"
          :stroke="barData.color"
          :stroke-width="barStrokeWidth"
          stroke-linecap="round"
          :transform="`rotate(-90 ${center} ${center})`"
          fill="none"
        />
      </g>
    </svg>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 200,
    },
    graphDrawTime: {
      type: Number,
      default: 2,
    },
    firstBarDistanceFromCenter: {
      type: Number,
      default: 57,
    },
    interBarDistance: {
      type: Number,
      default: 16,
    },
    barStrokeWidth: {
      type: Number,
      default: 10,
    },
    placeholderBarStrokeWidth: {
      type: Number,
      default: 4,
    },
    placeholderBarStroke: {
      type: String,
      default: "#D8D8D8",
    },
    barsData: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    center() {
      return this.viewBoxSize / 2;
    },
    viewBoxSize() {
      return (
        this.firstBarDistanceFromCenter * 2 +
        this.interBarDistance * this.relevantBarsData.length * 2
      );
    },
    viewBox() {
      return `0 0 ${this.viewBoxSize} ${this.viewBoxSize}`;
    },
    relevantBarsData() {
      return this.barsData.filter(({ percentage }) => percentage > 0).reverse();
    },
  },
  methods: {
    getPath(percentage, index) {
      const radius = this.getRadius(index);
      return `M${this.center},${
        this.center - radius
      } A${radius} ${radius} 0 ${this.getTarget(percentage, radius)}`;
    },
    getTarget(percentage, radius) {
      const radAngle = (percentage / 100) * Math.PI * 2 - Math.PI / 2;

      const largeArcFlag = percentage > 50 ? 1 : 0;

      const x = radius * Math.cos(radAngle) + this.center;
      const y = radius * Math.sin(radAngle) + this.center;

      return `${largeArcFlag} 1 ${x},${y}`;
    },
    getRadius(index) {
      return this.firstBarDistanceFromCenter + index * this.interBarDistance;
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataMultiplePieChart.scss"></style>
