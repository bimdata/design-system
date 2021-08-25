<template>
  <div
    class="bimdata-checkbox"
    :class="{ indeterminate, disabled, checked }"
    @click="onClick"
    :style="style"
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
    margin: {
      type: String,
      default: "0px",
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
    style() {
      return {
        margin: `${this.margin}`,
      };
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
// import BIMDATA VARIABLES
@import "../../assets/css/_BIMDataVariables.css";

// import BIMDATA UTILITIES
@import "../../assets/scss/mixins/_font-size.scss";

// import BIMDATA MIXINS
@import "../../assets/scss/mixins/_pseudo.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataCheckbox.scss";
</style>
