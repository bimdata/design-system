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
      :name="name"
      :id="name"
      :value="modelValue"
      :placeholder="placeholder"
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
    placeholder: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: "",
    },
    width: {
      type: [Number, String],
      default: "150px",
    },
    height: {
      type: [Number, String],
      default: "32px",
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
      this.$refs.textarea && this.$refs.textarea.focus();
    },
    blur() {
      this.$refs.textarea && this.$refs.textarea.blur();
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

<style lang="scss" scoped>
@import "../../assets/css/variables.css";
@import "../../assets/css/utilities/_text.css";
</style>

<style lang="scss" src="./_BIMDataTextarea.scss"></style>
