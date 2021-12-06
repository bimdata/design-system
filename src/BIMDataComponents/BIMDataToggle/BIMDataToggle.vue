<template>
  <label
    :for="`bimdata-toggle-${id}`"
    :class="{ active: modelValue, disabled }"
    class="toggle__button"
  >
    <slot></slot>
    <input
      type="checkbox"
      :disabled="disabled"
      :id="`bimdata-toggle-${id}`"
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
      id: null,
    };
  },
  beforeCreate() {
    // Math.random is random enough to avoid conflict
    this.id = Math.random().toString();
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
