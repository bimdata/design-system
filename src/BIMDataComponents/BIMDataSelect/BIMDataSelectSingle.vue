<template>
  <div
    class="bimdata-select"
    :class="{
      disabled,
      active: isOpen,
      'not-empty': isModelValueNotEmpty,
      dark: isDark,
      [color]: true,
    }"
    :style="{ width, height, fontSize }"
    v-clickaway="away"
  >
    <div class="bimdata-select__content">
      <div class="bimdata-select__content__value" @click="toggle">
        <span class="m-r-6">{{ displayedValue }}</span>
        <slot name="contentRight">
          <BIMDataIconChevron size="xxs" :rotate="isOpen ? 90 : 0" />
        </slot>
      </div>

      <label v-if="isLabel" class="bimdata-select__content__label">
        <slot name="labelLeft"></slot>
        {{ label }}
        <slot name="labelRight"></slot>
      </label>

      <label
        v-if="shouldDisplayPlaceholder"
        class="bimdata-select__content__placeholder"
      >
        <slot name="placeholder">{{ placeholder }}</slot>
      </label>
    </div>

    <transition name="slide-fade-down">
      <div
        v-show="!disabled && isOpen"
        class="bimdata-select__option-list"
        :class="{ 'rounded-element': isSelectedAndHoveredElementsRounded }"
      >
        <BIMDataSearch
          v-if="search"
          width="calc(100% - 12px)"
          :color="searchColor"
          radius
          :placeholder="searchPlaceholder"
          v-model="searchText"
          class="m-6"
        />
        <div v-if="filteredOptions.length === 0">
          <slot name="empty"></slot>
        </div>
        <ul class="bimdata-list m-y-6">
          <li
            v-if="nullValue"
            class="bimdata-select__option-list__entry"
            @click="selectOption(null)"
            :style="{ fontSize }"
          >
            {{ nullLabel || "None" }}
          </li>
          <li
            class="bimdata-select__option-list__entry"
            v-for="(option, index) in filteredOptions"
            :key="index"
            :class="{
              selected: isSelected(option),
              disabled: isDisabled(option),
              'option-group': isOptionGroup(option),
            }"
            @click="selectOption(option)"
            :style="{ fontSize }"
          >
            {{ optionLabel(option) }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import clickaway from "../../BIMDataDirectives/click-away.js";
import BIMDataIconChevron from "../BIMDataIcon/BIMDataIconStandalone/BIMDataIconChevron.vue";

export default {
  components: {
    BIMDataIconChevron,
  },
  directives: {
    clickaway,
  },
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  inject: {
    darkThemeRef: {
      from: "BIMDATA_DESIGN_SYSTEM_DARK_THEME",
      default: () => ({ value: false }),
    },
  },
  props: {
    width: [String, Number],
    height: [String, Number],
    fontSize: [String, Number],
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    isLabel: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
    optionKey: String,
    optionLabelKey: String,
    modelValue: [String, Object],
    nullValue: {
      type: Boolean,
      default: false,
    },
    nullLabel: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    search: {
      type: Boolean,
      default: false,
    },
    searchPlaceholder: {
      type: String,
      default: "Search",
    },
    clearSearchOnLeave: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "default",
      validator: value =>
        [
          "default",
          "primary",
          "secondary",
          "tertiary",
          "tertiary-light",
          "quaternary",
          "white",
        ].includes(value),
    },
    searchColor: {
      type: String,
      default: "primary",
      validator: value =>
        [
          "primary",
          "secondary",
          "tertiary",
          "quaternary",
          "quaternary-light",
        ].includes(value),
    },
    isSelectedAndHoveredElementsRounded: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      isOpen: false,
      searchText: "",
    };
  },
  computed: {
    isModelValueNotEmpty() {
      return this.modelValue != null;
    },

    shouldDisplayPlaceholder() {
      return !this.isLabel && this.modelValue == null && !this.isOpen;
    },

    displayedValue() {
      return this.optionLabel(this.modelValue);
    },

    filteredOptions() {
      const lowerCaseSearchText = this.searchText.toLowerCase();
      return this.options.filter(option => {
        const label = this.optionLabel(option).toLowerCase();
        return label.includes(lowerCaseSearchText);
      });
    },

    isDark() {
      return this.darkThemeRef;
    },
  },
  methods: {
    toggle() {
      if (!this.disabled) this.isOpen = !this.isOpen;
    },

    optionValue(option) {
      return this.optionKey ? option[this.optionKey] : option;
    },

    optionLabel(option) {
      if (option == null && this.nullLabel) return this.nullLabel;
      return this.optionLabelKey ? option[this.optionLabelKey] : option;
    },

    isSelected(option) {
      return this.optionValue(option) === this.optionValue(this.modelValue);
    },

    isDisabled(option) {
      return option && option.disabled;
    },

    isOptionGroup(option) {
      return option && option.optionGroup;
    },

    resetSearch() {
      if (this.clearSearchOnLeave) this.searchText = "";
    },

    selectOption(option) {
      if (option && (option.disabled || option.optionGroup)) return;
      this.$emit("update:modelValue", option);
      this.resetSearch();
      this.isOpen = false;
    },

    away() {
      this.isOpen = false;
      this.resetSearch();
    },
  },
};
</script>

<style scoped src="./BIMDataSelect.css"></style>
