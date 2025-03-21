<template>
  <div class="bimdata-carousel">
    <BIMDataButton
      v-show="index > 0"
      class="bimdata-carousel__btn-prev"
      color="default"
      fill
      rounded
      icon
      @click="index--"
    >
      <BIMDataIconChevron size="s" :rotate="180" />
    </BIMDataButton>
    <div class="bimdata-carousel__container">
      <div
        class="bimdata-carousel__container__slider"
        ref="slider"
        :style="{
          transform: `translateX(-${translations[index]}px)`,
        }"
      >
        <slot></slot>
      </div>
    </div>
    <BIMDataButton
      v-show="index < maxIndex"
      class="bimdata-carousel__btn-next"
      color="default"
      fill
      rounded
      icon
      @click="index++"
    >
      <BIMDataIconChevron size="s" />
    </BIMDataButton>
  </div>
</template>

<script>
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";
import BIMDataIconChevron from "../BIMDataIcon/BIMDataIconStandalone/BIMDataIconChevron.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataIconChevron,
  },
  props: {
    sliderPadding: {
      type: Number,
      default: 12,
    },
    minGap: {
      // Minimum amount of space between items
      type: Number,
      default: 24,
    },
  },
  data() {
    return {
      index: 0,
      maxIndex: 0,
      translations: [],
    };
  },
  watch: {
    minGap() {
      this.distributeItems();
    },
  },
  mounted() {
    this.distributeItems();
    // Redistribute items on slider resize
    this.resizeObserver = new ResizeObserver(() => this.distributeItems());
    this.resizeObserver.observe(this.$refs.slider);
    // Redistribute items when items are added/removed
    this.mutationObserver = new MutationObserver(() => this.distributeItems());
    this.mutationObserver.observe(this.$refs.slider, { childList: true });
  },
  unmounted() {
    this.resizeObserver.disconnect();
    this.mutationObserver.disconnect();
  },
  destroyed() {
    this.resizeObserver.disconnect();
    this.mutationObserver.disconnect();
  },
  methods: {
    distributeItems() {
      const sliderWidth = this.$refs.slider.getBoundingClientRect().width;
      // Compute the actual width that will be available to distribute items
      const contentWidth = sliderWidth - 2 * this.sliderPadding;

      const children = Array.from(this.$refs.slider.children);

      if (children.length > 0) {
        // Note: it is assumed that all items have the same dimensions (width/height)
        const { width: itemWidth, height: itemHeight } =
          children[0].getBoundingClientRect();

        // Set slider height according to items height and slider padding
        this.$refs.slider.style.height = `${
          itemHeight + 2 * this.sliderPadding
        }px`;

        // Calculate the maximum number of items that can be displayed
        // at the same time according to slider width and items width
        // taking minimum gap into account
        let nbDisplayed = Math.max(
          Math.floor(contentWidth / (itemWidth + this.minGap)),
          1 // Display at least 1 item even if slider width is not large enough
        );

        // Calculate the actual gap between items
        let gap = this.minGap;
        if (nbDisplayed > 1) {
          gap = (contentWidth - nbDisplayed * itemWidth) / (nbDisplayed - 1);
        }

        // Compute offsets (translations) and set items styles
        let offset;
        const offsetUnit = itemWidth + gap;
        const offsets = [];
        for (let i = 0; i < children.length; i++) {
          offset = i * offsetUnit;
          offsets.push(offset);
          Object.assign(children[i].style, {
            position: "absolute",
            top: `${this.sliderPadding}px`,
            left: `${this.sliderPadding + offset}px`,
          });
        }

        this.maxIndex = Math.max(children.length - nbDisplayed, 0);
        this.index = Math.min(this.index, this.maxIndex);
        this.translations = offsets;
      }
    },
  },
};
</script>

<style scoped src="./BIMDataCarousel.css"></style>
