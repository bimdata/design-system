<template>
  <div
    class="bimdata-textarea"
    :class="{
      'not-empty':
        (modelValue !== null && modelValue !== '') ||
        placeholder !== null, error, success
    }"
    :style="{ 'min-width': width, 'min-height': height }"
  >
    <textarea
      v-focus="autofocus"
      :name="name"
      :id="name"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.currentTarget.value)"
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
  },
  emits: [
    "update:modelValue"
  ],
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
  },
};
</script>

<style lang="scss" scoped>
// import BIMDATA UTILITIES
@import "../../assets/scss/utilities/_text.scss";
</style>

<style lang="scss">
// import BIMDATA VARIABLES
@import "../../assets/css/_BIMDataVariables.css";

// import BIMDATA UTILITIES
@import "../../assets/scss/mixins/_font-size.scss";

// import BIMDATA MIXINS
@import "../../assets/scss/mixins/_pseudo.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataTextarea.scss";
</style>
