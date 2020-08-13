<template>
  <div class="home">
    <BIMDataSearch
      v-model="filter"
      :autofocus="true"
      placeholder="Search"
      width="776px"
      height="56px"
    />
    <div class="home-content">
      <BIMDataCard v-for="(page, title) in getItems" :key="title">
        <template #content>
          <router-link :to="{ path: `/${page.path}` }">
            <img :src="page.img" />
            <h2 class="bimdata-h2">{{ title }}</h2>
            <p class="bimdata-text">{{ page.text }}</p>
            <BIMDataButton width="150" radius fill color="primary">
              Explore
            </BIMDataButton>
          </router-link>
        </template>
      </BIMDataCard>
    </div>
  </div>
</template>

<script>
import BIMDataCard from "../../../BIMDataComponents/BIMDataCard/BIMDataCard.vue";
import BIMDataButton from "../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataSearch from "../../../BIMDataComponents/BIMDataSearch/BIMDataSearch.vue";

export default {
  components: {
    BIMDataCard,
    BIMDataButton,
    BIMDataSearch,
  },
  props: {
    text: {
      type: String,
      default: "",
    },
    routeName: {
      type: String,
      default: "",
    },
    displayLink: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      filter: "",
    };
  },
  computed: {
    getItems() {
      return this.$store.state;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_BIMDataVariables.scss";

@import "./_keyframes.scss";
@import "./_Home.scss";
</style>
