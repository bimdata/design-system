<template>
  <div class="bimdata-ds__demo">
    <BIMDataText component="h3" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'" margin="10px 0"
      >Examples</BIMDataText
    >
    <div
      class="bimdata-ds__demo__module"
      :class="{ 'without-options': !componentTitle }"
    >
      <slot name="module"></slot>
    </div>

    <div class="bimdata-ds__demo__parameters" v-if="componentTitle">
      <div class="bimdata-ds__demo__parameters__options">
        <BIMDataText
          component="h4"
          :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'"
          margin="12px 0"
          display="block"
          >{{ componentTitle }} options</BIMDataText
        >
        <slot name="parameters"></slot>
      </div>
      <div
        class="bimdata-ds__demo__parameters--links"
        v-if="codepenLink || githubLink"
      >
        <BIMDataTooltip
          message="edit on codepen"
          className="bimdata-tooltip--up bimdata-tooltip--grey"
        >
          <template #content>
            <a v-if="codepenLink" :href="codepenLink" target="_blank">
              <img src="../../../assets/img/logo-codepen.svg" />
            </a>
          </template>
        </BIMDataTooltip>
        <BIMDataTooltip
          message="view on github"
          className="bimdata-tooltip--up bimdata-tooltip--grey"
        >
          <template #content>
            <a v-if="githubLink" :href="githubLink" target="_blank">
              <img src="../../../assets/img/logo-github.svg" />
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
import highlight from "../../../../BIMDataDirectives/highlight.js";
import copy from "../../../../BIMDataDirectives/copy.js";
import Alerts from "../Alerts/Alerts.vue";
import BIMDataTooltip from "../../../../../src/BIMDataComponents/BIMDataTooltip/BIMDataTooltip.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    Alerts,
    BIMDataTooltip,
    BIMDataText,
  },
  directives: { highlight, copy },
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
      default: null,
    },
    githubLink: {
      type: String,
      default: null,
    },
  },
  inject: ['theme'],
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
  computed: {
    currentTheme() {
      return this.theme.value;
    },
  },
};
</script>

<style scoped lang="scss" src="./_ComponentCode.scss"></style>
