<template>
  <div
    class="bimdata-input"
    :class="{
      error,
      success,
      disabled,
      loading,
      dark: isDark,
      empty:
        modelValue === undefined || modelValue === null || modelValue === '',
    }"
    :style="style"
  >
    <label
      v-if="isLabel && computedLabel !== ''"
      :for="`bimdata-input-${uuid}`"
      >{{ computedLabel }}</label
    >
    <div
      class="bimdata-input__content"
      style="position: relative"
      :style="{
        'background-color': computedBackgroundColor,
        'border-radius': borderRadius,
      }"
    >
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
          color: computedInputColor,
          '--input-color': computedInputColor,
        }"
      />
      <div class="bimdata-input__icon">
        <slot name="inputIcon"></slot>
      </div>
    </div>
    <div v-if="loading" class="bar"></div>
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
  inject: {
    darkThemeRef: {
      from: "BIMDATA_DESIGN_SYSTEM_DARK_THEME",
      default: () => ({ value: false }),
    },
  },
  props: {
    autocomplete: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: "var(--color-silver-light)",
    },
    backgroundColorDark: {
      type: String,
      default: "var(--color-quaternary)",
    },
    borderRadius: {
      type: String,
      default: "8px",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "32px",
    },
    isLabel: {
      type: Boolean,
      default: true,
    },
    inputColor: {
      type: String,
      default: "var(--color-primary)",
    },
    inputColorDark: {
      type: String,
      default: "var(--color-quaternary-lighter)",
    },
    label: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    margin: {
      type: String,
      default: "12px 0px",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    padding: {
      type: String,
      default: "0px 12px",
    },
    placeholder: {
      type: String,
      default: "",
    },
    success: {
      type: Boolean,
      default: false,
    },
    successMessage: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue", "blur", "keypress", "focus", "change"],
  computed: {
    style() {
      return {
        margin: `${this.margin}`,
      };
    },
    computedLabel() {
      // Si `label` est vide, utilise la valeur de `placeholder`
      return this.label || this.placeholder;
    },
    isDark() {
      return this.darkThemeRef;
    },
    computedBackgroundColor() {
      return this.isDark ? this.backgroundColorDark : this.backgroundColor;
    },
    computedInputColor() {
      return this.isDark ? this.inputColorDark : this.inputColor;
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
