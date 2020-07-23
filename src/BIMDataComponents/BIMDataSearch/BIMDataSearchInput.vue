<template>
  <div
    class="bimdata-search-bar"
    v-clickaway="away"
    :style="{ width: width, height: height }"
    :class="{ focus: focused }"
  >
    <span class="bimdata-search-icon">
      <BIMDataIcon name="search" size="xxs" />
    </span>
    <input
      :value="value"
      v-focus="autofocus"
      @focus="focused = true"
      @blur="focused = false"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      @keyup.enter="$emit('enter', $event.target.value)"
    />
    <BIMDataButton
      width="25px"
      @click="clickClear()"
      v-if="clear && value !== ''"
    >
      <BIMDataIcon name="close" size="xxs" />
    </BIMDataButton>
  </div>
</template>
<script>
import clickaway from "../../directives/click-away.js";
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";

/* import BIMData ICONS */
import BIMDataIcon from "../BIMDataIcons/BIMDataIcon.vue";

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
  props: {
    value: {
      type: String,
      required: true,
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
  },
  data() {
    return {
      inputVisible: false,
      focused: false,
    };
  },
  methods: {
    away() {
      this.inputVisible = false;
    },
    focus() {
      this.$refs.input && this.$refs.input.focus();
    },
    clickClear() {
      this.$emit("input", "");
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
@import "./_BIMDataSearchInput.scss";
</style>
