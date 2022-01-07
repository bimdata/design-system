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
    <component ref="fitContent" :is="fitContent ? 'ResizableTextarea' : 'div'">
      <textarea
        v-focus="autofocus"
        :name="name"
        :id="name"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @input="$emit('update:modelValue', $event.currentTarget.value)"
      />
    </component>

    <label :for="name">{{ label }}</label>
    <span class="bar"></span>
    <span v-if="error" class="error">{{ errorMessage }}</span>
    <span v-if="success" class="success">{{ successMessage }}</span>
  </div>
</template>

<script>
import ResizableTextarea from "./ResizableTextarea";

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
  components: {
    ResizableTextarea,
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
          throw "Textarea state cannot be both success and error.";
      }
    );
  },
  methods: {
    focus() {
      this.$refs.input && this.$refs.input.focus();
    },
    triggerInput() {
      this.$nextTick(() => {
        this.$refs.fitContent.$el.dispatchEvent(new Event("input"));
      });
    },
  },
};
</script>

<style lang="scss" src="./_BIMDataTextarea.scss"></style>
