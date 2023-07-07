<template>
  <div class="bimdata-ds__code">
    <pre :class="`language-${language}`" v-copy="onCopy">
      <span class="bimdata-ds__code__language">{{language}}</span>
      <code :class="`language-${language}`" v-highlight:[language] >
        <slot></slot>
      </code>
    </pre>
    <Alerts v-if="alerts" :message="message" :class="alertType" />
  </div>
</template>

<script>
import highlight from "../../../../BIMDataDirectives/highlight.js";
import copy from "../../../../BIMDataDirectives/copy.js";
import Alerts from "../Alerts/Alerts.vue";

export default {
  components: {
    Alerts,
  },
  directives: {
    highlight,
    copy,
  },
  props: {
    language: {
      type: String,
      required: true,
    },
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
};
</script>

<style scoped lang="scss" src="./_Code.scss"></style>
