<template>
  <aside class="aside">
    <div style="flex-grow: 1; overflow-y: auto;">
      <h4 class="bimdata-h4 aside__title" @click="onTitleClick">{{ $route.name }}</h4>
      <ul class="aside__text bimdata-list">
        <li v-for="child in getPageChildren()" :key="child.id">
          <router-link :to="{ name: child.path}">
            <img :src="child.img"/>
            {{ child.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {
    getPageChildren() {
      return Object.values(this.$store.state).find(page=> page.path === this.getPathFirstElement()).children;
    },
    getPathFirstElement(){
      return this.$route.path.split("/")[1];
    },
    onTitleClick(){
      return this.$router.push("/" + this.getPathFirstElement());
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_DesignSystem-aside.scss";
</style>