<template>
  <main class="article designers">
    <div class="article-wrapper">
      <h1 class="bimdata-h1">Designers</h1>
      <p class="bimdata-text"></p>
      <h4 class="bimdata-h4">Tooling</h4>
      <p class="bimdata-text">
        We use Figma for all our entire design workflow.
      </p>
      <h4 class="bimdata-h4">Fonts</h4>
      <p class="bimdata-text">
        We use Roboto fonts, you can download and install them
        <a
          href="https://fonts.google.com/specimen/Roboto?query=Roboto"
          target="_blank"
          class="bimdata-link"
          >here</a
        >
      </p>
      <h4 class="bimdata-h4">Other important resources</h4>
      <router-link to="../guidelines-utilities/colors">
        <BIMDataCard>
          <template #content>
            <div class="flex justify-between items-center">
              <div>
                <h4>GUIDELINES & UTILITIES</h4>
                <p>Colors</p>
              </div>
              <div>
                <BIMDataIcon name="chevron" class="fill-primary" />
              </div>
            </div>
          </template>
        </BIMDataCard>
      </router-link>
    </div>
  </main>
</template>

<script>
import BIMDataCard from "../../../BIMDataComponents/BIMDataCard/BIMDataCard.vue";
import BIMDataIcon from "../../../../dist/js/BIMDataComponents/BIMDataIcon.js";
export default {
  components: {
    BIMDataCard,
    BIMDataIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "./_GettingStarted.scss";
</style>
