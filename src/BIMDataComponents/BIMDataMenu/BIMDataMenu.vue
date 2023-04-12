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
      class="bimdata-menu__item flex"
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
        <slot name="groupTitle" :item="item">
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
          <slot name="children" :children="item.children" :item="item">
            <BIMDataIcon name="chevron" size="xxs" margin="0 0 0 auto" />
            <template>
              <template
                v-if="hasNoChildren(item) && currentItemKey === item.key"
              >
                <slot
                  name="children-without-child"
                  :item="item"
                  :children="item.children"
                />
              </template>
              <template v-else>
                <div
                  class="bimdata-menu__item__children"
                  :style="getChildrenStyle(item)"
                >
                  <slot
                    name="children-content"
                    :item="item"
                    :children="item.children"
                  >
                    <ul :ref="`children-${item.key}`">
                      <slot
                        name="child-header"
                        :item="item"
                        :children="item.children"
                      />
                      <li
                        v-for="child in item.children.list"
                        :key="child.text"
                        @click.stop="child.action && child.action()"
                      >
                        <slot name="child-item" :child="child" :item="item">
                          <BIMDataTextbox :text="child.text" :tooltip="false" />
                        </slot>
                      </li>
                      <slot
                        name="child-footer"
                        :item="item"
                        :children="item.children"
                      />
                    </ul>
                  </slot>
                </div>
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
      const itemPos = this.$refs["item-" + item.key][0].getBoundingClientRect();
      this.handleCurrentItem(item.key);
      this.$emit("hover", { ...item, itemPos });
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
