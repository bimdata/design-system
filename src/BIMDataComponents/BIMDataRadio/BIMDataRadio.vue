<template>
  <button
    type="button"
    class="bimdata-radio"
    :class="{
      disabled,
      'bimdata-radio--checked': checked,
      'bimdata-radio--big': big,
      dark
    }"
    :disabled="disabled"
    @click="onClick"
  >
    <div class="bimdata-radio__btn">
      <div class="bimdata-radio__background" />
      <div class="bimdata-radio__circle"></div>
      <div class="bimdata-radio__dot"></div>
    </div>
    <div class="bimdata-radio__text">
      <slot>{{ text }}</slot>
    </div>
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
    dark: {
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

<style scoped src="./BIMDataRadio.css"></style>
