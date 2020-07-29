<template>
  <div class="bimdata-ds__demo">
    <h3 class="bimdata-h3">Examples</h3>
    <div class="bimdata-ds__demo__module">
      <slot name="module"></slot>
    </div>

    <div class="bimdata-ds__demo__parameters">
      <h4 class="bimdata-h4">{{ componentTitle }} options</h4>
      <slot name="parameters"></slot>
    </div>

    <div class="bimdata-ds__demo__import" v-if="language">
      <pre :class="`language-${language}`" v-copy="onCopy">
      <span class="bimdata-ds__demo__import__language">{{language}}</span>
        <code :class="`language-${language}`" v-highlight:[language]>
          <slot name="import">
          </slot>
        </code>
      </pre>
    </div>

    <div class="bimdata-ds__demo__code">
      <pre class="language-xml" v-copy="onCopy">
        <code class="language-xml" v-highlight:xml >
          <slot name="code"></slot>
        </code>
      </pre>
    </div>

    <Alerts v-if="alerts" :message="message" :class="alertType" />
  </div>
</template>

<script>
import highlight from "../../../../directives/highlight.js";
import copy from "../../../../directives/copy.js";
import Alerts from "../Alerts/Alerts.vue";

export default {
  components: {
    Alerts,
  },
  data() {
    return {
      alerts: false,
      alertType: null,
      message: "",
    };
  },
  methods: {
    onCopy() {
      this.alerts = true;
      this.message = "copied successfully !";
      this.alertType = "success";
      setTimeout(() => {
        this.alerts = false;
      }, 3000);
    },
  },
  props: {
    componentTitle: {
      type: String,
    },
    language: {
      type: String,
      default: null,
    },
  },
  directives: { highlight, copy },
};
</script>

<style lang="scss" scoped>
// import BIMDATA VARIABLES
@import "../../../../assets/scss/_BIMDataVariables.scss";

// import COMPONENT STYLE
@import "./_ComponentCode.scss";
</style>
