<template>
  <div class="bimdata-search-bar" v-clickaway="away" :style="{ width: width, height: height }" :class="{'focus': focused}">
    <span class="bimdata-search-icon">
      <BIMDataIcon icon-name="search" width="13" height="13" x="23" y="23" class="bimdata-fill-primary">
        <BIMDataSearchIcon />
      </BIMDataIcon>
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
    <BIMDataButton width="25px" @click="clickClear()" v-if="clear && value !== ''">
      <BIMDataIcon icon-name="close" width="13" height="13" x="23" y="23" class="bimdata-fill-primary">
        <BIMDataCloseIcon />
      </BIMDataIcon>
    </BIMDataButton>
  </div>
</template>
<script>
import clickaway from "../../directives/click-away.js";
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";

/* import BIMData ICONS */
import BIMDataIcon from "../BIMDataIcons/BIMDataIcon.vue";
import BIMDataSearchIcon from "../BIMDataIcons/BIMDataLibraryIcons/BIMDataSearchIcon.vue";
import BIMDataCloseIcon from "../BIMDataIcons/BIMDataLibraryIcons/BIMDataCloseIcon";

export default {
  components: {
    BIMDataIcon,
    BIMDataSearchIcon,
    BIMDataCloseIcon,
    BIMDataButton
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
  props: {
    value: {
      type: String,
      required: true
    },
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
    },
    clear: {
      type: Boolean,
      default: false
    }
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
    }
  }
};
</script>

<style lang="scss">
  // import BIMDATA VARIABLES
  @import "@/assets/scss/_BIMDataVariables.scss";

  // import BIMDATA UTILITIES
  @import "@/assets/scss/utilities/_text.scss";

  // import BIMDATA STYLE COMPONENT
  @import "./_BIMDataSearchInput.scss";
</style>