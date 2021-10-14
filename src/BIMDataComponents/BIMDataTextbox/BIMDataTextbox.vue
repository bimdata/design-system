<template>
  <div
    class="bimdata-textbox"
    :style="{ width }"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
  >
    <div ref="textbox" class="bimdata-textbox__text">
      {{ displayedText }}
    </div>
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
    width: {
      type: String,
      default: "100%",
    },
    text: {
      type: String,
      required: true,
    },
    textMinWidth: {
      type: Number,
      default: 32,
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
      displayedText: "",
    };
  },
  watch: {
    text: "setDisplayedText",
    cutPosition: "setDisplayedText",
    cutSymbol: "setDisplayedText",
  },
  mounted() {
    const observer = new ResizeObserver(() => this.setDisplayedText());
    observer.observe(this.$refs.textbox);

    this.setDisplayedText();
  },
  methods: {
    setDisplayedText() {
      this.displayedText = this.getDisplayedText(
        this.$props.text,
        this.$props.textMinWidth,
        this.$props.cutPosition,
        this.$props.cutSymbol
      );
    },
    getDisplayedText(text, minWidth, cutPosition, cutSymbol) {
      const textbox = this.$refs.textbox;
      if (!textbox) {
        return "";
      }
      if (textbox.clientWidth < minWidth) {
        console.warn(
          `[BIMDataTextbox] textbox width is less than ${minWidth}px, text won't be displayed.`
        );
        return "";
      }

      const box = document.createElement("div");
      document.body.appendChild(box);
      box.style.whiteSpace = "nowrap";

      box.innerText = cutSymbol;
      if (box.clientWidth > textbox.clientWidth - 4) {
        document.body.removeChild(box);
        console.warn(
          "[BIMDataTextbox] cut symbol is larger than textbox width, text won't be displayed."
        );
        return "";
      }

      box.innerText = text;
      if (box.clientWidth <= textbox.clientWidth) {
        document.body.removeChild(box);
        return text;
      }

      let newText = text;
      let shrinkText,
        cutIndex,
        head = "",
        tail = "";
      switch (cutPosition) {
        case "start":
          shrinkText = () => (tail = newText.slice(1));
          break;
        case "middle":
          shrinkText = () => {
            cutIndex = Math.floor(newText.length / 2);
            head = newText.slice(0, cutIndex);
            tail = newText.slice(cutIndex + 1);
          };
          break;
        case "end":
          shrinkText = () => (head = newText.slice(0, -1));
          break;
      }

      while (box.clientWidth > textbox.clientWidth) {
        shrinkText();
        newText = `${head}${tail}`;
        box.innerText = `${head}${cutSymbol}${tail}`;
      }
      document.body.removeChild(box);

      return box.innerText;
    },
  },
};
</script>

<style scoped lang="scss" src="./BIMDataTextbox.scss"></style>
