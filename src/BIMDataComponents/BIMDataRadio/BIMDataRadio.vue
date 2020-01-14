<template>
  <label class="bimdata-radio">
    <input
      type="radio"
      @input="onInput"
      :checked="selectedValue === value"
      :name="name"
      :id="id"
      :value="value"
    />
    <span class="bimdata-radio__text">{{ text }}</span>
  </label>
</template>

<script>
export default {
  model: {
    prop: "selectedValue"
  },
  props: {
    text: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: "option"
    },
    id: {
      type: String
    },
    value: {
      type: String
    },
    selectedValue: {
      type: String
    }
  },
  methods: {
    onInput() {
      this.$emit("input", this.value);
    }
  }
};
</script>

<style lang="scss">
  // import BIMDATA VARIABLES
  @import "../../assets/scss/_BIMDataVariables.scss";

  // import BIMDATA MIXINS
  @import "../../assets/scss/mixins/_pseudo.scss";
  @import "../../assets/scss/mixins/_font-size.scss";

  // import BIMDATA STYLE COMPONENT
  @import "./BIMDataRadio.scss";
</style>