<template>
  <button
    type="button"
    class="bimdata-radio"
    :class="{
      disabled,
      'bimdata-radio--checked': checked,
      'bimdata-radio--big': big,
    }"
    :disabled="disabled"
    @click="onClick"
  >
    <div class="bimdata-radio__background" />
    <div class="bimdata-radio__circle"></div>
    <div class="bimdata-radio__dot"></div>
    <span class="bimdata-radio__text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  props: {
    big: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: null,
    },
    value: {
      default: true,
    },
    modelValue: {},
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    checked() {
      return this.modelValue === this.value;
    },
  },
  methods: {
    onClick() {
      this.$emit("update:modelValue", this.value);
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataRadio.scss"></style>
