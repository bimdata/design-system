<template>
  <div class="bimdata-menu-inline" :class="{ dark: isDark }" v-clickaway="away">
    <BIMDataButton
      :color="isDark ? 'quaternary' : 'primary'"
      ghost
      rounded
      icon
      @click="active = !active"
      :width="width"
      padding="0px"
    >
      <slot name="button" :active="active">
        <BIMDataIconEllipsis
          v-if="!active"
          fill
          :color="isDark ? 'white' : 'granite-light'"
          :size="iconEllipsisSize"
        />
        <BIMDataIconClose
          v-else
          fill
          :color="isDark ? 'white' : 'granite-light'"
          :size="iconCloseSize"
        />
      </slot>
    </BIMDataButton>
    <div
      v-if="active"
      class="bimdata-menu-inline__submenu"
      :class="[
        isSubmenuRight
          ? 'bimdata-menu-inline__submenu__right'
          : 'bimdata-menu-inline__submenu__left',
        isSubmenuRight ? 'm-l-6' : 'm-r-6',
      ]"
      :style="submenuPosition"
    >
      <slot name="submenu"> </slot>
    </div>
  </div>
</template>

<script>
import clickaway from "../../BIMDataDirectives/click-away.js";
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";
import {
  BIMDataIconClose,
  BIMDataIconEllipsis,
} from "../BIMDataIcon/BIMDataIconStandalone/index.js";

export default {
  directives: { clickaway },
  components: {
    BIMDataButton,
    BIMDataIconClose,
    BIMDataIconEllipsis,
  },
  inject: {
    darkThemeRef: {
      from: "BIMDATA_DESIGN_SYSTEM_DARK_THEME",
      default: () => ({ value: false }),
    },
  },
  props: {
    isSubmenuRight: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: "32px",
    },
    isClickAway: {
      type: Boolean,
      default: false,
    },
    iconEllipsisSize: {
      type: String,
      default: "m",
      validator: value =>
        ["xxxs", "xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"].includes(
          value,
        ),
    },
    iconCloseSize: {
      type: String,
      default: "xxs",
      validator: value =>
        ["xxxs", "xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"].includes(
          value,
        ),
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    submenuPosition() {
      if (this.isSubmenuRight) {
        return `left: ${this.width}`;
      }
      return `right: ${this.width}`;
    },
    isDark() {
      return this.darkThemeRef;
    },
  },
  methods: {
    away() {
      if (this.isClickAway) {
        this.active = false;
      }
    },
  },
};
</script>

<style scoped src="./BIMDataMenuInline.css"></style>
