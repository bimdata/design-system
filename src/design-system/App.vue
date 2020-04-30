<template>
  <div class="bimdata-ds" :class="theme">
    <Navigation :theme="theme" @switch-theme="switchTheme()"></Navigation>
    <router-view/>
  </div>
</template>


<script>
import Navigation from "./views/Navigation/Navigation.vue"
import Prism from "prismjs";

import "prismjs/components/prism-scss";
import "prismjs/components/prism-bash";

export default {
  components:{
    Navigation
  },
  data() {
    return {
      theme: 'theme-light'
    };
  },
  methods:{
    switchTheme(){
      if(this.theme === 'theme-light'){
        this.theme = 'theme-dark';
      }
      else{
        this.theme = 'theme-light';
      }
    }
  }
}
</script>

<style lang="scss">
  // import PRISMJS THEME
  @import "../../node_modules/prismjs/themes/prism-tomorrow.css";

  // import MIXINS
  @import "@/assets/scss/mixins/_font-size.scss";
  @import "@/assets/scss/mixins/_pseudo.scss";
  @import "@/assets/scss/mixins/_spacing.scss";

  // import BIMDATA STYLE
  @import "@/assets/scss/_BIMDataVariables.scss";
  @import "@/assets/scss/_BIMDataGlobal.scss";
  @import "@/assets/scss/_BIMDataFonts.scss";
  @import "@/assets/scss/_BIMDataGrid.scss";

  // import UTILITIES
  @import "@/assets/scss/utilities/_colors.scss";
  @import "@/assets/scss/utilities/_flex.scss";
  @import "@/assets/scss/utilities/_list.scss";

  // import ELEMENTS
  @import "@/assets/scss/elements/_BIMDataScrollbar.scss";

  // import DESIGN SYSTEM STYLE
  @import "./assets/scss/DesignSystem.scss";
</style>
