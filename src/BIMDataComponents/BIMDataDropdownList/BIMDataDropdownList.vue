<template>
  <div
    class="bimdata-dropdown-list"
    v-clickaway="away"
    :direction="directionClass"
    :closeOnElementClick="closeOnElementClick"
    :style="style"
  >
    <div
      class="bimdata-dropdown-list__content"
      :class="{ active: displayed, disabled, dark, border }"
      @click="onHeaderClick"
      :style="style"
    >
      <slot name="header" :isOpen="displayed"></slot>
      <BIMDataButton
        :color="!dark ? 'white' : 'quaternary'"
        icon
        radius
        fill
        width="21px"
        height="21px"
      >
        <BIMDataIconChevron size="xxxs" :rotate="iconRotation" />
      </BIMDataButton>
      <slot name="contentAfterBtn" :isOpen="displayed"></slot>
    </div>
    <transition :name="`slide-fade-${transitionName}`">
      <div>
        <BIMDataPaginatedList
          :class="`submenu submenu--${directionClass}`"
          v-show="displayed"
          :list="filteredList"
          :perPage="perPage"
          :elementKey="elementKey"
          @element-click="onElementClick"
          :loading="loading"
          :background-color="!dark ? 'var(--color-white)' : 'var(--color-quaternary)'"
          :dark="dark"
          :borderRadius="borderRadius"
        >
          <template #header>
            <BIMDataSearch
              v-if="search"
              width="calc(100% - 12px)"
              color="primary"
              radius
              :placeholder="searchPlaceholder"
              v-model="searchText"
              class="m-6"
            />
            <div v-if="filteredList.length === 0" class="p-x-6 p-b-6">
              <slot name="empty"></slot>
            </div>
          </template>
          <template #element="{ element }">
            <slot
              name="element"
              :element="element"
              :close="away"
              :isOpen="displayed"
            ></slot>
          </template>
        </BIMDataPaginatedList>
      </div>
    </transition>
  </div>
</template>

<script>
import clickaway from "../../BIMDataDirectives/click-away.js";

import BIMDataIconChevron from "../BIMDataIcon/BIMDataIconStandalone/BIMDataIconChevron.vue";
import BIMDataPaginatedList from "../BIMDataPaginatedList/BIMDataPaginatedList.vue";
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";

export default {
  components: {
    BIMDataIconChevron,
    BIMDataPaginatedList,
    BIMDataButton,
  },
  directives: { clickaway },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    perPage: {
      type: Number,
      default: 10,
    },
    elementKey: {
      type: String,
    },
    elementLabelKey: {
      type: String,
    },
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
    loading: {
      type: Boolean,
      default: false,
    },
    closeOnElementClick: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "220px",
    },
    height: {
      type: String,
      default: "36px",
    },
    borderRadius: {
      type: String,
      default: "3px",
    },
    search: {
      type: Boolean,
      default: false,
    },
    searchPlaceholder: {
      type: String,
      default: "Search",
    },
    dark: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    }
  },
  emits: ["element-click"],
  data() {
    return {
      displayed: false,
      searchText: "",
    };
  },
  computed: {
    style() {
      return {
        "min-width": `${this.width}`,
        "min-height": `${this.height}`,
        'border-radius': `${this.borderRadius}`
      };
    },
    iconRotation() {
      return this.displayed ? (this.directionClass === "up" ? -90 : 90) : 0;
    },
    filteredList() {
      if (this.searchText === "") {
        return this.list;
      } else {
        const lowerCaseSearchText = this.searchText.toLowerCase();
        if (this.elementLabelKey) {
          return this.list.filter(element =>
            element[this.elementLabelKey]
              .toLowerCase()
              .includes(lowerCaseSearchText),
          );
        }
        return this.list.filter(element =>
          element.toLowerCase().includes(lowerCaseSearchText),
        );
      }
    },
  },
  methods: {
    onHeaderClick() {
      if (!this.disabled) {
        this.displayed = !this.displayed;
      }
    },
    onElementClick($event) {
      this.$emit("element-click", $event);
      if (this.closeOnElementClick) {
        this.displayed = false;
      }
    },
    away() {
      this.displayed = false;
    },
  },
};
</script>

<style scoped lang="scss" src="./BIMDataDropdownList.css"></style>
