<template>
  <div
    class="bimdata-select"
    :class="{
      active: isOpen,
      'not-empty': modelValue.length > 0,
    }"
    :style="{ width }"
  >
    <div class="bimdata-select__content">
      <div class="bimdata-select__content__value" @click="isOpen = !isOpen">
        <span>{{ displayedValue }}</span>
        <BIMDataIcon name="chevron" size="xxs" :rotate="isOpen ? 90 : 0" />
      </div>
      <label class="bimdata-select__content__label">
        {{ label }}
      </label>
      <span class="bimdata-select__content__underline"></span>
    </div>

    <transition name="slide-fade-down">
      <ul
        v-show="isOpen"
        v-clickaway="() => (isOpen = false)"
        class="bimdata-select__option-list"
      >
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
          <template v-if="isOptionGroup(option)">
            {{ optionLabel(option) }}
          </template>
          <BIMDataCheckbox
            v-else
            :modelValue="isSelected(option)"
            :disabled="isDisabled(option)"
          >
            {{ optionLabel(option) }}
          </BIMDataCheckbox>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import clickaway from "../../BIMDataDirectives/click-away";
// Components
import BIMDataCheckbox from "../BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataIcon from "../BIMDataIcon/BIMDataIcon.vue";

export default {
  components: {
    BIMDataCheckbox,
    BIMDataIcon,
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
  },
  emits: ["update:modelValue"],
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    displayedValue() {
      return this.modelValue.map(this.optionLabel).join(", ");
    },
  },
  methods: {
    optionValue(option) {
      if (this.optionKey && option) {
        return option[this.optionKey];
      }
      return option;
    },
    optionLabel(option) {
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
  },
};
</script>

<style scoped lang="scss">
@import "./_BIMDataSelect.scss";
</style>
