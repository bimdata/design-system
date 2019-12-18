<template>
  <div class="bimdata-ds">
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>


<script>
import Navigation from "./views/Navigation/Navigation.vue"
export default {
  components:{
    Navigation
  }
}
</script>

<style lang="scss">
  @import "../../node_modules/prismjs/themes/prism-tomorrow.css";

  @import "../../src/assets/scss/_BIMDataVariables.scss";
  @import "../../src/assets/scss/_BIMDataFonts.scss";
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
