<template>
  <div class="bimdata-ds__demo">
    <h3 class="bimdata-h3">Examples</h3>
    <div class="bimdata-ds__demo__module" :class="{'without-options': !componentTitle}">
      <slot name="module"></slot>
    </div>

    <div class="bimdata-ds__demo__parameters" v-if="componentTitle">
      <div class="bimdata-ds__demo__parameters__options">
        <h4 class="bimdata-h4">{{ componentTitle }} options</h4>
        <slot name="parameters"></slot>
      </div>
      <div class="bimdata-ds__demo__parameters--links" v-if="codepenLink || githubLink">
        <BIMDataTooltip message="edit on codepen" className="bimdata-tooltip--up bimdata-tooltip--grey">
          <template #content>
            <a v-if="codepenLink" :href="codepenLink" target="_blank">
              <img src="../../../assets/img/logo-codepen.svg"/>
            </a>
          </template>
        </BIMDataTooltip>
        <BIMDataTooltip message="view on github" className="bimdata-tooltip--up bimdata-tooltip--grey">
          <template #content>
            <a v-if="githubLink" :href="githubLink" target="_blank">
              <img src="../../../assets/img/logo-github.svg"/>
              </a>
          </template>
        </BIMDataTooltip>
      </div>
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
import BIMDataTooltip from "../../../../../src/BIMDataComponents/BIMDataTooltip/BIMDataTooltip.vue";

export default {
  components: {
    Alerts,
    BIMDataTooltip
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
    codepenLink: {
      type: String,
      default: null
    },
    githubLink: {
      type: String,
      default: null
    }
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
