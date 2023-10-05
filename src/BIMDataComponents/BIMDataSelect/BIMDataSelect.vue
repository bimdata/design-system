<script>
import { h } from "vue";
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
    nullLabel: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit, slots }) {
    return () =>
      h(
        props.multi ? BIMDataSelectMulti : BIMDataSelectSingle,
        {
          ...props,
          "onUpdate:modelValue": event => emit("update:modelValue", event),
        },
        {
          empty: () => slots.empty?.(),
        },
      );
  },
};
</script>
