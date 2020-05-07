<template>
  <div class="home">
    <BIMDataSearchInput v-model="filter" :autofocus="true" placeholder="Search" width="776px" height="56px"/>
    <!-- <p>{{Object.values($store.state)}}</p> -->
    <div class="home-content">
      <router-link v-for="(value, key) in getItems" :key="key" :to="{path: `/${key}`}" class="bimdata-card">
        <div class="bimdata-card__content">
          <img :src="value.img"/>
          <h2 class="bimdata-h2">{{ key }}</h2>
          <p class="bimdata-text">{{ value.text }}</p>
          <BIMDataButton class="bimdata-btn bimdata-btn__radius bimdata-btn__fill bimdata-btn__fill--primary">
          Explore
          </BIMDataButton>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import BIMDataButton from "@/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataSearchInput from "@/BIMDataComponents/BIMDataSearch/BIMDataSearchInput.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataSearchInput
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

<style lang="scss" scoped>
  @import "@/assets/scss/_BIMDataVariables.scss";
  @import "@/assets/scss/utilities/_text.scss";

  @import "@/design-system/assets/scss/animations/_animations.scss";
  @import "./_Home.scss";
</style>