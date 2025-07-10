<template>
  <div class="bimdata-ds bimdata-design-system bimdata-scrollbar">
    <Navigation :theme="themeState.value" @switch-theme="switchTheme()"></Navigation>
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
      themeState: {
        value: "theme-light",
      },
    };
  },
  methods: {
    switchTheme() {
      document.documentElement.classList.remove(this.themeState.value);
      this.themeState.value  = this.themeState.value === "theme-light" ? "theme-dark" : "theme-light";
      document.documentElement.classList.add(this.themeState.value);
    },
  },

  mounted() {
    document.documentElement.classList.add(this.themeState.value);
  },
  provide() {
    return {
      theme: this.themeState,
    };
  },
};
</script>

<style lang="scss" src="./_DesignSystem-global.scss"></style>
