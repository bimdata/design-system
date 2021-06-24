<template>
  <main class="article">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <BIMDataText margin="10px 0 15px">{{
        $store.state[$route.name].text
      }}</BIMDataText>
      <div class="content-box">
        <BIMDataCard
          class="bimdata-card__secondary"
          v-if="$route.name === 'Components'"
        >
          <template #content>
            <router-link to="../getting-started">
              <BIMDataText component="h5" color="color-white" margin="10px"
                >Getting started</BIMDataText
              >
              <BIMDataText color="color-white"
                >Learn how to quickly get started with our component library to
                build expressive, consistent UI at BIMData.</BIMDataText
              >
              <BIMDataButton width="150" color="primary" radius fill>
                Get started now
              </BIMDataButton>
            </router-link>
          </template>
        </BIMDataCard>

        <BIMDataCard
          v-for="child in $store.state[$route.name].children"
          :key="child.id"
          :class="{ 'bimdata-card__secondary': child.title === 'Variables' || child.title === 'Utilities' }"
        >
          {{ child.title }}
          <template #content>
            <router-link :to="child.path" append>
              <img v-if="child.title !== 'Variables' || child.title !== 'Utilities'" :src="child.img" />
              <BIMDataText component="h5" color="color-primary" margin="10px">{{
                child.title
              }}</BIMDataText>
              <BIMDataText color="color-tertiary-darkest">{{ child.text }}</BIMDataText>
              <BIMDataButton
                width="150"
                radius
                fill
                color="primary"
              >
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
import BIMDataButton from "../../../../src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataCard from "../../../../src/BIMDataComponents/BIMDataCard/BIMDataCard.vue";
import BIMDataText from "../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataCard,
    BIMDataText,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
// import BIMDATA VARIABLES
@import "../../../assets/scss/_BIMDataVariables.scss";

// import COMPONENT STYLE
@import "./_DesignSystem-content.scss";
</style>
