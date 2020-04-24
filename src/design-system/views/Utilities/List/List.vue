<template>
  <main class="article article-list">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>
      <Code language="xml">
        &lt;div class="bimdata-list"&gt;&lt;/div&gt;
      </Code>
    </div>
  </main>
</template>

<script>
import Code from "../../Elements/Code/Code.vue"
export default {
  components: {
    Code
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_List.scss";
</style>