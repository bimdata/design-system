<template>
  <div class="bimdata-tabs" :style="{ width }">
    <BIMDataButton
      v-show="scrollValues.length > 1"
      :disabled="!btnLeftActive"
      @click="onLeftClick"
    >
      <BIMDataIcon
        name="chevron"
        class="fill-primary"
        size="xxs"
        :rotate="180"
      />
    </BIMDataButton>
    <ul
      ref="container"
      class="bimdata-tabs__content"
      :style="{
        width: containerWidth,
        minHeight: containerHeight,
      }"
    >
      <li
        v-for="(tab, i) of tabs"
        :key="tab"
        :ref="`tab-${i}`"
        class="bimdata-tabs__content__element"
        :class="{ active: tab === activeTab }"
        :style="{ minWidth: tabWidth }"
        @click="onTabClick(tab)"
      >
        {{ tab }}
      </li>
    </ul>
    <BIMDataButton
      v-show="scrollValues.length > 1"
      :disabled="!btnRightActive"
      @click="onRightClick"
    >
      <BIMDataIcon name="chevron" class="fill-primary" size="xxs" />
    </BIMDataButton>
  </div>
</template>

<script>
import BIMDataButton from "../BIMDataButton/BIMDataButton";
import BIMDataIcon from "../BIMDataIcon/BIMDataIcon";

export default {
  components: {
    BIMDataButton,
    BIMDataIcon,
  },
  props: {
    width: {
      type: [String, Number],
      default: "100%",
    },
    height: {
      type: [String, Number],
      default: "30px",
    },
    tabs: {
      type: Array,
      required: true,
    },
    tabSize: {
      type: [String, Number],
      default: "20%",
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
      activeTab: "",
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
    btnLeftActive() {
      return this.displayIndex > 0;
    },
    btnRightActive() {
      return this.displayIndex < this.scrollValues.length - 1;
    },
  },
  watch: {
    width() {
      this.$nextTick(() => this._setScrollValues());
    },
    tabs() {
      this.$nextTick(() => this._setScrollValues());
    },
    tabSize() {
      this.$nextTick(() => this._setScrollValues());
    },
    selected(value) {
      if (typeof value === "number" && value >= 0 && value < this.tabs.length) {
        this.activeTab = this.tabs[value];
        this.$emit("tab-selected", this.activeTab);
      } else if (this.tabs.includes(value)) {
        this.activeTab = value;
        this.$emit("tab-selected", this.activeTab);
      }
    },
  },
  mounted() {
    this._setScrollValues();
  },
  methods: {
    onLeftClick() {
      this.displayIndex--;
      this.$refs.container.scrollTo(this.scrollValues[this.displayIndex], 0);
    },
    onRightClick() {
      this.displayIndex++;
      this.$refs.container.scrollTo(this.scrollValues[this.displayIndex], 0);
    },
    onTabClick(tab) {
      this.activeTab = tab;
      this.$emit("tab-click", tab);
    },
    _setScrollValues() {
      this.displayIndex = 0;
      let tw = this.$refs["tab-0"][0].offsetWidth;
      let cw = this.$refs.container.offsetWidth;
      if (this.tabs.length * tw > cw) {
        cw -= 64; // Take buttons size into account
        this.scrollValues = [0].concat(
          this.tabs.map((_, i) => (i + 1) * tw - cw).filter(v => v > 0)
        );
      } else {
        this.scrollValues = [];
      }
    },
  },
};
</script>

<style scoped lang="scss">
// import BIMDATA VARIABLES
@import "../../assets/scss/_BIMDataVariables.scss";
// import BIMDATA UTILITIES
@import "../../assets/scss/mixins/_font-size.scss";
@import "../../assets/scss/mixins/_pseudo.scss";

@import "./_BIMDataTabs.scss";
</style>
