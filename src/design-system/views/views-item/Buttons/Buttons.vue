<template>
  <div class="article buttons">
    <main>
      <div class="article-wrapper">
        <h2>{{ $route.name }}</h2>

        <div class="button-overview">
        <h3>BIMData Buttons</h3>
        <div class="bimdata-ds__demo">
          <div class="bimdata-ds__demo__module">
            <BIMDataButton
            width="300px"
            :class="getOverviewButtonClasses()"
            >
              <BIMDataIcon
                class="icon-chevron"
                icon-name="chevron-right"
                width="10"
                height="10"
                x="13"
                y="23"
                v-if="checkboxChecked"
              >
                <BIMDataChevronRightIcon />
              </BIMDataIcon>
              BIMData button {{ selectedBtnOptions.types }} {{ selectedBtnOptions.kinds }} {{ selectedBtnOptions.values }}
            </BIMDataButton>
          </div>

          <div class="bimdata-ds__demo__parameters">
            <h4>Button options</h4>
            <div class="bimdata-ds__demo__parameters__options" v-for="[key, values] in Object.entries(btnOptions)" :key="key">
              <h5>{{ key }}</h5>
              <BIMDataRadio
                v-for="value in values"
                :key="value"
                :text="value"
                :id="value"
                :value="value"
                :name="key"
                v-model="selectedBtnOptions[key]"
              >
              </BIMDataRadio>
            </div>
            <div class="bimdata-ds__demo__parameters__options">
              <h5>modifiers</h5>
              <BIMDataCheckbox
                text="icon"
                :state="checkboxChecked"
                @change="checkboxChecked = $event.target.checked"
              >
              </BIMDataCheckbox>
            </div>
          </div>

          <div class="bimdata-ds__demo__code">
            <pre class="language-xml" v-copy="onCopy">
            <code class="language-xml" v-highlight:xml >
              &lt;BIMDataButton width="200px" class="bimdata-btn bimdata-btn__{{ selectedBtnOptions.types }} bimdata-btn__{{ selectedBtnOptions.types }}--{{ selectedBtnOptions.values }} bimdata-btn__radius"&gt;
                Button Radius Fill Primary
              &lt;/BIMDataButton&gt;
            </code>
          </pre>
          </div>
        </div>
      </div>
      </div>
      <Alerts v-if="alerts" :message="message" :class="alertType" />
    </main>
  </div>
</template>

<script>
import BIMDataButton from "@/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataIcon.vue";
import BIMDataChevronRightIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataChevronRightIcon.vue";

import BIMDataRadio from "@/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataCheckbox from "@/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";

import Alerts from "../Alerts/Alerts.vue";

import highlight from "../../../../directives/highlight.js";
import copy from "../../../../directives/copy.js";

import Prism from "prismjs";

export default {
  name: "Buttons",
  components: {
    Alerts,
    BIMDataButton,
    BIMDataRadio,
    BIMDataCheckbox,
    BIMDataIcon,
    BIMDataChevronRightIcon
  },
  data() {
    return {
      alerts: false,
      alertType: null,
      message: "",
      checkboxChecked: false,
      selectedBtnOptions: {types: "fill", kinds: "radius", values: "default"},
      btnOptions: {
        types:[
          "fill", "outline", "ghost"
        ],
        kinds: [
          "radius", "text", "rounded"
        ],
        values: [
          "default", "primary", "secondary", "grey", "red"
        ]
      },
    };
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
    getOverviewButtonClasses(){
      return `bimdata-btn__${this.selectedBtnOptions.types} bimdata-btn__${this.selectedBtnOptions.types}--${this.selectedBtnOptions.values} bimdata-btn__${this.selectedBtnOptions.kinds}`
    }
  },
  directives: { highlight, copy }

};
</script>

<style lang="scss">
@import url("../../../../../node_modules/prismjs/themes/prism-tomorrow.css");

// import BIMDATA COMPONENT VARIABLES
@import "../../../../assets/scss/_BIMDataVariables.scss";

// import BIMDATA COMPONENT MIXINS
@import "../../../../assets/scss/mixins/_pseudo.scss";
@import "../../../../assets/scss/mixins/_font-size.scss";

// import BIMDATA COMPONENT STYLE
@import "../../../../BIMDataComponents/BIMDataButton/_BIMDataButton.scss";

// import COMPONENT STYLE
@import "./_Buttons.scss";

// @TODO delete
*::after,
*::before {
  box-sizing: border-box;
}
</style>
