<template>
  <header class="bimdata-ds__header">
    <div class="bimdata-ds__logo">
      <router-link to="/">
         <DesignSystemLogo width="150px" height="100%" :style="{'margin-left': '30px'}" />
      </router-link>
    </div>
    <div class="bimdata-ds__navigation">
      <ul class="bimdata-list">
        <li v-for="item in items" :key="item.title">
          <router-link v-if="displayLink" :to="{ path: `/${item.path}` }">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
    <div class="bimdata-ds__dark">
      <i class="moon" v-if="!theme" @click="switchTheme"></i>
      <i class="sun" v-if="theme" @click="switchTheme"></i>
    </div>
    <span class="bimdata-ds__version">v {{ $options.version }}</span>
  </header>
</template>

<script>
import DesignSystemLogo from "../../assets/img/DesignSystemLogo.vue";
import pkg from "../../../../package.json";
import store from "../../store.js";

export default {
  version: pkg.version,
  components: {
    DesignSystemLogo,
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
    theme: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["switch-theme"],
  computed: {
    items() {
      return Object.entries(store).map(([title, page]) => ({
        title,
        ...page,
      }));
    },
  },
  methods: {
    switchTheme() {
      this.$emit("switch-theme");
    },
  },
};
</script>

<style scoped lang="scss" src="./_DesignSystem-navigation.scss"></style>
