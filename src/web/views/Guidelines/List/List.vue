<template>
  <main class="article utilities-list">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <BIMDataText margin="5px 0"
        >List utility classes will help you to reset list found within BIMData
        projects.</BIMDataText
      >
      <Code language="html"> &lt;ul class="bimdata-list"&gt;&lt;/ul&gt; </Code>
      <Code language="css">
        <pre>
          @import "~@bimdata/design-system/dist/css/utilities/_list.css";
        </pre>
      </Code>
      <BIMDataText component="h3" color="color-primary" margin="20px 0 10px"
        >Examples</BIMDataText
      >
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
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    Code,
    BIMDataText,
  },
};
</script>

<style scoped lang="scss">
.utilities-list {
  ul {
    outline: 2px dotted var(--color-granite);
    li {
      outline: 1px dotted var(--color-silver);
    }
  }

  .bimdata-ds__code {
    margin: 0;
    border-bottom: 0.5px solid var(--color-silver-light);
  }
}
</style>
