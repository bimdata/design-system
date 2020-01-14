<template>
  <div class="article buttons">
    <main>
      <div class="article-wrapper">
        <h2>{{ $route.name }}</h2>
        <h3>BIMData Radius - Fill Buttons</h3>
        <BIMDataButton
          width="200px"
          class="bimdata-btn__fill bimdata-btn__radius"
          :class="selectedFillBtn"
          >Button Radius Fill Primary
        </BIMDataButton>

        <div class="bimdata-ds__code">
          <pre class="language-xml" v-copy="onCopy">
            <code class="language-xml" v-highlight:xml >
              &lt;BIMDataButton width="200px" class="bimdata-btn bimdata-btn__fill {{ selectedFillBtn }} bimdata-btn__radius"&gt;
                Button Radius Fill Primary
              &lt;/BIMDataButton&gt;
            </code>
          </pre>

          <div class="bimdata-ds__code__dynamic">
            <div v-for="fillBtn in fillBtns" :key="fillBtn.id">
              <BIMDataRadio
                :text="fillBtn.class"
                :id="fillBtn.class"
                :value="fillBtn.class"
                v-model="selectedFillBtn"
              >
              </BIMDataRadio>
            </div>
          </div>
        </div>
      </div>
      <Alerts v-if="alerts" :message="message"/>
    </main>
  </div>
</template>

<script>
import BIMDataButton from "@/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataRadio from "@/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";

import Alerts from "../Alerts/Alerts.vue";

import highlight from '../../../../directives/highlight.js'
import copy from '../../../../directives/copy.js'

import Prism from 'prismjs'


export default {
  name: "Buttons",
  components: {
    BIMDataButton,
    BIMDataRadio,
    Alerts
  },
  data() {
    return {
      alerts: false,
      alertType :null,
      message: "",
      selectedFillBtn: 'bimdata-btn__fill--default',
      fillBtns: [
        {
          name: "Button Radius Fill Default",
          class: 'bimdata-btn__fill--default'
        },
        {
          name: "Button Radius Fill Primary",
          class: 'bimdata-btn__fill--primary'
        },
        {
          name: "Button Radius Fill Secondary",
          class: 'bimdata-btn__fill--secondary'
        },
        {
          name: "Button Radius Fill Grey",
          class: 'bimdata-btn__fill--grey'
        },
        {
          name: "Button Radius Fill Red",
          class: 'bimdata-btn__fill--red'
        }
      ]
    }
  },
   methods: {
    onCopy(e){
      this.alerts = true;
      this.message = 'copied successfully !' ;
      this.alertType = "success";
      setTimeout(() => {
        this.alerts = false;
      }, 100000);
    }
  },
  directives: {highlight, copy}
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
  *::after, *::before{
    box-sizing: border-box;
  }

</style>
