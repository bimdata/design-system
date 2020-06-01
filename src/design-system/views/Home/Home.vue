<template>
  <div class="home">
    <BIMDataSearchInput
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
            <BIMDataButton
              class="bimdata-btn bimdata-btn__radius bimdata-btn__fill bimdata-btn__fill--primary"
            >
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
import BIMDataSearchInput from "../../../BIMDataComponents/BIMDataSearch/BIMDataSearchInput.vue";

export default {
  components: {
    BIMDataCard,
    BIMDataButton,
    BIMDataSearchInput,
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
