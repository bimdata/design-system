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
    };
  },
  watch: {
    modelValue() {
      this.$nextTick(() => {
        this.backgroundSize = this.getBackgroundSize();
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
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataSlider.scss"></style>
