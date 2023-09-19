<template>
  <ul
    class="bimdata-list bimdata-navigation"
    :style="{ 'background-color': backgroundColor }"
  >
    <li class="bimdata-navigation__left m-r-6">
      <slot name="left"></slot>
    </li>
    <li class="bimdata-navigation__item" v-if="first">
      <BIMDataButton
        @click="$emit('first')"
        :disabled="firstDisabled"
        ghost
        :class="{ disabled: firstDisabled }"
        width="21px"
        height="21px"
      >
        <BIMDataIconDoubleChevron size="xxxs" :rotate="180" />
      </BIMDataButton>
    </li>
    <li class="bimdata-navigation__item" v-if="previous">
      <BIMDataButton
        @click="$emit('previous')"
        :disabled="previousDisabled"
        ghost
        :class="{ disabled: previousDisabled }"
        width="21px"
        height="21px"
      >
        <BIMDataIconChevron size="xxxs" :rotate="180" />
      </BIMDataButton>
    </li>
    <li>
      <slot />
    </li>
    <li class="bimdata-navigation__item" v-if="next">
      <BIMDataButton
        @click="$emit('next')"
        :disabled="nextDisabled"
        ghost
        :class="{ disabled: nextDisabled }"
        width="21px"
        height="21px"
      >
        <BIMDataIconChevron size="xxxs" />
      </BIMDataButton>
    </li>
    <li class="bimdata-navigation__item" v-if="last">
      <BIMDataButton
        @click="$emit('last')"
        :disabled="lastDisabled"
        ghost
        :class="{ disabled: lastDisabled }"
        width="21px"
        height="21px"
      >
        <BIMDataIconDoubleChevron size="xxxs" />
      </BIMDataButton>
    </li>
    <li class="bimdata-navigation__right">
      <slot name="right"></slot>
    </li>
  </ul>
</template>

<script>
import {
  BIMDataIconChevron,
  BIMDataIconDoubleChevron,
} from "../BIMDataIcon/BIMDataIconStandalone/index.js";
import BIMDataButton from "../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";

export default {
  components: {
    BIMDataIconChevron,
    BIMDataIconDoubleChevron,
    BIMDataButton,
  },
  props: {
    first: {
      type: Boolean,
      default: true,
    },
    last: {
      type: Boolean,
      default: true,
    },
    previous: {
      type: Boolean,
      default: true,
    },
    next: {
      type: Boolean,
      default: true,
    },
    firstDisabled: {
      type: Boolean,
      default: false,
    },
    lastDisabled: {
      type: Boolean,
      default: false,
    },
    previousDisabled: {
      type: Boolean,
      default: false,
    },
    nextDisabled: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: "var(--color-white)",
    },
  },
  emits: ["first", "previous", "next", "last"],
};
</script>

<style scoped lang="scss" src="./_BIMDataNavigation.scss"></style>
