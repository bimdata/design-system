<template>
  <label class="bimdata-radio" :class="{disabled}">
    <input
      type="radio"
      @input="onInput"
      :checked="modelValue === value"
      :name="name"
      :id="id"
      :value="value"
      :disabled="disabled"
    />
    <span class="bimdata-radio__text">{{ text }}</span>
  </label>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: {
    text: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: "option",
    },
    id: {
      type: [String, Number],
    },
    value: {},
    modelValue: {},
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    "update:modelValue"
  ],
  methods: {
    onInput() {
      this.$emit("update:modelValue", this.value);
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
@import "./BIMDataRadio.scss";
</style>
