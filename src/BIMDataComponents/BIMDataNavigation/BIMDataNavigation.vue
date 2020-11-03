<template>
  <ul class="bimdata-list bimdata-navigation">
    <li v-if="$scopedSlots.left">
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
        <BIMDataIcon
          name="doubleChevron"
          class="icon-double-chevron-left"
          size="xxxs"
        />
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
        <BIMDataIcon name="chevron" class="icon-chevron-left" size="xxxs" />
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
        <BIMDataIcon name="chevron" size="xxxs" />
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
        <BIMDataIcon name="doubleChevron" size="xxxs" />
      </BIMDataButton>
    </li>
    <li v-if="$scopedSlots.right">
      <slot name="right"></slot>
    </li>
  </ul>
</template>

<script>
import BIMDataIcon from "../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataButton from "../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";

export default {
  components: {
    BIMDataIcon,
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
  },
};
</script>

<style lang="scss">
// import BIMDATA VARIABLES
@import "../../assets/scss/_BIMDataVariables.scss";

// import BIMDATA UTILITIES
@import "../../assets/scss/utilities/_list.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataNavigation.scss";
</style>
