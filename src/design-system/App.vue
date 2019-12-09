<template>
  <div class="bimdata-ds">
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./views/Navigation.vue"
export default {
  components:{
    Navigation
  }
}
</script>

<style lang="scss">
  @import "../../src/assets/scss/_BIMDataVariables.scss";
  @import "./assets/scss/design-system.scss";
  .home{
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: $color-primary;
  }
</style>
