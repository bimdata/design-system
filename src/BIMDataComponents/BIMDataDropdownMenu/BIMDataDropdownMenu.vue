<template>
  <div class="bimdata-dropdown" v-clickaway="away">
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
        :class="[
          { 'no-header': !menuHeader },
          `submenu--${menuHeader ? directionClass : 'no-direction'}`,
        ]"
        :style="{
          width: !menuHeader && width,
        }"
        @click="away()"
      >
        <template v-if="menuItems && menuItems.length > 0">
          <ul class="bimdata-dropdown__elements__menu-items">
            <li
              :ref="`item-${item.name}`"
              v-for="item in menuItems"
              :key="item.name"
              class="bimdata-dropdown__elements__menu-items__item"
              :class="`bimdata-dropdown__elements__menu-items__item--${
                hasNoChildren(item) ? 'no-children' : 'has-children'
              }`"
              @click.stop="onClick(item)"
              @mouseover="onMouseOver(item)"
              @mouseleave="onMouseLeave(item)"
            >
              <BIMDataTextbox :text="item.name" />
              <template v-if="item.children">
                <BIMDataIcon name="chevron" size="xxs" />
                <ul
                  :ref="`children-${item.name}`"
                  class="bimdata-dropdown__elements__menu-items__item__children"
                  :style="{
                    visibility:
                      isItemHover && currentItemName === item.name
                        ? 'visible'
                        : 'hidden',
                    maxHeight: subListMaxHeight,
                    top: `${definePos(item)}px`,
                  }"
                >
                  <li
                    v-for="child in item.children.list"
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
          <slot class="bimdata-dropdown__elements__slot" name="element"></slot>
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
    header: {
      type: Boolean,
      default: true,
    },
    subListMaxHeight: {
      type: String,
      default: "auto",
    },
  },
  data() {
    return {
      menuHeader: true,
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
        visibility: this.menuHeader ? "visible" : "hidden",
      };
    },
  },
  watch: {
    header: {
      immediate: true,
      handler(header) {
        this.menuHeader = header;
        if (!header) this.displayed = true;
      },
    },
  },
  methods: {
    definePos(item) {
      if (!item.children.position || !item.children.position === "up") return 0;

      const currentItem = this.$refs["item-" + item.name];
      const currentChild = this.$refs["children-" + item.name];

      if (
        currentItem == undefined ||
        currentItem.length < 1 ||
        currentChild == undefined ||
        currentChild.length < 1
      ) {
        return;
      }

      const itemPos = currentItem[0].getBoundingClientRect();
      const childPos = currentChild[0].getBoundingClientRect();

      return (childPos.height - itemPos.height) * -1;
    },
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
    onClick(item) {
      if (this.hasNoChildren(item) || !item.action) return;
      item.action();
    },
    onMouseOver(item) {
      if (this.hasNoChildren(item)) return;
      this.handleCurrentItem(item.name);
    },
    onMouseLeave(item) {
      if (this.hasNoChildren(item)) return;
      this.handleCurrentItem();
    },
    hasNoChildren(item) {
      const { children } = item;
      return children && children.list.length === 0;
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
