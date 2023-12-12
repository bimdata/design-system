<template>
  <div
    class="bimdata-input-outlined"
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
    <fieldset>
      <label v-if="label" :for="`bimdata-input-outlined-${uuid}`" class="m-b-6"
        ><slot name="label">Label here</slot></label
      >
      <div class="flex items-center">
        <slot name="prefix"></slot>
        <div class="bimdata-input-outlined__container">
          <div class="bimdata-input-outlined__container__prefix-inner">
            <slot name="prefixInner"></slot>
          </div>
          <input
            ref="input"
            :type="inputType"
            :id="`bimdata-input-${uuid}`"
            @input="$emit('update:modelValue', $event.currentTarget.value)"
            :disabled="disabled"
            :value="modelValue"
            :placeholder="placeholder"
            @focus="
              $event.target.select();
              $emit('focus', $event);
            "
            @blur="$emit('blur', $event)"
            @keypress="$emit('keypress', $event)"
            @change="$emit('change', $event)"
            :autocomplete="autocomplete ? 'on' : 'off'"
            v-bind="$attrs"
            :maxlength="maxLength"
          />
          <BIMDataSpinner v-if="loading" class="items-center"></BIMDataSpinner>
          <div class="bimdata-input-outlined__container__suffix-inner">
            <slot name="suffixInner"></slot>
          </div>
        </div>
        <slot name="suffix"></slot>
      </div>
    </fieldset>
    <div
      class="flex items-center"
      :class="error || success ? 'justify-between' : 'justify-end'"
    >
      <span v-if="error" class="error">{{ errorMessage }}</span>
      <span v-if="success" class="success">{{ successMessage }}</span>
      <span v-if="counter" class="counter m-l-12">
        {{ modelValue.length }}
        / {{ maxLength }}
      </span>
    </div>
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
    autocomplete: {
      type: Boolean,
      default: false,
    },
    counter: {
      type: Boolean,
      default: false,
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
    inputType: {
      type: String,
      default: "text",
      validator: type => {
        const possibleTypes = [
          "text",
          "password",
          "number",
          "file",
          "url",
          "time",
          "email",
          "tel",
        ];
        return possibleTypes.includes(type);
      },
    },
    label: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    margin: {
      type: String,
      default: "12px 0px",
    },
    maxLength: {
      type: Number,
      default: 100,
    },
    modelValue: {
      type: [String, Number],
      default: "",
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
    width: {
      type: String,
      default: "250px",
    },
  },
  emits: ["update:modelValue", "blur", "keypress", "focus", "change"],
  computed: {
    style() {
      return {
        margin: `${this.margin}`,
        width: `${this.width}`,
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
      this.$refs.input?.focus();
    },
    blur() {
      this.$refs.input?.blur();
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataInputOutlined.scss"></style>
