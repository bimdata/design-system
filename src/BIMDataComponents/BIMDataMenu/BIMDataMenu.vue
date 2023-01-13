<template>
  <ul
    class="bimdata-menu bimdata-list"
    :style="{
      width,
      maxHeight,
    }"
    v-clickaway="away"
  >
    <div
      :ref="`item-${item.key}`"
      v-for="item in menuItems"
      :key="item.key"
      class="bimdata-menu__item flex items-center"
      :class="[
        item.divider ? 'bimdata-menu__item--divider' : '',
        { hover: isItemHover && currentItemKey === item.key },
        hasNoChildren(item) ? 'bimdata-menu__item--no-children' : '',
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
            isItemHover && currentItemKey === item.key ? item.background : '',
          display: 'flex',
        }"
      >
        <slot name="item" :item="item">
          <BIMDataTextbox
            :text="item.text"
            :tooltip="false"
            width="80%"
            :style="{
              marginLeft: childrenLeft ? (item.children ? '11px' : '24px') : '',
            }"
          />
        </slot>
        <template v-if="item.children">
          <slot name="children">
            <BIMDataIcon
              name="chevron"
              size="xxs"
              :rotate="childrenLeft ? 180 : 0"
              :margin="childrenLeft ? '' : '0 0 0 auto'"
              :style="{
                order: childrenLeft ? -1 : 0,
              }"
            />
            <template v-if="isItemHover">
              <template
                v-if="hasNoChildren(item) && currentItemKey === item.key"
              >
                <slot name="children-without-child" :children="item.children" />
              </template>
              <template v-else>
                <ul
                  :ref="`children-${item.key}`"
                  class="bimdata-menu__item__children"
                  :style="getChildrenStyle(item)"
                >
                  <slot name="child-header" :children="item.children" />
                  <li
                    v-for="child in item.children.list"
                    :key="child.text"
                    @click.stop="child.action && child.action()"
                  >
                    <slot name="child-item" :child="child">
                      <BIMDataTextbox :text="child.text" :tooltip="false" />
                    </slot>
                  </li>
                  <slot name="child-footer" :children="item.children" />
                </ul>
              </template>
            </template>
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
    maxHeight: {
      type: String,
      default: "auto",
    },
    width: {
      type: String,
      default: "200px",
    },
    subListMaxHeight: {
      type: String,
      default: "auto",
    },
    subListWidth: {
      type: String,
      default: "200px",
    },
    isClickAway: {
      type: Boolean,
      default: true,
    },
    childrenLeft: {
      type: Boolean,
      default: false,
    },
    /**
     * This props is specific to the eponym platform feature.
     * It's a temporary workaround that allow us
     * to make items with no child hoverable.
     */
    userGroupImportFeature: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["hover"],
  data() {
    return {
      isItemHover: false,
      currentItemKey: null,
      displayed: false,
    };
  },
  methods: {
    getChildrenStyle(item) {
      if (this.currentItemKey !== item.key) return { display: "none" };

      const itemPos = this.$refs["item-" + item.key][0].getBoundingClientRect();
      return {
        width: this.subListWidth,
        maxHeight: this.subListMaxHeight,
        top: `${itemPos.top}px`,
        left: `${
          this.childrenLeft
            ? itemPos.x -
              parseInt(this.subListWidth.replace(/[a-zA-Z]/g, ""), 10)
            : itemPos.x + itemPos.width
        }px`,
      };
    },
    handleCurrentItem(itemKey) {
      if (itemKey) {
        this.isItemHover = true;
        this.currentItemKey = itemKey;
      } else {
        this.isItemHover = false;
        this.currentItemKey = null;
      }
    },
    onClick(item) {
      if (this.hasNoChildren(item) || !item.action) return;
      item.action();
    },

    onMouseOver(item) {
      this.handleCurrentItem(item.key);
      this.$emit("hover", item);
    },
    onMouseLeave() {
      this.handleCurrentItem();
      this.$emit("hover");
    },
    hasNoChildren(item) {
      const { children } = item;
      return children && children.list.length === 0;
    },
    away() {
      if (this.isClickAway) {
        this.displayed = false;
      }
    },
  },
};
</script>

<style lang="scss" src="./_BIMDataMenu.scss"></style>
