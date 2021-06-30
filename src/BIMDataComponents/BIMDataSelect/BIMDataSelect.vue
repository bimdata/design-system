<template>
  <div
    class="bimdata-select"
    :class="{
      active: displayOptions,
      'not-empty': modelValue !== null,
    }"
    :style="{ 'min-width': width }"
  >
    <div class="bimdata-select__content">
      <div
        class="bimdata-select__content__value"
        @click="displayOptions = !displayOptions"
      >
        <span>{{ displayedValue }}</span>
        <BIMDataIcon
          name="chevron"
          size="xxs"
          :rotate="displayOptions ? 90 : 0"
        />
      </div>
      <label class="bimdata-select__content__label">
        {{ label }}
      </label>
      <span class="bimdata-select__content__underline"></span>
    </div>

    <transition name="slide-fade-down">
      <ul
        v-show="displayOptions"
        class="bimdata-select__option-list"
        v-clickaway="() => (displayOptions = false)"
      >
        <li
          v-if="nullValue"
          class="bimdata-select__option-list__entry"
          @click="onNullValueClick()"
        >
          None
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
          <template v-if="multi">
            <BIMDataCheckbox
              :modelValue="isSelected(option)"
              :disabled="isDisabled(option)"
            >
              {{ optionLabel(option) }}
            </BIMDataCheckbox>
          </template>
          <template v-else>
            {{ optionLabel(option) }}
          </template>
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
    BIMDataIcon,
    BIMDataCheckbox,
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
      type: [String, Object, Array],
    },
    multi: {
      type: Boolean,
      default: false,
    },
    nullValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      displayOptions: false,
      selectedOptions: this.modelValue,
    };
  },
  computed: {
    displayedValue() {
      if (this.modelValue === null || this.modelValue === undefined) {
        return null;
      } else if (this.multi) {
        return this.modelValue
          .map(v => (this.optionKey ? v[this.optionKey] : v))
          .join(", ");
      } else {
        return this.optionKey
          ? this.modelValue[this.optionKey]
          : this.modelValue;
      }
    },
  },
  watch: {
    multi() {
      if (this.nullValue) {
        throw new Error("Can not have multi and nullValue together.");
      }
      if (this.multi && !Array.isArray(this.modelValue)) {
        throw new Error(
          "[BIMDataSelect]: value must be an array in multi mode."
        );
      }
      if (
        !this.multi &&
        typeof this.modelValue !== "string" &&
        typeof this.modelValue !== "number" &&
        this.modelValue !== null
      ) {
        throw new Error(
          "value must be a string or a number in non-multi mode."
        );
      }
    },
    nullValue() {
      if (this.multi) {
        throw new Error("Can not have multi and nullValue together.");
      }
    },
  },
  methods: {
    optionValue(option) {
      return this.optionKey && option ? option[this.optionKey] : option;
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
      const optionValue = this.optionValue(option);
      return this.multi
        ? this.modelValue.includes(optionValue)
        : this.modelValue === optionValue;
    },
    isDisabled(option) {
      return this.optionKey && option && option.disabled;
    },
    isOptionGroup(option) {
      return this.optionKey && option && option.optionGroup;
    },
    onNullValueClick() {
      this.$emit("update:modelValue", this.multi ? [] : null);
      this.displayOptions = !this.displayOptions;
    },
    onOptionClick(option) {
      if (this.optionKey && (option.disabled || option.optionGroup)) {
        return;
      }
      let value = this.optionValue(option);
      if (this.multi) {
        if (this.isSelected(option)) {
          value = this.modelValue.filter(v => v !== value);
        } else {
          value = this.modelValue.concat(value);
        }
      }
      this.$emit("update:modelValue", value);
      this.displayOptions = !this.displayOptions;
    },
  },
};
</script>

<style lang="scss" scoped>
// import BIMDATA UTILITIES
@import "../../assets/scss/utilities/_text.scss";

// import BIMDATA VARIABLES
@import "../../assets/scss/_BIMDataVariables.scss";

// import BIMDATA UTILITIES
@import "../../assets/scss/mixins/_font-size.scss";

// import BIMDATA MIXINS
@import "../../assets/scss/mixins/_pseudo.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataSelect.scss";
</style>
