<template>
  <div class="bimdata-tabs" :style="{ width }">
    <BIMDataButton
      v-show="scrollValues.length > 1"
      :disabled="displayIndex === 0"
      @click="prev"
    >
      <BIMDataIconChevron class="fill-primary" size="xxs" :rotate="180" />
    </BIMDataButton>
    <ul
      ref="container"
      class="bimdata-tabs__container"
      :style="{
        width: containerWidth,
        minHeight: containerHeight,
      }"
    >
      <li
        v-for="tab of tabs"
        :key="tab.id"
        class="bimdata-tabs__container__tab"
        :class="{ active: tab.id === activeTab.id }"
        :style="{ minWidth: tabWidth }"
        @click="onTabClick(tab)"
      >
        <slot name="tab" :tab="tab" :active="tab.id === activeTab.id">
          {{ tab.label }}
        </slot>
      </li>
    </ul>
    <BIMDataButton
      v-show="scrollValues.length > 1"
      :disabled="displayIndex === scrollValues.length - 1"
      @click="next"
    >
      <BIMDataIconChevron class="fill-primary" size="xxs" />
    </BIMDataButton>
  </div>
</template>

<script>
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";
import { BIMDataIconChevron } from "../BIMDataIcon/BIMDataIconStandalone/index.js";

export default {
  components: {
    BIMDataButton,
    BIMDataIconChevron,
  },
  props: {
    width: {
      type: [String, Number],
      default: "100%",
    },
    height: {
      type: [String, Number],
      default: "32px",
    },
    tabs: {
      type: Array,
      required: true,
    },
    tabSize: {
      type: [String, Number],
      default: "120px",
    },
    selected: {
      type: [String, Number],
    },
  },
  emits: ["tab-click", "tab-selected"],
  data() {
    return {
      scrollValues: [],
      displayIndex: 0,
      activeTab: {},
    };
  },
  computed: {
    containerWidth() {
      return Number.isNaN(+this.width) ? this.width : `${this.width}px`;
    },
    containerHeight() {
      return Number.isNaN(+this.height) ? this.height : `${this.height}px`;
    },
    tabWidth() {
      return Number.isNaN(+this.tabSize) ? this.tabSize : `${this.tabSize}px`;
    },
  },
  watch: {
    tabs() {
      this.$nextTick(() => this._setScrollValues());
    },
    tabSize() {
      this.$nextTick(() => this._setScrollValues());
    },
    selected(value) {
      this._setSelected(value);
    },
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(() => this._setScrollValues());
    this.resizeObserver.observe(this.$refs.container);
    this._setScrollValues();
    this._setSelected(this.selected);
  },
  // Vue 3.x (for compatibility purpose)
  beforeUnmount() {
    this.resizeObserver.disconnect();
  },
  // Vue 2.x
  beforeDestroy() {
    this.resizeObserver.disconnect();
  },
  methods: {
    prev() {
      this.displayIndex--;
      this.$refs.container.scrollTo(this.scrollValues[this.displayIndex], 0);
    },
    next() {
      this.displayIndex++;
      this.$refs.container.scrollTo(this.scrollValues[this.displayIndex], 0);
    },
    onTabClick(tab) {
      this.activeTab = tab;
      this.$emit("tab-click", tab);
      this.$emit("tab-selected", tab);
    },
    _setSelected(value) {
      if (typeof value === "number" && value >= 0 && value < this.tabs.length) {
        this.activeTab = this.tabs[value];
        this.$emit("tab-selected", this.activeTab);
      } else {
        const tab = this.tabs.find(t => t.id === value);
        if (tab) {
          this.activeTab = tab;
          this.$emit("tab-selected", this.activeTab);
        }
      }
    },
    _setScrollValues() {
      this.displayIndex = 0;
      if (this.tabs.length > 0) {
        let cw = this.$refs.container.offsetWidth;
        let tw = this.$refs.container.querySelector(
          ".bimdata-tabs__container__tab"
        ).offsetWidth;

        const shouldComputeScrollValues =
          Math.floor(((this.tabs.length * tw - cw) * 10) / tw) > 0;

        if (shouldComputeScrollValues) {
          this.scrollValues = [0].concat(
            this.tabs.map((_, i) => (i + 1) * tw - cw).filter(v => v > 0)
          );
        } else {
          this.scrollValues = [];
        }
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataTabs.scss"></style>
