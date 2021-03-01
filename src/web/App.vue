<template>
  <div class="bimdata-ds">
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
      theme: "bimdata-ds-theme-light",
    };
  },
  methods: {
    switchTheme() {
      if (this.theme === "bimdata-ds-theme-light") {
        this.theme = "bimdata-ds-theme-dark";
        document.documentElement.classList.remove("bimdata-ds-theme-light");
        document.documentElement.classList.add("bimdata-ds-theme-dark");

      } else {
        this.theme = "bimdata-ds-theme-light";
        document.documentElement.classList.remove("bimdata-ds-theme-dark");
        document.documentElement.classList.add("bimdata-ds-theme-light");
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
</style>
