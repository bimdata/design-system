<template>
  <div class="bimdata-select" :class="{'not-empty' : value != null}" :style="{'min-width': width}">
    <div class="bimdata-select__content">
      <div
        class="select"
        @click="displayOptions = !displayOptions"
        :class="{active:displayOptions}"
      >
        <span>{{value}}</span>
        <BIMDataIcon
          class="icon-chevron"
          icon-name="chevron-right"
          width="10"
          height="10"
          x="23"
          y="23"
        >
          <BIMDataChevronRightIcon />
        </BIMDataIcon>
      </div>
      <label>{{ label }}</label>
      <span class="bar"></span>
    </div>
    <transition name="slide-fade-down">
      <ul v-show="displayOptions" v-clickaway="away">
        <li
          v-for="(option, index) of options"
          :key="index"
          :class="{selected: option === value}"
          @click="onOptionClick(option)"
        >{{option}}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
import clickaway from "../../directives/click-away";

import BIMDataIcon from "../BIMDataIcons/BIMDataIcon.vue";
import BIMDataChevronRightIcon from "../BIMDataIcons/BIMDataLibraryIcons/BIMDataChevronRightIcon.vue";
export default {
  components: {
    BIMDataIcon,
    BIMDataChevronRightIcon
  },
  data() {
    return {
      displayOptions: false
    };
  },
  directives: { clickaway },
  props: {
    options: { type: Array, default: () => [] },
    value: { type: String, default: null },
    label: { type: String, default: null },
    width: { type: [String, Number]}
  },
  methods: {
    onOptionClick(option) {
      this.$emit("option-click", option);
      this.displayOptions = !this.displayOptions;
    },
    away() {
      this.displayOptions = false;
    }
  }
};
</script>

<style lang="scss">
  // import BIMDATA VARIABLES
  @import "../../assets/scss/_BIMDataVariables.scss";

  // import BIMDATA MIXINS
  @import "../../assets/scss/mixins/_font-size.scss";
  @import "../../assets/scss/mixins/_pseudo.scss";

  // import BIMDATA STYLE COMPONENT
  @import "./_BIMDataSelect.scss";
</style>