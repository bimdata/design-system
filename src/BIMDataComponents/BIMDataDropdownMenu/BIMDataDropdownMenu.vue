<template>
  <div
    class="bimdata-dropdown"
    v-clickaway="away"
    :direction="directionClass"
  >
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
      <ul
        v-show="displayed"
        class="bimdata-list submenu bimdata-dropdown__elements"
        :class="`submenu--${directionClass}`"
        :list="list"
      >
        <li
          v-for="element of list"
          :key="element"
          @click="onElementClick(element)"
        >
          <slot name="element">{{ element }}</slot>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import clickaway from "../../BIMDataDirectives/click-away.js";

import BIMDataIcon from "../BIMDataIcon/BIMDataIcon.vue";
import BIMDataPaginatedList from "../BIMDataPaginatedList/BIMDataPaginatedList.vue";
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";

export default {
  components: {
    BIMDataIcon,
    BIMDataPaginatedList,
    BIMDataButton,
  },
  directives: { clickaway },
  props: {
    list: {
      type: Array,
      default: () => [],
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
  },
  methods: {
    onHeaderClick() {
      if (!this.disabled) {
        this.displayed = !this.displayed;
      }
    },
    onElementClick(element) {
      this.$emit("element-click", element);
      this.away();
    },
    away() {
      this.displayed = false;
    },
  },
};
</script>

<style lang="scss">
// import BIMDATA VARIABLES
@import "../../assets/scss/_BIMDataVariables.scss";
@import "../../assets/scss/_BIMDataTransitions.scss";

@import "../../assets/scss/elements/_BIMDataSubmenus.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataDropdownMenu.scss";
</style>
