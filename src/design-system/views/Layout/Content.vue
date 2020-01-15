<template>
<div class="article">
  <main>
    <div class="article-wrapper">
      <h1>{{ $route.name }}</h1>
      <p>{{$store.state[$route.name].text}}</p>

      <div class="content-box">
        <div class="bimdata-box" v-for="child in $store.state[$route.name].children" :key="child.id">
          <router-link :to="child.title" append>
            <div class="bimdata-box__content">
              <h2>{{ child.title }}</h2>
              <p>{{ child.text }}</p>
              <BIMDataButton class="bimdata-btn bimdata-btn__ghost">
                {{ child.btn }}
                <BIMDataIcon class="icon-close" icon-name="close" width="11" height="11" x="13" y="23">
                  <BIMDataChevronRightIcon />
                </BIMDataIcon>
              </BIMDataButton>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</div>
</template>

<script>
import BIMDataButton from "../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataIcon from "../../../BIMDataComponents/BIMDataIcons/BIMDataIcon.vue";
import BIMDataChevronRightIcon from "../../../BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataChevronRightIcon.vue";

export default {
  components:{
    BIMDataButton,
    BIMDataIcon,
    BIMDataChevronRightIcon
  }
}
</script>