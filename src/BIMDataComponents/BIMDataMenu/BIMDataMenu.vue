<template>
  <ul
    class="bimdata-menu bimdata-list"
    :style="{ width }"
    v-clickaway="isClickAway ? away : null"
  >
    <div
      :ref="`item-${item.text}`"
      v-for="item in menuItems"
      :key="item.text"
      class="bimdata-menu__item flex items-center"
      :class="[
        item.divider ? 'bimdata-menu__item--divider' : '',
        { hover: isItemHover && currentItemText === item.text },
      ]"
      @click.stop="onClick(item)"
      @mouseover="onMouseOver(item)"
      @mouseleave="onMouseLeave(item)"
      :style="{
        color: item.color,
      }"
    >
      <div v-if="item.groupTitle" class="bimdata-menu__item--title">
        <slot name="groupTitle">
          <span>{{ item.groupTitle }}</span>
        </slot>
      </div>
      <li
        v-if="item.text"
        :style="{
          'background-color':
            isItemHover && currentItemText === item.text ? item.background : '',
        }"
      >
        <slot name="item" :item="item">
          <BIMDataTextbox :text="item.text" />
        </slot>
        <template v-if="item.children">
          <slot name="children">
            <BIMDataIcon name="chevron" size="xxs" />
            <ul
              :ref="`children-${item.text}`"
              class="bimdata-menu__item__children"
              :style="{
                visibility:
                  isItemHover && currentItemText === item.text
                    ? 'visible'
                    : 'hidden',
                maxHeight: subListMaxHeight,
                width: subListWidth,
                top: `${definePos(item)}px`,
              }"
            >
              <li
                v-for="child in item.children.list"
                :key="child.text"
                @click.stop="child.action && child.action()"
              >
                <BIMDataTextbox :text="child.text" />
              </li>
            </ul>
          </slot>
        </template>
      </li>
      <template v-if="item.divider">
        <div class="divider"></div>
      </template>
    </div>
  </ul>
</template>

<script>
import clickaway from "../../BIMDataDirectives/click-away.js";
import BIMDataIcon from "../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataTextbox from "../../BIMDataComponents/BIMDataTextbox/BIMDataTextbox.vue";

export default {
  directives: { clickaway },
  components: {
    BIMDataIcon,
    BIMDataTextbox,
  },
  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },
    subListMaxHeight: {
      type: String,
      default: "auto",
    },
    subListWidth: {
      type: String,
      default: "100%",
    },
    width: {
      type: String,
      default: "200px",
    },
    isClickAway: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["item-click"],
  data() {
    return {
      isItemHover: false,
      currentItemText: null,
      displayed: false,
    };
  },
  methods: {
    definePos(item) {
      if (!item.children.position || !item.children.position === "up") return 0;

      const currentItem = this.$refs["item-" + item.text];
      const currentChild = this.$refs["children-" + item.text];

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
    handleCurrentItem(itemText) {
      if (itemText) {
        this.isItemHover = true;
        this.currentItemText = itemText;
      } else {
        this.isItemHover = false;
        this.currentItemText = null;
      }
    },
    onClick(item) {
      if (this.hasNoChildren(item) || !item.action) return;
      item.action();
    },
    onMouseOver(item) {
      if (this.hasNoChildren(item)) return;
      this.handleCurrentItem(item.text);
    },
    onMouseLeave(item) {
      if (this.hasNoChildren(item)) return;
      this.handleCurrentItem();
    },
    hasNoChildren(item) {
      const { children } = item;
      return children && children.list.length === 0;
    },
    away() {
      this.displayed = false;
    },
  },
};
</script>

<style lang="scss" src="./_BIMDataMenu.scss"></style>