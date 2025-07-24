<template>
  <div
    class="bimdata-checkbox"
    :class="{ indeterminate, disabled, checked, dark: isDark }"
    @click="onClick"
    :style="style"
    v-bind="$attrs"
  >
    <span class="bimdata-checkbox__mark"></span>
    <span class="bimdata-checkbox__text" v-if="text">
      <slot>{{ text }}</slot>
    </span>
  </div>
</template>

<script>
import { inject, computed } from "vue";

export default {
  name: "BIMDataCheckbox",
  inheritAttrs: false,
  inject: {
    darkThemeRef: {
      from: "BIMDATA_DESIGN_SYSTEM_DARK_THEME",
      default: () => ({ value: false }),
    },
  },
  props: {
    text: {
      type: String,
      default: null,
    },
    modelValue: {
      type: Boolean,
      validator(value) {
        return value === null || typeof value === "boolean";
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    margin: {
      type: String,
      default: "0px",
    },
  },
  emits: ["update:modelValue"],
  computed: {
    indeterminate() {
      return this.modelValue === null;
    },
    checked() {
      return this.modelValue === true || this.indeterminate;
    },
    style() {
      return {
        margin: `${this.margin}`,
      };
    },
    isDark() {
      return this.darkThemeRef;
    },
  },
  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit("update:modelValue", this.checked ? false : true);
      }
    },
  },
};
</script>

<style scoped src="./BIMDataCheckbox.css"></style>
