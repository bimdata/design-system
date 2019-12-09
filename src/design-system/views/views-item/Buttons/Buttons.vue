<template>
  <div class="buttons">
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