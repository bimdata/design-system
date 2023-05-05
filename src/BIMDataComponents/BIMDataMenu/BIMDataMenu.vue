<template>
  <ul
    class="bimdata-menu bimdata-list"
    :style="{
      width,
      maxHeight,
    }"
    v-clickaway="away"
  >
    <li
      v-for="item in menuItems"
      :key="item.key"
      class="bimdata-menu__item flex"
      :class="[
        item.divider ? 'bimdata-menu__item__divider' : '',
        { hover: hoveredItemKey === item.key },
      ]"
      @click.stop="
        onItemClick(item);
        item.action && item.action();
      "
      @mouseover="onMouseOver(item)"
      @mouseleave="hoveredItemKey = null"
      :style="{
        color: item.color,
      }"
    >
      <div v-if="item.groupTitle" class="bimdata-menu__item__title">
        <slot name="groupTitle" :item="item">
          <span>{{ item.groupTitle }}</span>
        </slot>
      </div>
      <div
        v-if="item.text"
        :style="{
          'background-color':
            hoveredItemKey === item.key ? item.background : '',
        }"
        class="bimdata-menu__item__content flex"
        :class="{ 'bimdata-menu__item__content--active': isItemActive(item) }"
      >
        <slot name="item" :item="item">
          <BIMDataTextbox :text="item.text" :tooltip="false" width="80%" />
          <BIMDataIcon
            v-if="item.children"
            name="chevron"
            size="xxs"
            margin="0 0 0 auto"
          />
        </slot>
        <template v-if="isItemActive(item)">
          <slot name="children" :children="item.children" :item="item">
            <template>
              <div
                class="bimdata-menu__item__children"
                :style="{
                  width: subListWidth,
                  [childrenLeft ? 'left' : 'right']: `-${subListWidth}`,
                }"
              >
                <ul class="bimdata-list">
                  <li
                    v-for="child in item.children"
                    :key="child.text"
                    @click.stop="child.action && child.action()"
                    class="flex items-center p-x-12"
                  >
                    <slot name="child-item" :child="child" :item="item">
                      <BIMDataTextbox :text="child.text" :tooltip="false" />
                    </slot>
                  </li>
                </ul>
              </div>
            </template>
          </slot>
        </template>
      </div>
      <template v-if="item.divider">
        <div class="divider"></div>
      </template>
    </li>
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
    childrenLeft: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["hover"],
  data() {
    return {
      hoveredItemKey: null,
      clickedItemKey: null,
    };
  },
  methods: {
    isItemActive(item) {
      return (
        (item.children?.length > 0 &&
          this.hoveredItemKey === item.key &&
          !this.clickedItemKey) ||
        this.clickedItemKey === item.key
      );
    },
    away() {
      this.clickedItemKey = null;
    },
    onItemClick(item) {
      if (!item.children || item.key === this.clickedItemKey) {
        this.clickedItemKey = null;
      } else {
        this.clickedItemKey = item.key;
      }
    },
    onMouseOver(item) {
      this.hoveredItemKey = item.key;
      this.$emit("hover", item);
    },
  },
};
</script>

<style lang="scss" src="./_BIMDataMenu.scss"></style>
