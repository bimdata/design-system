<template>
  <div
    class="bimdata-checkbox"
    :class="{ indeterminate, disabled, checked }"
    @click="onClick"
  >
    <span class="bimdata-checkbox__mark"></span>
    <span class="bimdata-checkbox__text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "BIMDataCheckbox",
  inheritAttrs: false,
  model: {
    prop: "state",
    event: "change"
  },
  props: {
    text: {
      type: String,
      default: null
    },
    state: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    indeterminate() {
      return this.state === null;
    },
    checked() {
      return this.state === true || this.indeterminate;
    }
  },
  methods: {
    onClick() {
      if(!this.disabled){
        this.$emit("change", this.checked ? false : true);
      }
    }
  }
};
</script>

<style lang="scss">
// import BIMDATA VARIABLES
@import "@/assets/scss/_BIMDataVariables.scss";

// import BIMDATA MIXINS
@import "@/assets/scss/mixins/_font-size.scss";
@import "@/assets/scss/mixins/_pseudo.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataCheckbox.scss";
</style>
