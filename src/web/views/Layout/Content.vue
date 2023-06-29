<template>
  <main class="article">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <BIMDataText margin="10px 0 15px">
        {{ store[$route.name].text }}
      </BIMDataText>
      <div class="content-box">
        <BIMDataCard
          class="bimdata-card__secondary getting-started__card"
          v-if="$route.name === 'Components'"
        >
          <template #content>
            <router-link to="../getting-started">
              <BIMDataText
                component="h5"
                color="color-white"
                margin="10px"
                fontWeight="700"
              >
                Getting started
              </BIMDataText>
              <BIMDataText color="color-white" display="block" padding="12px 0">
                Learn how to quickly get started with our component library to
                build expressive, consistent UI at BIMData.
              </BIMDataText>
              <BIMDataButton width="150px" color="primary" radius fill>
                Get started now
              </BIMDataButton>
            </router-link>
          </template>
        </BIMDataCard>

        <BIMDataResponsiveGrid
          itemWidth="215px"
          rowGap="18px"
          columnGap="18px"
          class="m-t-30"
        >
          <BIMDataCard
            v-for="child in store[$route.name].children"
            :key="child.id"
            :class="{
              'bimdata-card__secondary':
                child.title === 'Variables' || child.title === 'Utilities',
            }"
          >
            {{ child.title }}
            <template #content>
              <router-link :to="{ name: child.path }" append>
                <img
                  v-if="
                    child.title !== 'Variables' || child.title !== 'Utilities'
                  "
                  :src="child.img"
                />
                <BIMDataText
                  component="h5"
                  color="color-primary"
                  fontWeight="700"
                >
                  {{ child.title }}
                </BIMDataText>
                <BIMDataText color="color-granite">
                  {{ child.text }}
                </BIMDataText>
                <BIMDataButton width="120px" radius fill color="primary">
                  {{ child.btn }}
                </BIMDataButton>
              </router-link>
            </template>
          </BIMDataCard>
        </BIMDataResponsiveGrid>
      </div>
    </div>
  </main>
</template>

<script>
import store from "../../../store.js";
import BIMDataButton from "../../../../src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataCard from "../../../../src/BIMDataComponents/BIMDataCard/BIMDataCard.vue";
import BIMDataResponsiveGrid from "../../../../src/BIMDataComponents/BIMDataResponsiveGrid/BIMDataResponsiveGrid.vue";
import BIMDataText from "../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataCard,
    BIMDataResponsiveGrid,
    BIMDataText,
  },
  setup() {
    return { store };
  },
};
</script>

<style lang="scss" scoped>
// import COMPONENT STYLE
@import "./_DesignSystem-content.scss";
</style>
