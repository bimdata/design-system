<template>
  <div class="bimdata-ds" :class="theme">
    <Navigation :theme="theme" @switch-theme="switchTheme()"></Navigation>
    <router-view/>
  </div>
</template>


<script>
import Navigation from "./views/Navigation/Navigation.vue"
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
  @import "../../src/assets/scss/mixins/_font-size.scss";
  @import "../../src/assets/scss/mixins/_pseudo.scss";
  @import "../../src/assets/scss/mixins/_spacing.scss";

  @import "../../src/assets/scss/_BIMDataVariables.scss";
  @import "../../src/assets/scss/_BIMDataGlobal.scss";
  @import "../../src/assets/scss/_BIMDataFonts.scss";
  @import "../../src/assets/scss/_BIMDataGrid.scss";
  @import "./assets/scss/DesignSystem.scss";
</style>
