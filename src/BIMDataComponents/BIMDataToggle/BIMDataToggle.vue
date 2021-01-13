<template>
  <label
    :for="`bimdata-toggle-${uuid}`"
    :class="{ active: modelValue, disabled }"
    class="toggle__button"
  >
    <slot></slot>
    <input
      type="checkbox"
      :disabled="disabled"
      :id="`bimdata-toggle-${uuid}`"
      v-model="checkedValue"
    />
    <span class="toggle__switch"></span>
    <slot name="right"></slot>
  </label>
</template>

<script>
let uuid = 0;

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
  beforeCreate() {
    this.uuid = uuid.toString();
    uuid += 1;
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/_BIMDataVariables.scss";
@import "./_BIMDataToggle.scss";
</style>
