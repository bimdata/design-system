<template>
  <component
    :is="selectorComponent"
    v-bind="$props"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<script>
// Components
import BIMDataSelectMulti from "./BIMDataSelectMulti.vue";
import BIMDataSelectSingle from "./BIMDataSelectSingle.vue";

export default {
  components: {
    BIMDataSelectMulti,
    BIMDataSelectSingle,
  },
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  props: {
    width: {
      type: [String, Number],
      default: "100%",
    },
    label: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
    optionKey: {
      type: String,
    },
    optionLabelKey: {
      type: String,
    },
    modelValue: {
      type: [String, Object, Array],
    },
    multi: {
      type: Boolean,
      default: false,
    },
    nullValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    selectorComponent() {
      return this.multi ? "BIMDataSelectMulti" : "BIMDataSelectSingle";
    },
  },
};
</script>
