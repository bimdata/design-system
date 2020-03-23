<template>
  <header class="bimdata-ds__header">
    <div class="bimdata-ds__logo">
      <router-link to="/"><img src="@/design-system/assets/img/design-system__logo.svg" alt=""></router-link>
    </div>
    <div class="bimdata-ds__navigation">
      <ul class="bimdata-list">
        <li v-for="item in getItems" :key="item">
          <router-link v-if="displayLink"
            :to="{path: `/${item}`}">
            {{ item }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="bimdata-ds__dark">
      <i class="moon" v-if="theme === 'theme-light'" @click="switchTheme"></i>
      <i class="sun" v-if="theme === 'theme-dark'" @click="switchTheme"></i>
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
    },
    theme: {
      type: String,
      required: true
    }
  },
  methods: {
    switchTheme() {
      this.$emit('switch-theme');
    }
  },
  computed: {
    getItems(){
      return Object.keys(this.$store.state);
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/elements/_BIMDataList.scss";
</style>