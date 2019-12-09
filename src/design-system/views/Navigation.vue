<template>
  <header>
    <div class="bimdata-ds__logo">
      <router-link to="/"><img src="../assets/img/design-system__logo.svg" alt=""></router-link>
    </div>
    <div class="bimdata-ds__navigation">
      <ul class="bimdata-list">
        <li v-for="item in items" :key="item.id">
          <router-link v-if="displayLink"
            :to="{path: `/${item.text}`}">
            {{ item.text }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    routeName: {
      type: String,
      default: ''
    },
    displayLink: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return{
      items: [
        {text: 'visual'},
        {text: 'components'}
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/scss/elements/_BIMDataList.scss";
</style>