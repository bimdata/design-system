<template>
  <div class="home">
    <img src="../../assets/img/design-system__logo-home.svg" alt="">
    <BIMDataSearchBar v-model="filter" />
    <div class="home-content">
      <router-link v-for="item in getItems" :key="item" :to="{path: `/${item}`}" class="home-content__item">
        <h2>{{ item }}</h2>
        <p>{{ $store.state[item].text }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import BIMDataSearchBar from "../../../BIMDataComponents/BIMDataSearch/BIMDataSearchBar.vue";

export default {
  components: {
    BIMDataSearchBar
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    routeName: {
      type: String,
      default: ''
    },
    displayLink: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return{
      filter: ""
    }
  },
  computed: {
    getItems(){
      return Object.keys(this.$store.state);
    }
  }
}
</script>

<style lang="scss">
  @import "../../../assets/scss/_BIMDataVariables.scss";

  @import "./_Home.scss";
</style>