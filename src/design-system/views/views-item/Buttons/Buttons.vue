<template>
  <div class="buttons">
    <aside class="aside">
      <h2 class="aside-title">Components</h2>
      <ul class="bimdata-list aside-text">
        <li v-for="children in childrens" :key="children.id">
          <router-link :to="{path: `/components/${children.title}` }">{{ children.title }}</router-link>
        </li>
      </ul>
    </aside>
    <main>
      <div class="content">
        <BIMDataButton width="200px" class="bimdata-btn bimdata-btn__fill bimdata-btn__fill--primary bimdata-btn__radius">Button Radius Fill Primary</BIMDataButton>
      </div>
    </main>
  </div>
</template>

<script>
import BIMDataButton from '@/BIMDataComponents/BIMDataButton/BIMDataButton.vue'
export default {
  name: 'Buttons',
  components: {
    BIMDataButton
  },
  data(){
    return{
      childrens: [
        {
          title: 'buttons',
          },
        {
          title: 'buttons2',
        }
      ]
    }
  }
}
</script>