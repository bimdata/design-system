<template>
  <div class="article buttons">
    <main>
      <div class="article-wrapper">
        <h2>{{ $route.name }}</h2>
        <BIMDataButton width="200px" class="bimdata-btn bimdata-btn__fill bimdata-btn__fill--primary bimdata-btn__radius">Button Radius Fill Primary</BIMDataButton>
        <pre>
          <code class="language-js">
          &lt;BIMDataButton width="200px" class="bimdata-btn bimdata-btn__fill bimdata-btn__fill--primary bimdata-btn__radius"&gt;
            Button Radius Fill Primary
          &lt;/BIMDataButton&gt;
          </code>
        </pre>

      <div>
      
      </div>
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
  }
}
</script>