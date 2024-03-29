<template>
  <div class="bimdata-simple-pie-chart" ref="container">
    <svg :viewBox="viewBox" :style="`--graph-draw-time: ${graphDrawTime}s;`">
      <circle
        v-if="placeholder"
        :cx="center"
        :cy="center"
        :r="barDistanceFromCenter"
        :stroke-width="placeholderStrokeWidth"
        :stroke="placeholderColor"
        fill="none"
      />
      <g v-for="(barData, i) of displayedBarsData" :key="i">
        <path
          v-if="barData.percentage > 0"
          class="path"
          :d="getPath(barData)"
          :stroke-width="barStrokeWidth"
          :stroke="barData.color"
          fill="none"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    barsData: {
      type: Array,
      default: () => [],
    },
    barDistanceFromCenter: {
      type: Number,
      default: 50,
    },
    barStrokeWidth: {
      type: Number,
      default: 10,
    },
    placeholder: {
      type: Boolean,
      default: false,
    },
    placeholderStrokeWidth: {
      type: Number,
      default: 4,
    },
    placeholderColor: {
      type: String,
      default: "#EBEBEB",
    },
    graphDrawTime: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    roundCapPercentageOffset() {
      const distance = this.barStrokeWidth / 2 - 4;
      const perimeter = this.barDistanceFromCenter * 2 * Math.PI;

      return (distance / perimeter) * 100;
    },
    center() {
      return this.viewBoxSize / 2;
    },
    displayedBarsData() {
      let sum = 0;
      return this.barsData.map(barData => {
        const res = {
          ...barData,
          previousPercentageSum: sum,
        };
        sum += +barData.percentage;
        return res;
      });
    },
    viewBoxSize() {
      return this.barDistanceFromCenter * 2 + this.barStrokeWidth;
    },
    viewBox() {
      return `0 0 ${this.viewBoxSize} ${this.viewBoxSize}`;
    },
  },
  methods: {
    getPath(barData) {
      let percentage = barData.percentage - 2 * this.roundCapPercentageOffset;

      let previousPercentageSum =
        barData.previousPercentageSum + this.roundCapPercentageOffset;

      if (+barData.percentage === 100) {
        percentage = 99.999;
        previousPercentageSum = 0;
      }

      const startPosition = this.getPercentagePosition(previousPercentageSum);

      const radius = this.barDistanceFromCenter;
      return `M${startPosition.x},${
        startPosition.y
      } A${radius} ${radius} 0 ${this.getTarget(
        percentage,
        previousPercentageSum
      )}`;
    },
    getPercentagePosition(percentage) {
      const radius = this.barDistanceFromCenter;
      const radAngle = (percentage / 100) * Math.PI * 2 - Math.PI / 2;

      const x = radius * Math.cos(radAngle) + this.center;
      const y = radius * Math.sin(radAngle) + this.center;

      return { x, y };
    },
    getTarget(percentage, previousPercentageSum) {
      const largeArcFlag = percentage > 50 ? 1 : 0;

      const { x, y } = this.getPercentagePosition(
        percentage + previousPercentageSum
      );

      return `${largeArcFlag} 1 ${x},${y}`;
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataSimplePieChart.scss"></style>
