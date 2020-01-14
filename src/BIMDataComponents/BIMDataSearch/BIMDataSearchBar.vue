<template>
  <div class="bimdata-search-bar">
    <span class="bimdata-search-icon">
      <BIMDataIcon icon-name="search" width="18" height="18" x="24" y="24" class="bimdata-fill-white">
        <BIMDataSearchIcon />
      </BIMDataIcon>
    </span>
    <input
      v-focus
      :value="value"
      @input="$emit('input', $event.target.value)"
      placeholder="Rechercher"
    />
  </div>
</template>
<script>

/* import BIMData ICONS */
import BIMDataIcon from "../BIMDataIcons/BIMDataIcon.vue";
import BIMDataSearchIcon from "../BIMDataIcons/BIMDataLibraryIcons/BIMDataSearchIcon.vue";
export default {
  components: {
    BIMDataIcon,
    BIMDataSearchIcon
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
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
  @import "../../assets/scss/_BIMDataVariables.scss";

  // import BIMDATA MIXINS
  @import "../../assets/scss/mixins/_font-size.scss";

  // import BIMDATA STYLE COMPONENT
  @import "./_BIMDataSearchBar.scss";
</style>