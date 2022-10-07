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
        <template v-if="menuItems && menuItems.length > 0">
          <ul class="bimdata-dropdown__elements__menu-items">
            <li
              v-for="item in menuItems"
              :key="item.name"
              class="bimdata-dropdown__elements__menu-items__item"
              :style="{
                color: isChildEmpty(item.children)
                  ? 'var(--color-silver-dark)'
                  : 'var(--color-primary)',
              }"
              @click.stop="
                !isChildEmpty(item.children) && item.action && item.action()
              "
              @mouseover="
                !isChildEmpty(item.children) && handleCurrentItem(item.name)
              "
              @mouseleave="!isChildEmpty(item.children) && handleCurrentItem()"
            >
              <BIMDataTextbox :text="item.name" />
              <template v-if="item.children">
                <BIMDataIcon name="chevron" size="xxs" />
                <ul
                  v-show="isItemHover && currentItemName === item.name"
                  class="bimdata-dropdown__elements__menu-items__item__children"
                  :style="{ maxHeight: subListMaxHeight }"
                >
                  <li
                    v-for="child in item.children"
                    :key="child.name"
                    @click="child.action && child.action()"
                  >
                    <BIMDataTextbox :text="child.name" />
                  </li>
                </ul>
              </template>
            </li>
          </ul>
        </template>
        <template v-else>
          <slot name="element"></slot>
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
import clickaway from "../../BIMDataDirectives/click-away.js";
import BIMDataIcon from "../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataTextbox from "../../BIMDataComponents/BIMDataTextbox/BIMDataTextbox.vue";

export default {
  directives: { clickaway },
  components: { BIMDataIcon, BIMDataTextbox },
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
    menuItems: {
      type: Array,
      default: () => [],
    },
    subListMaxHeight: {
      type: String,
      default: "auto",
    },
  },
  data() {
    return {
      displayed: false,
      isItemHover: false,
      currentItemName: null,
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
    handleCurrentItem(itemName) {
      if (itemName) {
        this.isItemHover = true;
        this.currentItemName = itemName;
      } else {
        this.isItemHover = false;
        this.currentItemName = null;
      }
    },
    isChildEmpty(childList) {
      return childList && childList.length === 0;
    },
  },
};
</script>

<style
  lang="scss"
  scoped
  src="../../assets/scss/_BIMDataVariables.scss"
></style>

<style lang="scss" src="./_BIMDataDropdownMenu.scss"></style>
