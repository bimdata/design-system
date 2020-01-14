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
  @import "../../src/assets/scss/_BIMDataVariables.scss";
  @import "../../src/assets/scss/_BIMDataFonts.scss";
  @import "../../src/assets/scss/_BIMDataGrid.scss";
  @import "../../src/assets/scss/mixins/_font-size.scss";
  @import "./assets/scss/DesignSystem.scss";
  .home{
    margin-top: 80px;
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: $color-primary;
  }
</style>
