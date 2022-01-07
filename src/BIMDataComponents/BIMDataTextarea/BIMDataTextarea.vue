<template>
  <div
    class="bimdata-textarea"
    :class="{
      'not-empty':
        (modelValue !== null && modelValue !== '') || placeholder !== null,
      error,
      success,
    }"
    :style="{ 'min-width': width, 'min-height': height }"
  >
    <textarea
      ref="textarea"
      v-focus="autofocus"
      :name="name"
      :id="name"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :style="`${resizable ? '' : 'resize: none;'}`"
      @input="onInput"
      v-bind="$attrs"
    />

    <label :for="name">{{ label }}</label>
    <span class="bar"></span>
    <span v-if="error" class="error">{{ errorMessage }}</span>
    <span v-if="success" class="success">{{ successMessage }}</span>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      inserted: function (el, { value }) {
        if (value) {
          el.focus();
        }
      },
    },
  },
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  props: {
    name: {
      type: [String, Number],
      default: "",
    },
    resizable: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: "",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: "150px",
    },
    height: {
      type: [Number, String],
      default: "32px",
    },
    disabled: {
      type: Boolean,
      default: false,
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
    fitContent: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  created() {
    this.$watch(
      () => this.success && this.error,
      successAndError => {
        if (successAndError)
          throw new Error("Textarea state cannot be both success and error.");
      }
    );
  },
  mounted() {
    if (this.fitContent) {
      this.handleFitContent();
    }
  },
  methods: {
    focus() {
      this.$refs.input && this.$refs.input.focus();
    },
    handleFitContent() {
      this.$refs.textarea.style.height = "auto";
      this.$refs.textarea.style.height =
        this.$refs.textarea.scrollHeight + "px";
    },
    onInput(event) {
      this.$emit("update:modelValue", event.currentTarget.value);
      if (this.fitContent) {
        this.handleFitContent();
      }
    },
  },
};
</script>

<style lang="scss" src="./_BIMDataTextarea.scss"></style>
