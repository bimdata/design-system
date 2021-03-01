<template>
  <main class="article utilities-list">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <p class="bimdata-text">
        List utility classes will help you to reset list found within BIMData
        projects.
      </p>
      <Code language="html">
        &lt;ul class="bimdata-list"&gt;&lt;/ul&gt;
      </Code>
      <Code language="css">
        <pre>
          @import "~@bimdata/design-system/dist/scss/utilities/_list.scss";
        </pre>
      </Code>
      <h3 class="bimdata-h3">Examples</h3>
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
import Code from "../../Elements/Code/Code.vue";
export default {
  components: {
    Code,
  },
};
</script>

<style lang="scss" scoped>
// import COMPONENT STYLE
@import "./_List.scss";
.utilities-list {
  .bimdata-ds__code {
    margin: 0;
    border-bottom: 0.5px solid var(--color-tertiary-lightest);
  }
}
</style>
