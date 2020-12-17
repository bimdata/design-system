<template>
  <div
    class="bimdata-dropdown-list"
    v-clickaway="away"
    :direction="directionClass"
  >
    <div
      class="bimdata-dropdown-list__content"
      :class="{ active: displayed, disabled }"
      @click="onHeaderClick"
    >
      <slot name="header"></slot>
      <BIMDataButton
        color="default"
        icon
        radius
        fill
        width="21px"
        height="21px"
      >
        <BIMDataIcon name="chevron" size="xxxs" />
      </BIMDataButton>
      <slot name="contentAfterBtn"></slot>
    </div>
    <transition :name="`slide-fade-${transitionName}`">
      <BIMDataPaginatedList
      :class="`submenu submenu--${directionClass}`"
      v-show="displayed"
      :list="list"
      :perPage="perPage"
      :elementKey="elementKey"
      @element-click="$emit('element-click', $event)"
      :loading="loading"
    >
      <template #element="{element}">
        <slot name="element" :element="element" :close="away"></slot>
      </template>
    </BIMDataPaginatedList>
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
  },
  emits: [
    'element-click'
  ],
  data() {
    return {
      displayed: false,
    };
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

<style lang="scss">
// import BIMDATA VARIABLES
@import "../../assets/scss/_BIMDataVariables.scss";
@import "../../assets/scss/_BIMDataTransitions.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataSubmenus.scss";
@import "./_BIMDataDropdownList.scss";
</style>
