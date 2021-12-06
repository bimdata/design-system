<template>
  <label class="bimdata-radio" :class="{ disabled, 'bimdata-radio--big': big }">
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
  emits: ["update:modelValue"],
  methods: {
    onInput() {
      this.$emit("update:modelValue", this.value);
    },
  },
};
</script>

<style lang="scss" src="./_BIMDataRadio.scss"></style>
