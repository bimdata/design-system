<template>
  <div class="home">
    <BIMDataSearchBar v-model="filter" />
    <div class="home-content">
      <router-link v-for="(value, key) in getItems" :key="key" :to="{path: `/${key}`}" class="home-content__item">
        <img :src="value.img"/>
        <h2>{{ key }}</h2>
        <p>{{ value.text }}</p>
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
      return this.$store.state;
    }
  }
}
</script>

<style lang="scss">
  @import "../../../assets/scss/_BIMDataVariables.scss";

  @import "../../../design-system/assets/scss/animations/_animations.scss";

  @import "./_Home.scss";
</style>