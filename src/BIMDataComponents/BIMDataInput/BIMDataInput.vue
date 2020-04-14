<template>
  <div
    class="bimdata-input"
    :class="{ error, success, disabled, loading, 'not-empty': !!this.text }"
  >
    <input
      ref="input"
      :id="`bimdata-input-${_uid}`"
      @input="$emit('input', $event.currentTarget.value)"
      :disabled="disabled"
      :value="text"
      @focus="$event.target.select()"
      v-bind="$attrs"
    />
    <div class="bimdata-input__icon">
      <slot name="inputIcon"></slot>
    </div>
    <label :for="`bimdata-input-${_uid}`">{{ placeholder }}</label>
    <span class="bar"></span>
    <span v-if="error" class="error">{{ errorMessage }}</span>
    <span v-if="success" class="success">{{ successMessage }}</span>
  </div>
</template>

<script>
export default {
  model: {
    prop: "text",
    event: "input"
  },
  created() {
    this.$watch(
      () => this.success && this.error,
      successAndError => {
        if (successAndError)
          throw "Input state cannot be both success and error.";
      }
    );
  },
  props: {
    text: {
      type: [String, Number, Boolean]
    },
    placeholder: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ""
    },
    successMessage: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    focus() {
      this.$refs.input && this.$refs.input.focus();
    },
    blur() {
      this.$refs.input && this.$refs.input.blur();
    }
  }
};
</script>

<style lang="scss">
// import BIMDATA STYLE
@import "@/assets/scss/_BIMDataVariables.scss";
@import "@/assets/scss/mixins/_font-size.scss";
@import "@/assets/scss/mixins/_pseudo.scss";

// import COMPONENT STYLE
@import "./_keyframes.scss";
@import "./_BIMDataInput.scss";
</style>
