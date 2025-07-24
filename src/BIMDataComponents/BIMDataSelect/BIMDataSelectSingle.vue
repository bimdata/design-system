<template>
  <div
    class="bimdata-select"
    :class="{
      disabled,
      active: isOpen,
      'not-empty': modelValue !== undefined && modelValue !== null,
      dark: isDark,
      [color]: true,
    }"
    :style="{ width }"
    v-clickaway="away"
  >
    <div class="bimdata-select__content">
      <div class="bimdata-select__content__value" @click="toggle">
        <span class="m-r-6">{{ displayedValue }}</span>
        <BIMDataIconChevron size="xxs" :rotate="isOpen ? 90 : 0" />
      </div>
      <label v-if="isLabel" class="bimdata-select__content__label">
        {{ label }}
      </label> 
    </div>

    <transition name="slide-fade-down">
      <div v-show="!disabled && isOpen" class="bimdata-select__option-list">
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
            @click="onNullValueClick()"
          >
            {{ nullLabel || "None" }}
          </li>
          <li
            class="bimdata-select__option-list__entry"
            v-for="(option, index) of filteredOptions"
            :key="index"
            :class="{
              selected: isSelected(option),
              disabled: isDisabled(option),
              'option-group': isOptionGroup(option),
            }"
            @click="onOptionClick(option)"
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
// Components
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
    width: {
      type: [String, Number],
    },
    label: {
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
    optionKey: {
      type: String,
    },
    optionLabelKey: {
      type: String,
    },
    modelValue: {
      type: [String, Object],
    },
    nullValue: {
      type: Boolean,
      default: false,
    },
    nullLabel: {
      type: String,
    },
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
        ["default", "primary", "secondary", "tertiary", "tertiary-light", "quaternary"].includes(value),
    },
    searchColor: {
      type: String,
      default: "primary",
      validator: value =>
        ["primary", "secondary", "tertiary", "quaternary"].includes(value),
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
    displayedValue() {
      return this.optionLabel(this.modelValue);
    },
    filteredOptions() {
      if (this.searchText === "") {
        return this.options;
      } else {
        const lowerCaseSearchText = this.searchText.toLowerCase();
        if (this.optionLabelKey) {
          return this.options.filter(option =>
            option[this.optionLabelKey]
              .toLowerCase()
              .includes(lowerCaseSearchText),
          );
        }
        if (this.optionKey) {
          return this.options.filter(
            option =>
              option.optionGroup ||
              option[this.optionKey]
                .toLowerCase()
                .includes(lowerCaseSearchText),
          );
        } else {
          return this.options.filter(option =>
            option.toLowerCase().includes(lowerCaseSearchText),
          );
        }
      }
    },
    isDark() {
      return this.darkThemeRef;
    },
  },
  methods: {
    toggle() {
      if (!this.disabled) {
        this.isOpen = !this.isOpen;
      }
    },
    optionValue(option) {
      if (this.optionKey && option) {
        return option[this.optionKey];
      }
      return option;
    },
    optionLabel(option) {
      if (this.nullLabel && option == null) {
        return this.nullLabel;
      }
      if (this.optionLabelKey && option) {
        return option[this.optionLabelKey];
      }
      if (this.optionKey && option) {
        return option[this.optionKey];
      }
      return option;
    },
    isSelected(option) {
      const value = this.optionValue(option);
      const currentValue = this.optionValue(this.modelValue);
      return currentValue === value;
    },
    isDisabled(option) {
      return this.optionKey && option && option.disabled;
    },
    isOptionGroup(option) {
      return this.optionKey && option && option.optionGroup;
    },
    resetSearch() {
      if (this.clearSearchOnLeave) {
        this.searchText = "";
      }
    },
    onOptionClick(option) {
      if (this.optionKey && (option.disabled || option.optionGroup)) {
        return;
      }
      this.$emit("update:modelValue", option);
      this.resetSearch();
      this.isOpen = false;
    },
    onNullValueClick() {
      this.$emit("update:modelValue", null);
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
