<template>
  <aside class="aside">
    <div style="flex-grow: 1; overflow-y: auto;">
      <h2 class="aside__title" @click="onTitleClick">{{ getPathFirstElement() }}</h2>
      <ul class="aside__text bimdata-list">
        <li v-for="child in $store.state[getPathFirstElement()].children" :key="child.id">
          <router-link :to="child.path">{{ child.title }}</router-link>
        </li>
      </ul>
    </div>
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