<template>
  <div class="bimdata-textarea" :class="{'not-empty': this.message !== null && this.message !== '' && this.placeholder !== ''}" :style="{'min-width': width, 'min-height': height}">
    <textarea
      v-focus="autofocus"
      :name="name"
      :id="name"
      :value="message"
      :placeholder="placeholder"
      @input="$emit('input', $event.currentTarget.value)"
    />
    <label :for="name">{{label}}</label>
    <span class="bar"></span>
  </div>
</template>

<script>
export default {
  model: {
    prop: "message",
    event: "input"
  },
  props: {
    name: {
      type: [String, Number],
      default: ""
    },
    message: {
      type: [String, Number],
      default: null
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    placeholder:{
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "150px"
    },
    height: {
      type: String,
      default: "32px"
    }
  },
  methods: {
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
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "@/assets/scss/mixins/_font-size.scss";
  @import "@/assets/scss/mixins/_pseudo.scss";

  @import "./_BIMDataTextarea.scss";
</style>