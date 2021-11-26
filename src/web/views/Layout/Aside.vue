<template>
  <aside class="aside">
    <div style="flex-grow: 1; overflow-y: auto;">
      <BIMDataText
        component="h4"
        color="color-primary"
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
import BIMDataText from "../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    BIMDataText,
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
      return Object.values(this.$store.state).find(
        page => page.path === this.getPathFirstElement()
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

<style lang="scss" scoped>
@import "../../../assets/scss/_BIMDataVariables.scss";
@import "../../../assets/scss/mixins/_colors-variation.scss";

@import "./_DesignSystem-aside.scss";
</style>
