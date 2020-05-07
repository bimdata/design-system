<template>
  <div
    class="bimdata-select"
    :class="{ 'not-empty': value != null && value != value.length}"
    :style="{ 'min-width': width }"
  >
    <div class="bimdata-select__content">
      <div
        class="select"
        @click="displayOptions = !displayOptions"
        :class="{ active: displayOptions }"
      >
        <span>{{
          multi ? (value.length ? formatValue(value) : null) : value
        }}</span>
        <BIMDataIcon
          class="icon-chevron bimdata-fill-default"
          icon-name="chevron-right"
          width="10"
          height="10"
          x="23"
          y="23"
        >
          <BIMDataChevronIcon />
        </BIMDataIcon>
      </div>
      <label>{{ label }}</label>
      <span class="bar"></span>
    </div>
    <transition name="slide-fade-down">
      <ul v-show="displayOptions" v-clickaway="away">
        <li v-if="nullValue" :nullValue="nullValue" @click="onNullValueClick()">
          None
        </li>
        <li
          v-for="(option, index) of options"
          :key="index"
          :class="{
            selected: multi ? value.includes(option) : option === value
          }"
          @click="onOptionClick(option)"
        >
          <BIMDataCheckbox
            v-if="multi"
            :text="option"
            :state="value.includes(option)"
          ></BIMDataCheckbox>
          <span v-else>{{ option }}</span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import clickaway from "../../directives/click-away";

import BIMDataIcon from "../BIMDataIcons/BIMDataIcon.vue";
import BIMDataChevronIcon from "../BIMDataIcons/BIMDataLibraryIcons/BIMDataChevronIcon.vue";
import BIMDataCheckbox from "../BIMDataCheckbox/BIMDataCheckbox.vue";

export default {
  components: {
    BIMDataIcon,
    BIMDataChevronIcon,
    BIMDataCheckbox
  },
  directives: { clickaway },
  model: {
    event: "option-click"
  },
  props: {
    options: { type: Array, default: () => [] },
    multi: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Array]
    },
    label: { type: String, default: null },
    width: { type: [String, Number] },
    nullValue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      displayOptions: false,
      selectedOptions: this.value
    };
  },
  watch: {
    multi() {
      if (this.multi && !Array.isArray(this.value)) {
        throw "value must be an array in multi mode.";
      }
      if (
        !this.multi &&
        (typeof this.value !== "string" && typeof this.value !== "number" && this.value !== null)
      ) {
        throw "value must be a string or a number in non-multi mode.";
      }
    }
  },
  created() {
    this.$watch(() => this.multi && this.nullValue, res => {
      if (res) {
        throw "Can not have multi and nullValue together.";
      }
    });
  },
  methods: {
    onOptionClick(option) {
      if (this.multi) {
        if (this.value.includes(option)) {
          this.$emit(
            "option-click",
            this.value.filter(val => val !== option)
          );
        } else {
          const copy = Array.from(this.value);
          copy.push(option);
          this.$emit("option-click", copy);
        }
      } else {
        this.$emit("option-click", option);
        this.displayOptions = !this.displayOptions;
      }
    },
    onNullValueClick() {
      this.$emit("option-click", null);
      this.displayOptions = !this.displayOptions;
    },
    away() {
      this.displayOptions = false;
    },
    formatValue(value) {
      return value.reduce((acc, cur) => `${acc}, ${cur}`);
    }
  }
};
</script>

<style lang="scss" scoped>
// import BIMDATA VARIABLES
@import "@/assets/scss/_BIMDataVariables.scss";

// import BIMDATA UTILITIES
@import "@/assets/scss/utilities/_text.scss";

// import BIMDATA MIXINS
@import "@/assets/scss/mixins/_pseudo.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataSelect.scss";
</style>
