<template>
  <div
    class="bimdata-select"
    :class="{ 'not-empty': modelValue != null && modelValue != modelValue.length }"
    :style="{ 'min-width': width }"
  >
    <div class="bimdata-select__content">
      <div
        class="select"
        @click="displayOptions = !displayOptions"
        :class="{ active: displayOptions }"
      >
        <span>
          {{ displayedValue }}
        </span>
        <BIMDataIcon name="chevron" size="xxs" />
      </div>
      <label>{{ label }}</label>
      <span class="bar"></span>
    </div>
    <transition name="slide-fade-down">
      <ul v-show="displayOptions" v-clickaway="away">
        <li v-if="nullValue" :nullValue="nullValue" @click="onNullValueClick()">
          None
        </li>
        <li
          v-for="(option, index) of options"
          :key="index"
          :class="{
            selected: multi ? modelValue.includes(option) : option === modelValue,
            disabled: optionKey && option.disabled,
            'option-group': isOptionGroup(option),
          }"
          @click="onOptionClick(option)"
        >
          <span v-if="isOptionGroup(option)">{{
            option[optionKey]
          }}</span>
          <template v-else>
            <BIMDataCheckbox
              v-if="multi"
              :modelValue="modelValue.includes(option)"
              :disabled="optionKey && option.disabled"
            >
              {{ optionKey ? option && option[optionKey] : option }}
            </BIMDataCheckbox>
            <span v-else>
              {{ optionKey ? option && option[optionKey] : option }}
            </span>
          </template>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import clickaway from "../../BIMDataDirectives/click-away";

import BIMDataIcon from "../BIMDataIcon/BIMDataIcon.vue";
import BIMDataCheckbox from "../BIMDataCheckbox/BIMDataCheckbox.vue";

export default {
  components: {
    BIMDataIcon,
    BIMDataCheckbox,
  },
  directives: { clickaway },
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  props: {
    optionKey: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
    multi: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Array, Object],
    },
    label: { type: String, default: null },
    width: { type: [String, Number] },
    nullValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    "update:modelValue"
  ],
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
        return this.formatValue(this.modelValue);
      } else {
        return this.optionKey ? this.modelValue[this.optionKey] : this.modelValue;
      }
    },
  },
  watch: {
    multi() {
      if (this.multi && !Array.isArray(this.modelValue)) {
        throw "value must be an array in multi mode.";
      }
      if (
        !this.multi &&
        typeof this.modelValue !== "string" &&
        typeof this.modelValue !== "number" &&
        this.modelValue !== null
      ) {
        throw "value must be a string or a number in non-multi mode.";
      }
    },
  },
  created() {
    this.$watch(
      () => this.multi && this.nullValue,
      res => {
        if (res) {
          throw "Can not have multi and nullValue together.";
        }
      }
    );
  },
  methods: {
    isOptionGroup(option) {
      return this.optionKey && option && option.optionGroup;
    },
    onOptionClick(option) {
      if (this.optionKey && (option.disabled || option.optionGroup)) return;
      if (this.multi) {
        if (this.modelValue.includes(option)) {
          this.$emit("update:modelValue", this.modelValue.filter(val => val !== option));
        } else {
          const copy = Array.from(this.modelValue);
          copy.push(option);
          this.$emit("update:modelValue", copy);
        }
      } else {
        this.$emit("update:modelValue", option);
        this.displayOptions = !this.displayOptions;
      }
    },
    onNullValueClick() {
      this.$emit("update:modelValue", null);
      this.displayOptions = !this.displayOptions;
    },
    away() {
      this.displayOptions = false;
    },
    formatValue(value) {
      return value
        .map(e => (this.optionKey ? e[this.optionKey] : e))
        .join(", ");
    },
  },
};
</script>

<style lang="scss" scoped>
// import BIMDATA UTILITIES
@import "../../assets/scss/utilities/_text.scss";
</style>

<style lang="scss">
// import BIMDATA VARIABLES
@import "../../assets/scss/_BIMDataVariables.scss";

// import BIMDATA UTILITIES
@import "../../assets/scss/mixins/_font-size.scss";

// import BIMDATA MIXINS
@import "../../assets/scss/mixins/_pseudo.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataSelect.scss";
</style>
