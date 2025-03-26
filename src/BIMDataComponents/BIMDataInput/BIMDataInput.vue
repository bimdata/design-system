<template>
  <div
    class="bimdata-input"
    :class="{
      error,
      success,
      disabled,
      loading,
      empty:
        modelValue === undefined || modelValue === null || modelValue === '',
    }"
    :style="style"
  >
    <label v-if="label !== ''" :for="`bimdata-input-${uuid}`">{{
      label
    }}</label>
    <div class="bimdata-input__content" style="position: relative;" :style="{
          'background-color': backgroundColor,
        }">
      <div class="bimdata-input__icon left-icon">
        <slot name="leftInputIcon"></slot>
      </div>
      <input
        ref="input"
        :id="`bimdata-input-${uuid}`"
        @input="$emit('update:modelValue', $event.currentTarget.value)"
        :disabled="disabled"
        :value="modelValue"
        @focus="
          $event.target.select();
          $emit('focus', $event);
        "
        @blur="$emit('blur', $event)"
        @keypress="$emit('keypress', $event)"
        @change="$emit('change', $event)"
        :autocomplete="autocomplete ? 'on' : 'off'"
        v-bind="$attrs"
        :placeholder="placeholder"
        :style="{
          padding: padding,
          height: height,
        }"
      />
      <div class="bimdata-input__icon">
        <slot name="inputIcon"></slot>
      </div>
    </div>
    <span v-if="error" class="error">{{ errorMessage }}</span>
    <span v-if="success" class="success">{{ successMessage }}</span>
  </div>
</template>

<script>
let uuid = 0;

export default {
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    successMessage: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    margin: {
      type: String,
      default: "12px 0px",
    },
    padding: {
      type: String,
      default: "0px 12px",
    },
    autocomplete: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: "32px",
    },
    backgroundColor: {
      type: String,
      default: "var(--color-silver-light)",
    },
  },
  emits: ["update:modelValue", "blur", "keypress", "focus", "change"],
  computed: {
    style() {
      return {
        margin: `${this.margin}`,
      };
    },
  },
  beforeCreate() {
    this.uuid = uuid.toString();
    uuid += 1;
  },
  created() {
    this.$watch(
      () => this.success && this.error,
      successAndError => {
        if (successAndError) {
          throw new Error("Input state cannot be both success and error.");
        }
      },
    );
  },
  methods: {
    focus() {
      this.$refs.input && this.$refs.input.focus();
    },
    blur() {
      this.$refs.input && this.$refs.input.blur();
    },
  },
};
</script>

<style scoped src="./BIMDataInput.css"></style>
