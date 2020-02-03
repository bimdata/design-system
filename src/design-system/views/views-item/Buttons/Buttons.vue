<template>
  <div class="article buttons">
    <main>
      <div class="article-wrapper">
        <h2>{{ $route.name }}</h2>

        <div class="button-overview">
          <h3>Examples</h3>
          <div class="bimdata-ds__demo">
            <div class="bimdata-ds__demo__module">
              <BIMDataButton
              :width="getButtonWidth()"
              :class="getOverviewButtonClasses()"
              >
                <BIMDataIcon
                  class="icon-chevron"
                  icon-name="chevron-right"
                  width="10"
                  height="10"
                  x="13"
                  y="23"
                  v-if="checkboxIconChecked"
                >
                  <BIMDataChevronRightIcon />
                </BIMDataIcon>
                <span v-if="checkboxTextChecked">
                  BIMData button {{ selectedBtnOptionstypes }} {{ selectedBtnOptionskinds }} {{ selectedBtnOptionsvalues }}
                </span>
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
                  v-model="$data[`selectedBtnOptions${key}`]"
                >
                </BIMDataRadio>
              </div>
              <div class="bimdata-ds__demo__parameters__options">
                <h5>modifiers</h5>
                <BIMDataCheckbox
                  text="icon"
                  :state="checkboxIconChecked"
                  @change="checkboxIconChecked = $event.target.checked"
                  :disabled="checkboxIconDisabled"
                >
                </BIMDataCheckbox>
                <BIMDataCheckbox
                  text="text"
                  :state="checkboxTextChecked"
                  @change="checkboxTextChecked = $event.target.checked"
                  :disabled="checkboxTextDisabled"
                >
                </BIMDataCheckbox>
              </div>
            </div>

            <div class="bimdata-ds__demo__code">
              <pre class="language-xml" v-copy="onCopy">
                <code class="language-xml" v-highlight:xml >
                  &lt;BIMDataButton width="{{ getButtonWidth() }}" class="bimdata-btn bimdata-btn__{{ selectedBtnOptionstypes }} bimdata-btn__{{ selectedBtnOptionstypes }}--{{ selectedBtnOptionsvalues }} bimdata-btn__radius"&gt;
                    Button Radius Fill Primary
                  &lt;/BIMDataButton&gt;
                </code>
              </pre>
            </div>
          </div>

          <TableProperties property="width" type="Number, String" defaultValue="150px" description="Use this property to change the width of the button">
          </TableProperties>

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

import TableProperties from "../../TableProperties/TableProperties.vue";

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
    TableProperties,
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
      checkboxIconChecked: false,
      checkboxTextChecked: true,
      selectedBtnOptionstypes: "fill",
      selectedBtnOptionskinds: "radius",
      selectedBtnOptionsvalues: "default",
      btnOptions: {
        types:[
          "fill", "outline", "ghost"
        ],
        kinds: [
          "radius", "square", "rounded"
        ],
        values: [
          "default", "primary", "secondary", "grey", "red"
        ]
      }
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
      return `bimdata-btn__${this.selectedBtnOptionstypes} bimdata-btn__${this.selectedBtnOptionstypes}--${this.selectedBtnOptionsvalues} bimdata-btn__${this.selectedBtnOptionskinds}`
    },
    getButtonWidth(){
      if(this.selectedBtnOptionskinds.includes("rounded") || this.checkboxIconChecked === true && this.checkboxTextChecked === false){
        return "32px";
      } else {
        return "300px";
      }
    }
  },
  watch: {
    selectedBtnOptionskinds:{
      handler(newValue, oldValue){
        if(newValue === "rounded"){
          this.checkboxTextChecked = false;
          this.checkboxIconChecked = true;
        } else if(oldValue === "rounded"){
          this.checkboxTextChecked = true;
        }
      },
      deep: true
    }
  },
  computed: {
    checkboxTextDisabled() {
      return this.selectedBtnOptionskinds === "rounded" || this.checkboxIconChecked === false;
    },
    checkboxIconDisabled() {
      return this.selectedBtnOptionskinds === "rounded" || this.checkboxTextChecked === false;;
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
