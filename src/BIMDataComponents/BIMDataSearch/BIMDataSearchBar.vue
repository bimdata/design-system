<template>
  <div class="bimdata-search-bar" v-clickaway="away" :style="{ width: width, height: height }" :class="{'focus': focused}">
    <span class="bimdata-search-icon">
      <BIMDataIcon icon-name="search" width="13" height="13" x="23" y="23" class="bimdata-fill-primary">
        <BIMDataSearchIcon />
      </BIMDataIcon>
    </span>
    <input
      v-focus="autofocus"
      @focus="focused = true"
      @blur="focused = false"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
import clickaway from "../../directives/click-away.js";

/* import BIMData ICONS */
import BIMDataIcon from "../BIMDataIcons/BIMDataIcon.vue";
import BIMDataSearchIcon from "../BIMDataIcons/BIMDataLibraryIcons/BIMDataSearchIcon.vue";
export default {
  components: {
    BIMDataIcon,
    BIMDataSearchIcon
  },
  data() {
    return {
      inputVisible: false,
      focused: false,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: "150px"
    },
    height: {
      type: [Number, String],
      default: "32px"
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    away() {
      this.inputVisible = false;
    },
    focus() {
      this.$refs.input && this.$refs.input.focus();
    }
  },
  directives: {
    focus: {
      inserted: function(el, {value}) {
        if (value) {
          el.focus();
        }
      }
    },
    clickaway
  },
  watch: {
    text(value) {
      this.$emit("change", value);
    }
  }
};
</script>

<style lang="scss">
  // import BIMDATA VARIABLES
  @import "@/assets/scss/_BIMDataVariables.scss";

  // import BIMDATA MIXINS
  @import "@/assets/scss/mixins/_font-size.scss";

  // import BIMDATA STYLE COMPONENT
  @import "./_BIMDataSearchBar.scss";
</style>