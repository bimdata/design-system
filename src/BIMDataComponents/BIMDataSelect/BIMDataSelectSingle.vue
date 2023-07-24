<template>
  <div
    class="bimdata-select"
    :class="{
      disabled,
      active: isOpen,
      'not-empty': modelValue !== undefined && modelValue !== null,
    }"
    :style="{ width }"
    v-clickaway="() => (isOpen = false)"
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
      <ul v-show="!disabled && isOpen" class="bimdata-select__option-list">
        <li
          v-if="nullValue"
          class="bimdata-select__option-list__entry"
          @click="onNullValueClick()"
        >
          {{ nullLabel || "None" }}
        </li>
        <li
          class="bimdata-select__option-list__entry"
          v-for="(option, index) of options"
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
  },
  emits: ["update:modelValue"],
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    displayedValue() {
      return this.optionLabel(this.modelValue);
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
    onOptionClick(option) {
      if (this.optionKey && (option.disabled || option.optionGroup)) {
        return;
      }
      this.$emit("update:modelValue", option);
      this.isOpen = false;
    },
    onNullValueClick() {
      this.$emit("update:modelValue", null);
      this.isOpen = false;
    },
  },
};
</script>

<style scoped lang="scss" src="./BIMDataSelect.scss"></style>
