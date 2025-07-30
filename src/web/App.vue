<template>
  <div class="bimdata-ds bimdata-design-system bimdata-scrollbar">
    <Navigation :theme="darkThemeRef" @switch-theme="onDarkThemeButtonClick" />
    <router-view />
  </div>
</template>

<script>
import { ref, provide, watch } from "vue";
import "prismjs";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-bash";
import Navigation from "./views/Navigation/Navigation.vue";

export default {
  components: {
    Navigation,
  },
  setup() {
    const darkThemeRef = ref(false);

    provide("BIMDATA_DESIGN_SYSTEM_DARK_THEME", darkThemeRef);

    watch(darkThemeRef, (newValue) => {
      if (newValue) {
        document.documentElement.classList.add("theme-dark");
        document.documentElement.classList.remove("theme-light");
      } else {
        document.documentElement.classList.add("theme-light");
        document.documentElement.classList.remove("theme-dark");
      }
    });

    const onDarkThemeButtonClick = () => {
      darkThemeRef.value = !darkThemeRef.value;
    };

    return {
      darkThemeRef,
      onDarkThemeButtonClick,
    };
  },

  mounted() {
    document.documentElement.classList.add(this.darkThemeRef ? "theme-dark" : "theme-light");
  },
};
</script>

<style lang="scss" src="./_DesignSystem-global.scss"></style>
