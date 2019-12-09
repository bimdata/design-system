<template>
  <aside class="aside">
    <h2 class="aside-title" @click="onTitleClick">{{ getPathFirstElement() }}</h2>
    <ul class="aside-text bimdata-list">
      <li v-for="children in $store.state[getPathFirstElement()]" :key="children.id">
        <router-link :to="{ name: children.title}">{{ children.title }}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  methods: {
    getPathFirstElement(){
      return this.$route.path.split("/")[1];
    },
    onTitleClick(){
      return this.$router.push("/" + this.getPathFirstElement())
    }
  }
}
</script>