<template>
  <aside class="aside">
    <div style="flex-grow: 1; overflow-y: auto">
      <BIMDataText
        component="h4"
        :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'"
        padding="30px 24px 0"
        @click="onTitleClick"
        >{{ getParentTitle() }}</BIMDataText
      >
      <ul class="aside__text bimdata-list">
        <li v-for="child in getPageChildren()" :key="child.id">
          <router-link :to="{ name: child.path }">
            <img :src="child.img" v-if="child.img" />
            {{ child.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { inject, computed } from "vue";
import store from "../../store.js";
import BIMDataText from "../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    BIMDataText,
  },
  setup() {
    const darkThemeRef = inject("BIMDATA_DESIGN_SYSTEM_DARK_THEME");

    const currentTheme = computed(() => (darkThemeRef.value ? "theme-dark" : "theme-light"));

    return {
      currentTheme,
    };
  },
  methods: {
    getParentTitle() {
      const path = this.$route.matched[0].path;
      const pathRegex = /(?<=\/)[^\]]+/g;
      const hyphenRegex = /\-/gm;
      const result = path.match(pathRegex);
      return result[0].replace(hyphenRegex, " ");
    },
    getPageChildren() {
      return Object.values(store).find(
        page => page.path === this.getPathFirstElement(),
      ).children;
    },
    getPathFirstElement() {
      return this.$route.path.split("/")[1];
    },
    onTitleClick() {
      return this.$router.push("/" + this.getPathFirstElement());
    },
  },
};
</script>

<style scoped lang="scss" src="./_DesignSystem-aside.scss"></style>
