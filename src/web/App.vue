<template>
  <div class="bimdata-ds" :class="theme">
    <Navigation :theme="theme" @switch-theme="switchTheme()"></Navigation>
    <router-view />
  </div>
</template>

<script>
import "prismjs";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-bash";
import Navigation from "./views/Navigation/Navigation.vue";

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      theme: "theme-light",
    };
  },
  methods: {
    switchTheme() {
      if (this.theme === "theme-light") {
        this.theme = "theme-dark";
      } else {
        this.theme = "theme-light";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// import PRISMJS THEME
@import "../../node_modules/prismjs/themes/prism-tomorrow.css";
</style>

<style lang="scss">
// import BIMDATA STYLE
@import "../assets/scss/BIMData.scss";
@import "../assets/scss/_BIMDataFonts.scss";
@import "../assets/scss/mixins/_colors-variation.scss";

// import DESIGN SYSTEM STYLE
@import "./_DesignSystem-global.scss";
</style>
