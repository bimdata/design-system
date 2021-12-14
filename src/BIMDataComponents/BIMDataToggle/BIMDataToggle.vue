<template>
  <label
    :for="`bimdata-toggle-${uniqueId}`"
    :class="{ active: modelValue, disabled }"
    class="toggle__button"
  >
    <slot></slot>
    <input
      type="checkbox"
      :disabled="disabled"
      :id="`bimdata-toggle-${uniqueId}`"
      v-model="checkedValue"
    />
    <span class="toggle__switch"></span>
    <slot name="right"></slot>
  </label>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      uniqueId: null,
    };
  },
  created() {
    // Math.random is random enough to avoid conflict
    this.uniqueId = Math.random().toString();
  },
  computed: {
    checkedValue: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit("update:modelValue", newValue);
      },
    },
  },
};
</script>

<style lang="scss" src="./_BIMDataToggle.scss"></style>
