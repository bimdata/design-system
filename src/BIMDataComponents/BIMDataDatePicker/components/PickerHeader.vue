<template>
  <header>
    <button
      ref="prev"
      class="prev"
      :disabled="isPreviousDisabled"
      type="button"
      @click.stop="$emit('page-change', previousPage)"
      @keydown.down.prevent="focusTabbableCell"
      @keydown.up.prevent="$emit('focus-input')"
      @keydown.left.prevent="arrowLeftPrev"
      @keydown.right.prevent="arrowRightPrev"
    >
      <slot name="prevIntervalBtn">
        <BIMDataIcon
          name="chevron"
          size="xxxs"
          fill
          color="default"
          :rotate="180"
        />
      </slot>
    </button>
    <slot />
    <button
      ref="next"
      class="next"
      :disabled="isNextDisabled"
      type="button"
      @click.stop="$emit('page-change', nextPage)"
      @keydown.down.prevent="focusTabbableCell"
      @keydown.up.prevent="$emit('focus-input')"
      @keydown.left.prevent="arrowLeftNext"
      @keydown.right.prevent="arrowRightNext"
    >
      <slot name="nextIntervalBtn">
        <BIMDataIcon name="chevron" size="xxxs" fill color="default" />
      </slot>
    </button>
  </header>
</template>

<script>
import BIMDataIcon from "../../BIMDataIcon/BIMDataIcon.vue";
export default {
  name: "PickerHeader",
  components: { BIMDataIcon },
  props: {
    isNextDisabled: {
      type: Boolean,
      required: true,
    },
    isPreviousDisabled: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      previousPage: { incrementBy: -1, focusRefs: ["prev"] },
      nextPage: { incrementBy: 1, focusRefs: ["next"] },
    };
  },
  methods: {
    /**
     * Changes the page, or sets focus to the adjacent button
     */
    arrowLeftPrev() {
      this.$emit("page-change", this.previousPage);
    },
    /**
     * Changes the page, or sets focus to the adjacent button
     */
    arrowRightPrev() {
      this.$emit("set-focus", ["up", "next", "tabbableCell"]);
    },
    /**
     * Changes the page, or sets focus to the adjacent button
     */
    arrowLeftNext() {
      this.$emit("set-focus", ["up", "prev", "tabbableCell"]);
    },
    /**
     * Changes the page, or sets focus to the adjacent button
     */
    arrowRightNext() {
      this.$emit("page-change", this.nextPage);
    },
    focusTabbableCell() {
      this.$emit("set-focus", ["tabbableCell"]);
    },
  },
};
</script>
