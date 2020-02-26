<template>
<main class="article">
  <div class="article-wrapper">
    <h1>{{ $route.name }}</h1>
    <p>{{$store.state[$route.name].text}}</p>
    <div class="content-box">
      <div class="bimdata-box" v-for="child in $store.state[$route.name].children" :key="child.id">
        <router-link :to="child.path" append>
          <div class="bimdata-box__content">
            <img :src="child.img"/>
            <h5>{{ child.title }}</h5>
            <p>{{ child.text }}</p>
            <BIMDataButton class="bimdata-btn bimdata-btn__radius bimdata-btn__fill bimdata-btn__fill--primary">
              {{ child.btn }}
            </BIMDataButton>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</main>
</template>

<script>
import BIMDataButton from "../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";

export default {
  components:{
    BIMDataButton,
  },
  methods: {
    getRouter(){
      return this.$route.params;
    }
  }
}
</script>