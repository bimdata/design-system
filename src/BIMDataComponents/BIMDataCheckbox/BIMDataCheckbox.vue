<template>
  <div
    class="bimdata-checkbox"
    :class="{ indeterminate, disabled, checked, dark: isDark }"
    @click="onClick"
    :style="style"
    v-bind="$attrs"
  >
    <span class="bimdata-checkbox__mark" :style="checkboxStyle"></span>
    <span class="bimdata-checkbox__text" v-if="text">
      <slot>{{ text }}</slot>
    </span>
  </div>
</template>

<script>
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
    fontSize: {
      type: [String, Number],
      default: "12px",
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
        fontSize: this.fontSize
          ? typeof this.fontSize === "number"
            ? `${this.fontSize}px`
            : this.fontSize
          : null,
      };
    },
    checkboxStyle() {
      const size =
        typeof this.fontSize === "number"
          ? `${this.fontSize}px`
          : this.fontSize;

      return {
        width: `clamp(14px, calc(${size} * 1.1), 20px)`,
        height: `clamp(14px, calc(${size} * 1.1), 20px)`,
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
