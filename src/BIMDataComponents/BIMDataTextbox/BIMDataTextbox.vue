<template>
  <div
    class="bimdata-textbox"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
  >
    {{ displayedText }}
    <div
      v-if="tooltip && displayedText !== text"
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
    text: {
      type: String,
      required: true,
    },
    maxLength: {
      type: Number,
      validator: value => value > 0,
    },
    cutPosition: {
      type: String,
      default: "middle",
      validator: value => ["start", "middle", "end"].includes(value),
    },
    cutSymbol: {
      type: String,
      default: "...",
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
        ["primary", "secondary", "tertiary", "tertiary-lightest"].includes(
          value
        ),
    },
  },
  data() {
    return {
      showTooltip: false,
    };
  },
  computed: {
    displayedText() {
      const text = this.$props.text;
      const l = text.length;
      const c = this.$props.cutSymbol.length;
      const max = this.$props.maxLength;
      if (max && max < l && max > c) {
        let cutIndex,
          head = "",
          tail = "";
        switch (this.$props.cutPosition) {
          case "start":
            cutIndex = l - (max - c);
            tail = text.slice(cutIndex);
            break;
          case "middle":
            cutIndex = (max - c) / 2;
            head = text.slice(0, Math.ceil(cutIndex));
            tail = text.slice(l - Math.floor(cutIndex));
            break;
          case "end":
            cutIndex = max - c;
            head = text.slice(0, cutIndex);
            break;
        }
        return `${head}${this.$props.cutSymbol}${tail}`;
      } else {
        return text;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "./_BIMDataTextbox.scss";
</style>
