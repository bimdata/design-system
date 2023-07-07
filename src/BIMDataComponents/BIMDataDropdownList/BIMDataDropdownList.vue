<template>
  <div
    class="bimdata-dropdown-list"
    v-clickaway="away"
    :direction="directionClass"
    :closeOnElementClick="closeOnElementClick"
    :style="style"
  >
    <div
      class="bimdata-dropdown-list__content"
      :class="{ active: displayed, disabled }"
      @click="onHeaderClick"
      :style="style"
    >
      <slot name="header" :isOpen="displayed"></slot>
      <BIMDataButton
        color="default"
        icon
        radius
        fill
        width="21px"
        height="21px"
      >
        <BIMDataIconChevron size="xxxs" :rotate="iconRotation" />
      </BIMDataButton>
      <slot name="contentAfterBtn" :isOpen="displayed"></slot>
    </div>
    <transition :name="`slide-fade-${transitionName}`">
      <BIMDataPaginatedList
        :class="`submenu submenu--${directionClass}`"
        v-show="displayed"
        :list="list"
        :perPage="perPage"
        :elementKey="elementKey"
        @element-click="onElementClick"
        :loading="loading"
      >
        <template #element="{ element }">
          <slot
            name="element"
            :element="element"
            :close="away"
            :isOpen="displayed"
          ></slot>
        </template>
      </BIMDataPaginatedList>
    </transition>
  </div>
</template>

<script>
import clickaway from "../../BIMDataDirectives/click-away.js";

import { BIMDataIconChevron } from "../BIMDataIcon/BIMDataIconStandalone/index.js";
import BIMDataPaginatedList from "../BIMDataPaginatedList/BIMDataPaginatedList.vue";
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";

export default {
  components: {
    BIMDataIconChevron,
    BIMDataPaginatedList,
    BIMDataButton,
  },
  directives: { clickaway },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    perPage: {
      type: Number,
      default: 10,
    },
    elementKey: {
      type: String,
    },
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
    loading: {
      type: Boolean,
      default: false,
    },
    closeOnElementClick: {
      type: Boolean,
      default: false,
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
  emits: ["element-click"],
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
    iconRotation() {
      return this.displayed ? (this.directionClass === "up" ? -90 : 90) : 0;
    },
  },
  methods: {
    onHeaderClick() {
      if (!this.disabled) {
        this.displayed = !this.displayed;
      }
    },
    onElementClick($event) {
      this.$emit("element-click", $event);
      if (this.closeOnElementClick) {
        this.displayed = false;
      }
    },
    away() {
      this.displayed = false;
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataDropdownList.scss"></style>
