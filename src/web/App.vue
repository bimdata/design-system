<template>
  <div class="bimdata-ds" :class="theme">
    <Navigation :theme="theme" @switch-theme="switchTheme()"></Navigation>
    <router-view />
  </div>
</template>

<script>
import Navigation from "./views/Navigation/Navigation.vue";
import Prism from "prismjs";

import "prismjs/components/prism-scss";
import "prismjs/components/prism-bash";

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
// import DESIGN SYSTEM STYLE
@import "./_DesignSystem-global.scss";

// import BIMDATA STYLE
@import "../assets/scss/BIMData.scss";

@import "../assets/css/_BIMDataVariables.css";
</style>
