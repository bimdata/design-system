<template>
  <div
    class="bimdata-search-bar"
    v-clickaway="away"
    :style="{ width: width, height: height }"
    :class="{ focus: focused, disabled, ...classes }"
  >
    <span class="bimdata-search-icon">
      <BIMDataIconSearch size="xxs" />
    </span>
    <input
      ref="input"
      :value="modelValue"
      v-focus="autofocus"
      @focus="focused = true"
      @blur="focused = false"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      @keyup.enter="$emit('enter', $event.target.value)"
      :autocomplete="autocomplete ? 'on' : 'off'"
      :disabled="disabled"
    />
    <BIMDataButton
      width="25px"
      height="25px"
      @click="clickClear()"
      padding="0 12px"
      v-if="clear && modelValue !== ''"
    >
      <BIMDataIconClose size="xxs" />
    </BIMDataButton>
  </div>
</template>
<script>
import clickaway from "../../BIMDataDirectives/click-away.js";
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";
import colors from "../../assets/colors.js";

import {
  BIMDataIconClose,
  BIMDataIconSearch,
} from "../BIMDataIcon/BIMDataIconStandalone/index.js";

export default {
  components: {
    BIMDataIconClose,
    BIMDataIconSearch,
    BIMDataButton,
  },
  directives: {
    focus: {
      inserted: function (el, { value }) {
        if (value) {
          el.focus();
        }
      },
    },
    clickaway,
  },
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  props: {
    modelValue: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "",
    },
    width: {
      type: [Number, String],
      default: "150px",
    },
    height: {
      type: [Number, String],
      default: "32px",
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    clear: {
      type: Boolean,
      default: false,
    },
    radius: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "default",
      validator: color => colors.includes(color),
    },
    autocomplete: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue", "enter", "clear"],
  data() {
    return {
      inputVisible: false,
      focused: false,
    };
  },
  computed: {
    classes() {
      return {
        "bimdata-search-bar__radius": this.radius,
        "bimdata-search-bar__square": this.square,
        [`bimdata-search-bar__${this.color}`]: this.color,
      };
    },
  },
  methods: {
    away() {
      this.inputVisible = false;
    },
    focus() {
      this.$refs.input && this.$refs.input.focus();
    },
    blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    clickClear() {
      this.$emit("update:modelValue", "");
      this.$emit("clear");
    },
  },
};
</script>

<style scoped src="./BIMDataSearch.css"></style>
