<template>
  <main class="article utilities-list">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>
      <p>List utility classes will help you to reset list found within BIMData projects.</p>
      <Code language="xml">
        &lt;ul class="bimdata-list"&gt;&lt;/ul&gt;
      </Code>
      <h3>Examples</h3>
      <div class="bimdata-ds__example">
        <ul class="bimdata-list">
          <li>item 01</li>
          <li>item 02</li>
        </ul>
      </div>
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