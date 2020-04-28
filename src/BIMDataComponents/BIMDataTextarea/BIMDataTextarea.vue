<template>
  <div class="bimdata-textarea" :class="{'not-empty': this.message !== null && this.message !== '' || this.placeholder !== null}" :style="{'min-width': width, 'min-height': height}">
    <textarea
      v-focus="autofocus"
      :name="name"
      :id="name"
      :value="message"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('input', $event.currentTarget.value)"
    />
    <label :for="name">{{label}}</label>
    <span class="bar"></span>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      inserted: function(el, {value}) {
        if (value) {
          el.focus();
        }
      }
    }
  },
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
    placeholder:{
      type: String,
      default: null
    },
    label: {
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
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    focus() {
      this.$refs.input && this.$refs.input.focus();
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