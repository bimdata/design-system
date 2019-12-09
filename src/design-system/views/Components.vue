<template>
  <div class="components">
    <aside class="aside">
      <h2 class="aside-title">{{ $route.name }}</h2>
      <ul class="bimdata-list aside-text">
        <li v-for="children in childrens" :key="children.id">
          <router-link :to="{path: `/${$route.name}/${children.title}` }">{{ children.title }}</router-link>
        </li>
      </ul>
    </aside>
    <main>
      <div class="content">
        <h1>{{ $route.name }}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi deleniti nemo debitis temporibus dolores, distinctio nam, sed eligendi adipisci enim earum molestiae vero! Consequuntur possimus libero nam perspiciatis placeat?</p>

        <div class="content-box">
          <div class="bimdata-box" v-for="children in childrens" :key="children.id">
            <router-link :to="{path: `/${$route.name}/${children.title}` }">
              <div class="bimdata-box__content">
                <h2>{{ children.title }}</h2>
                <p>{{ children.text }}</p>
                <BIMDataButton class="bimdata-btn bimdata-btn__ghost">
                  {{ children.btn }}
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
import BIMDataButton from "../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataIcon from "../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataChevronRightIcon from "../../BIMDataComponents/BIMDataIcon/BIMDataLibraryIcon/BIMDataChevronRightIcon.vue";

export default {
  name: 'components',
  components: {
    BIMDataButton,
    BIMDataIcon,
    BIMDataChevronRightIcon
  },
  data(){
    return{
      childrens: [
        {
          title: 'buttons',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam',
          btn: 'View Buttons'
          },
        {
          title: 'buttons2',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae numquam laboriosam',
          btn: 'View Buttons2'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/_BIMDataVariables.scss";

</style>