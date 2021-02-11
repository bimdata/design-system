<template>
  <div
    class="bimdata-search-bar"
    v-clickaway="away"
    :style="{ width: width, height: height }"
    :class="{ focus: focused, ...classes }"
  >
    <span class="bimdata-search-icon">
      <BIMDataIcon name="search" size="xxs" />
    </span>
    <input
      ref="input"
      :value="modelValue"
      v-focus="autofocus"
      @focus="focused = true"
      @blur="focused = false"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      @keyup.enter="$emit('enter', $event.target.value)"
    />
    <BIMDataButton
      width="25px"
      @click="clickClear()"
      v-if="clear && modelValue !== ''"
    >
      <BIMDataIcon name="close" size="xxs" />
    </BIMDataButton>
  </div>
</template>
<script>
import clickaway from "../../BIMDataDirectives/click-away.js";
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";
import colors from "../../assets/colors.js";

/* import BIMData ICONS */
import BIMDataIcon from "../BIMDataIcon/BIMDataIcon.vue";

export default {
  components: {
    BIMDataIcon,
    BIMDataButton,
  },
  directives: {
    focus: {
      inserted: function (el, { value }) {
        if (value) {
          el.focus();
        }
      },
    },
    clickaway,
  },
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  props: {
    modelValue: {
      type: String,
    },
    placeholder: {
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
    autofocus: {
      type: Boolean,
      default: false,
    },
    clear: {
      type: Boolean,
      default: false,
    },
    radius: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "default",
      validator: color => colors.includes(color),
    },
  },
  emits: ["update:modelValue", "enter", "clear"],
  data() {
    return {
      inputVisible: false,
      focused: false,
    };
  },
  computed: {
    classes() {
      return {
        "bimdata-search-bar__radius": this.radius,
        "bimdata-search-bar__square": this.square,
        [`bimdata-search-bar--${this.color}`]: this.color,
      };
    },
  },
  methods: {
    away() {
      this.inputVisible = false;
    },
    focus() {
      this.$refs.input && this.$refs.input.focus();
    },
    blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    clickClear() {
      this.$emit("update:modelValue", "");
      this.$emit("clear");
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
@import "../../assets/scss/_BIMDataVariables.scss";

// import BIMDATA UTILITIES
@import "../../assets/scss/mixins/_font-size.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataSearch.scss";
</style>
