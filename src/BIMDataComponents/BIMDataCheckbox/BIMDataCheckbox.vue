<template>
  <div
    class="bimdata-checkbox"
    :class="{ disabled, checked, indeterminate }"
    @click="onClick"
    :style="style"
  >
    <span class="bimdata-checkbox__mark"></span>
    <span class="bimdata-checkbox__text" v-if="text">
      <slot>{{ text }}</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "BIMDataCheckbox",
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  props: {
    modelValue: {
      type: Boolean,
      validator(value) {
        return value === null || typeof value === "boolean";
      },
    },
    text: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    margin: {
      type: String,
      default: "0px",
    },
  },
  emits: ["update:modelValue"],
  computed: {
    indeterminate() {
      return this.modelValue === null;
    },
    checked() {
      return this.modelValue === true || this.indeterminate;
    },
    style() {
      return {
        margin: `${this.margin}`,
      };
    },
  },
  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit("update:modelValue", this.checked ? false : true);
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataCheckbox.scss"></style>
