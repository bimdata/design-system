<template>
  <label
    :for="`bimdata-toggle-${_uid}`"
    :class="{ active: value, disabled }"
    class="toggle__button"
  >
    <slot></slot>
    <input
      type="checkbox"
      :disabled="disabled"
      :id="`bimdata-toggle-${_uid}`"
      v-model="checkedValue"
    />
    <span class="toggle__switch"></span>
    <slot name="right"></slot>
  </label>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    'input'
  ],
  computed: {
    checkedValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style lang="scss" >
@import "../../assets/scss/_BIMDataVariables.scss";
@import "./_BIMDataToggle.scss";
</style>
