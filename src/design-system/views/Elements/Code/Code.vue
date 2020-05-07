<template>
  <div class="bimdata-ds__code">
    <pre :class="`language-${language}`" v-copy="onCopy">
      <code :class="`language-${language}`" v-highlight:[language] >
        <slot></slot>
      </code>
    </pre>
    <Alerts v-if="alerts" :message="message" :class="alertType" />
  </div>
</template>

<script>
import highlight from "@/directives/highlight.js";
import copy from "@/directives/copy.js";
import Prism from "prismjs";
import Alerts from "../Alerts/Alerts.vue";

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
  props:{
    language: {
      type: String,
      required: true
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
    }
  },
  directives: { highlight, copy }
}
</script>

<style lang="scss" scoped>
  // import BIMDATA COMPONENT VARIABLES
  @import "@/assets/scss/_BIMDataVariables.scss";

  // import COMPONENT STYLE
  @import "./_Code.scss";
</style>