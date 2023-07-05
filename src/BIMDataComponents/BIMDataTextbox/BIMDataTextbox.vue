<template>
  <div
    ref="textBox"
    class="bimdata-textbox"
    :style="{
      width,
      minWidth,
      maxWidth,
    }"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
  >
    <span
      ref="textHead"
      class="bimdata-textbox__text--head"
      :style="{
        width: textTail ? '50%' : '100%',
        direction: cutPosition === 'start' ? 'rtl' : 'ltr',
      }"
    >
      <bdi>{{ textHead }}</bdi>
    </span>
    <span class="bimdata-textbox__text--tail" v-show="textTail">
      <bdi>{{ textTail }}</bdi>
    </span>
    <div
      v-if="tooltip && isOverflowing"
      v-show="showTooltip"
      class="bimdata-textbox__tooltip"
      :class="[
        `bimdata-textbox__tooltip--${tooltipPosition}`,
        `bimdata-textbox__tooltip--${tooltipColor}`,
      ]"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "100%",
    },
    minWidth: {
      type: String,
    },
    maxWidth: {
      type: String,
    },
    text: {
      type: String,
      default: "",
    },
    cutPosition: {
      type: String,
      default: "middle",
      validator: value => ["start", "middle", "end"].includes(value),
    },
    tooltip: {
      type: Boolean,
      default: true,
    },
    tooltipPosition: {
      type: String,
      default: "bottom",
      validator: value => ["top", "right", "bottom", "left"].includes(value),
    },
    tooltipColor: {
      type: String,
      default: "primary",
      validator: value =>
        [
          "white",
          "primary",
          "secondary",
          "granite-light",
          "silver-light",
        ].includes(value),
    },
  },
  data() {
    return {
      showTooltip: false,
      isOverflowing: false,
      textHead: "",
      textTail: "",
    };
  },
  watch: {
    width: "computeText",
    text: "computeText",
    cutPosition: "computeText",
  },
  mounted() {
    this.observer = new ResizeObserver(() => this.computeText());
    this.observer.observe(this.$refs.textBox);
    this.computeText();
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
  methods: {
    async computeText() {
      const text = this.$props.text;
      const textHead = this.$refs.textHead;

      if (textHead) {
        // Reset `textHead` and `textTail`
        this.textHead = text;
        this.textTail = "";

        // Wait for DOM update
        await this.$nextTick();
        // Check if text is overflowing
        this.isOverflowing = textHead.clientWidth < textHead.scrollWidth;
        // Set `textTail` accordingly
        if (this.isOverflowing && this.$props.cutPosition === "middle") {
          this.textTail = text;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/css/variables.css";
@import "./BIMDataTextbox.scss";
</style>
