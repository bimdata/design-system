<template>
  <ul class="bimdata-list bimdata-navigation">
    <li v-if="$scopedSlots.left">
      <slot name="left"></slot>
    </li>
    <li class="bimdata-navigation__item" v-if="first">
      <BIMDataButton
        @click="$emit('first')"
        :disabled="firstDisabled"
        class="bimdata-btn__ghost"
        :class="{ disabled: firstDisabled }"
        width="36px"
        height="21px"
      >
        <BIMDataIcon name="doubleChevron" size="s" />
      </BIMDataButton>
    </li>
    <li class="bimdata-navigation__item" v-if="previous">
      <BIMDataButton
        @click="$emit('previous')"
        :disabled="previousDisabled"
        class="bimdata-btn__ghost"
        :class="{ disabled: previousDisabled }"
        width="36px"
        height="21px"
      >
        <BIMDataIcon name="chevron" size="s" />
      </BIMDataButton>
    </li>
    <li>
      <slot />
    </li>
    <li class="bimdata-navigation__item" v-if="next">
      <BIMDataButton
        @click="$emit('next')"
        :disabled="nextDisabled"
        class="bimdata-btn__ghost"
        :class="{ disabled: nextDisabled }"
        width="36px"
        height="21px"
      >
        <BIMDataIcon name="chevron" size="s" />
      </BIMDataButton>
    </li>
    <li class="bimdata-navigation__item" v-if="last">
      <BIMDataButton
        @click="$emit('last')"
        :disabled="lastDisabled"
        class="bimdata-btn__ghost"
        :class="{ disabled: lastDisabled }"
        width="36px"
        height="21px"
      >
        <BIMDataIcon name="doubleChevron" size="s" />
      </BIMDataButton>
    </li>
    <li v-if="$scopedSlots.right">
      <slot name="right"></slot>
    </li>
  </ul>
</template>

<script>
import BIMDataIcon from "../../BIMDataComponents/BIMDataIcons/BIMDataIcon.vue";
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

// import BIMDATA LIST
@import "../../assets/scss/utilities/_list.scss";

@import "./_BIMDataNavigation.scss";
</style>
