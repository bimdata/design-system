<template>
  <div
    class="bimdata-checkbox"
    :class="{ indeterminate, disabled, checked }"
    @click="onClick"
  >
    <span class="bimdata-checkbox__mark"></span>
    <span class="bimdata-checkbox__text">
      <slot>{{ text }}</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "BIMDataCheckbox",
  inheritAttrs: false,
  model: {
    prop: "modelValue",
    event: "update:modelValue",
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
  },
  emits: [
    "update:modelValue"
  ],
  computed: {
    indeterminate() {
      return this.modelValue === null;
    },
    checked() {
      return this.modelValue === true || this.indeterminate;
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

<style lang="scss" scoped>
// import BIMDATA UTILITIES
@import "../../assets/scss/utilities/_text.scss";
</style>

<style lang="scss">
// import BIMDATA STYLE COMPONENT
@import "./_BIMDataCheckbox.scss";
</style>
