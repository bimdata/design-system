<template>
  <div
    ref="textBox"
    class="bimdata-textbox"
    :style="{ width }"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
  >
    <span
      ref="textHead"
      class="bimdata-textbox__text--head"
      :style="{ direction: cutPosition === 'start' ? 'rtl' : 'ltr' }"
    >
      {{ textHead }}
    </span>
    <span class="bimdata-textbox__text--tail" v-show="textTail">
      {{ textTail }}
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
    text: {
      type: String,
      required: true,
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
        ["primary", "secondary", "granite-light", "silver-light"].includes(
          value
        ),
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
    text: "computeText",
  },
  mounted() {
    const observer = new ResizeObserver(() => {
      this.computeText();
    });

    observer.observe(this.$refs.textBox);
  },
  methods: {
    computeText() {
      const text = this.$props.text;
      const textHead = this.$refs.textHead;
      if (textHead) {
        // Check if text is overflowing
        this.isOverflowing = textHead.clientWidth < textHead.scrollWidth;
        // Set `textHead` and `textTail` according to cut position
        if (this.isOverflowing && this.$props.cutPosition === "middle") {
          const tailSize = Math.floor(text.length / 2);
          this.textHead = text.slice(0, -tailSize);
          this.textTail = text.slice(-tailSize);
        } else {
          this.textHead = text;
          this.textTail = "";
        }
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./BIMDataTextbox.scss"></style>
