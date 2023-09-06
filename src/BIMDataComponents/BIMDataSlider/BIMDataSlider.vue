<template>
  <div class="bimdata-slider">
    <input
      ref="input"
      class="bimdata-slider-input"
      type="range"
      :style="`--background-size: ${backgroundSize}%`"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      :disabled="disabled"
      @input="onInput"
    />
    <output class="bimdata-slider-tooltip" :style="{ left: tooltipPosition }">{{
      modelValue
    }}</output>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: [Number, String],
      default: null,
    },
    max: {
      type: [Number, String],
      default: null,
    },
    step: {
      type: [Number, String],
      default: null,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      backgroundSize: 0,
      tooltipPosition: `calc(${this.modelValue}% + (${
        8 - this.modelValue * 0.18
      }px))`,
    };
  },
  watch: {
    modelValue() {
      this.$nextTick(() => {
        this.backgroundSize = this.getBackgroundSize();

        this.getTooltipPosition();
      });
    },
  },
  mounted() {
    this.backgroundSize = this.getBackgroundSize();
  },
  methods: {
    getBackgroundSize() {
      const input = this.$refs.input;

      if (!input) return null;

      const min = +input.min || 0;
      const max = +input.max || 100;
      const value = +input.value;

      const size = ((value - min) / (max - min)) * 100;

      return size;
    },
    onInput(event) {
      this.$emit("update:modelValue", +event.target.value);
    },
    getTooltipPosition() {
      const val = this.modelValue;
      const min = this.min ? this.min : 0;
      const max = this.max ? this.max : 100;
      const newVal = Number(((val - min) * 100) / (max - min));
      this.tooltipPosition = `calc(${newVal}% + (${8 - newVal * 0.18}px))`;
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataSlider.scss"></style>
