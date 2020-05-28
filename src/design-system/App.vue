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

<style lang="scss" scoped>
  // import PRISMJS THEME
  @import "../../node_modules/prismjs/themes/prism-tomorrow.css";

  // import BIMDATA STYLE
  @import "../assets/scss/_BIMDataVariables.scss";
  @import "../assets/scss/_BIMDataFonts.scss";
</style>

<style lang="scss">
  // import DESIGN SYSTEM STYLE
  @import "./_DesignSystem-global.scss";

  // import ELEMENTS
  @import "../assets/scss/elements/_BIMDataScrollbar.scss";
  @import "../assets/scss/utilities/_list.scss";
  @import "../assets/scss/utilities/_text.scss";
  @import "../assets/scss/utilities/_spacing.scss";


</style>