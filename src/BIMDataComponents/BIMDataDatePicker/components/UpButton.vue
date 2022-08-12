<template>
  <button
    class="bimdata-datepicker__up"
    :disabled="isDisabled"
    type="button"
    @click="$emit('select')"
    @keydown.down.prevent="$emit('set-focus', ['tabbableCell'])"
    @keydown.up.prevent="$emit('focus-input')"
    @keydown.left.prevent="$emit('set-focus')"
    @keydown.right.prevent="$emit('set-focus')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "UpButton",
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
