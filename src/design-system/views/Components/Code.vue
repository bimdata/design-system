<template>
  <div class="bimdata-ds__demo">
    <h3> Examples</h3>
    <div class="bimdata-ds__demo__module">
      <slot name="module"></slot>
    </div>

    <div class="bimdata-ds__demo__parameters">
      <h4>{{componentTitle}} options</h4>
      <slot name="parameters"></slot>
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
import highlight from "../../../directives/highlight.js";
import copy from "../../../directives/copy.js";
import Prism from "prismjs";
import Alerts from "../views-item/Alerts/Alerts.vue";

export default {
  components: {
    Alerts
  },
  data() {
    return {
      alerts: false,
      alertType: null,
      message: ""
    }
  },
  methods: {
    onCopy(e) {
      this.alerts = true;
      this.message = "copied successfully !";
      this.alertType = "success";
      setTimeout(() => {
        this.alerts = false;
      }, 3000);
    },
  },
  props:{
    componentTitle: {
      type: String
    }
  },
  directives: { highlight, copy }
}
</script>

<style lang="scss">
  // import PRISMJS THEME
  @import url("../../../../node_modules/prismjs/themes/prism-tomorrow.css");

  // import BIMDATA COMPONENT VARIABLES
  @import "../../../assets/scss/_BIMDataVariables.scss";

  // import COMPONENT STYLE
  @import "./_Code.scss";
</style>