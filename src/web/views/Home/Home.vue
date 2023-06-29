<template>
  <div class="home">
    <BIMDataSearch
      v-model="filter"
      :autofocus="true"
      placeholder="Search"
      width="776px"
      height="56px"
    />
    <div class="home__content">
      <BIMDataCard v-for="(page, title) in getItems" :key="title">
        <template #content>
          <router-link :to="{ path: `/${page.path}` }">
            <img :src="page.img" />
            <BIMDataText component="h2" color="color-primary" fontWeight="700">
              {{ title }}
            </BIMDataText>
            <BIMDataText>{{ page.text }}</BIMDataText>
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
import store from "../../../store.js";
import BIMDataCard from "../../../BIMDataComponents/BIMDataCard/BIMDataCard.vue";
import BIMDataButton from "../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataSearch from "../../../BIMDataComponents/BIMDataSearch/BIMDataSearch.vue";
import BIMDataText from "../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    BIMDataCard,
    BIMDataButton,
    BIMDataSearch,
    BIMDataText,
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
      return store;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables.css";

@import "./_keyframes.scss";
@import "./_Home.scss";
</style>
