<template>
  <div
    class="bimdata-select"
    :class="{
      disabled,
      active: isOpen,
      'not-empty': modelValue.length > 0,
    }"
    :style="{ width }"
    v-clickaway="away"
  >
    <div class="bimdata-select__content">
      <div class="bimdata-select__content__value" @click="toggle">
        <span>{{ displayedValue }}</span>
        <BIMDataIconChevron size="xxs" :rotate="isOpen ? 90 : 0" />
      </div>
      <label class="bimdata-select__content__label">
        {{ label }}
      </label>
      <span class="bimdata-select__content__underline"></span>
    </div>

    <transition name="slide-fade-down">
      <div v-show="!disabled && isOpen" class="bimdata-select__option-list">
        <BIMDataSearch
          v-if="search"
          width="calc(100% - 12px)"
          color="primary"
          radius
          :placeholder="searchPlaceholder"
          v-model="searchText"
          class="m-6"
        />
        <div v-if="filteredOptions.length === 0" class="p-x-6 p-b-6">
          <slot name="empty"></slot>
        </div>
        <ul class="bimdata-list m-b-6">
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
            <template v-if="isOptionGroup(option)">
              {{ optionLabel(option) }}
            </template>
            <BIMDataCheckbox
              v-else
              :modelValue="isSelected(option)"
              :disabled="isDisabled(option)"
              :text="optionLabel(option)"
            ></BIMDataCheckbox>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import clickaway from "../../BIMDataDirectives/click-away.js";
// Components
import BIMDataCheckbox from "../BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataIconChevron from "../BIMDataIcon/BIMDataIconStandalone/BIMDataIconChevron.vue";

export default {
  components: {
    BIMDataCheckbox,
    BIMDataIconChevron,
  },
  directives: {
    clickaway,
  },
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  props: {
    width: {
      type: [String, Number],
    },
    label: {
      type: String,
      default: null,
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
      type: Array,
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
    resetOnLeave: {
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
    displayedValue() {
      return this.modelValue.map(this.optionLabel).join(", ");
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
      const currentValues = this.modelValue.map(this.optionValue);
      return currentValues.includes(value);
    },
    isDisabled(option) {
      return this.optionKey && option && option.disabled;
    },
    isOptionGroup(option) {
      return this.optionKey && option && option.optionGroup;
    },
    onOptionClick(option) {
      if (this.optionKey && (option.disabled || option.optionGroup)) {
        return;
      }
      let options;
      if (this.isSelected(option)) {
        const value = this.optionValue(option);
        options = this.modelValue.filter(v => this.optionValue(v) !== value);
      } else {
        options = this.modelValue.concat(option);
      }
      this.$emit("update:modelValue", options);
    },
    resetSearch() {
      if (this.clearSearchOnLeave) {
        this.searchText = "";
      }
    },
    away() {
      this.isOpen = false;
      this.resetSearch();
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataSelect.scss"></style>
