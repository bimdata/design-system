<template>
<main class="article">
  <div class="article-wrapper">
    <h1 class="bimdata-h1">{{ $route.name }}</h1>
    <p class="bimdata-text">{{$store.state[$route.name].text}}</p>
    <div class="content-box">

      <BIMDataCard class="bimdata-card__primary" v-if="$route.name === 'Components'">
        <template #content>
          <router-link to="../getting-started">
            <h5 class="bimdata-h5">Getting started</h5>
            <p class="bimdata-text">Learn how to quickly get started with our component library to build expressive, consistent UI at BIMData.</p>
            <BIMDataButton class="bimdata-btn bimdata-btn__radius bimdata-btn__fill bimdata-btn__fill--secondary">
              Get started now
            </BIMDataButton>
          </router-link>
        </template>
      </BIMDataCard>

      <BIMDataCard v-for="child in $store.state[$route.name].children" :key="child.id" :class="{'bimdata-card__primary' : child.title === 'Variables'}">
        {{child.title}}
        <template #content>
          <router-link :to="child.path" append>
            <img v-if="child.title !== 'Variables'" :src="child.img"/>
            <h5 class="bimdata-h5">{{ child.title }}</h5>
            <p class="bimdata-text">{{ child.text }}</p>
            <BIMDataButton class="bimdata-btn bimdata-btn__radius bimdata-btn__fill" :class="child.title === 'Variables' ? 'bimdata-btn__fill--secondary' : 'bimdata-btn__fill--primary'">
              {{ child.btn }}
            </BIMDataButton>
          </router-link>
        </template>
      </BIMDataCard>

    </div>
  </div>
</main>
</template>

<script>
import BIMDataButton from "@/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataCard from "@/BIMDataComponents/BIMDataCard/BIMDataCard.vue";

export default {
  components:{
    BIMDataButton,
    BIMDataCard
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  // import BIMDATA VARIABLES
  @import "@/assets/scss/_BIMDataVariables.scss";

  // import COMPONENT STYLE
  @import "./_DesignSystem-content.scss";
</style>