<template>
  <div class="bimdata-dropdown" v-clickaway="away" :direction="directionClass">
    <div
      class="bimdata-dropdown__content"
      :class="{ active: displayed, disabled }"
      @click="onHeaderClick"
      :style="style"
    >
      <slot name="header"></slot>
      <slot name="contentAfterHeader"></slot>
    </div>
    <transition :name="`slide-fade-${transitionName}`">
      <div
        v-show="displayed"
        class="submenu bimdata-dropdown__elements"
        :class="`submenu--${directionClass}`"
        @click="away()"
      >
        <slot name="element"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import clickaway from "../../BIMDataDirectives/click-away.js";

export default {
  directives: { clickaway },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    transitionName: {
      type: String,
      default: "up",
      validator: transitionName => ["up", "down"].includes(transitionName),
    },
    directionClass: {
      type: String,
      default: "down",
      validator: directionClass =>
        ["down", "up", "right", "left"].includes(directionClass),
    },
    width: {
      type: String,
      default: "220px",
    },
    height: {
      type: String,
      default: "36px",
    },
  },
  data() {
    return {
      displayed: false,
    };
  },
  computed: {
    style() {
      return {
        "min-width": `${this.width}`,
        "min-height": `${this.height}`,
      };
    },
  },
  methods: {
    onHeaderClick() {
      if (!this.disabled) {
        this.displayed = !this.displayed;
      }
    },
    away() {
      this.displayed = false;
    },
  },
};
</script>

<style lang="scss" src="./_BIMDataDropdownMenu.scss"></style>
