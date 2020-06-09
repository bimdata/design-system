<template>
  <main class="article developpers">
    <div class="article-wrapper">
      <h1 class="bimdata-h1">Developpers</h1>
      <p class="bimdata-text">
        How to get started with BIMData's vuejs component library
      </p>
      <h4 class="bimdata-h4">1. Install the package</h4>
      <p class="bimdata-text">
        BIMData’s component library is called
        <code class="code-highlight">design-system</code>, and it’s available on
        the npm registry.
      </p>
      <Code language="bash">
        npm i @bimdata/design-system
      </Code>

      <h4 class="bimdata-h4">2. Import component</h4>
      <p class="bimdata-text">
        Once you’ve installed the package you can import any component available
        in BIMData's design system:
      </p>
      <Code language="javascript">
        import BIMDataComponents from '@bimdata/design-system'
      </Code>

      <h4 class="bimdata-h4">3. Register component</h4>
      <p class="bimdata-text">
        into your <code class="code-highlight">.vue</code> file, define your
        component into <code class="code-highlight">components</code> option
      </p>
      <Code language="javascript">
        <pre>
          components: {
          BIMDataButton : BIMDataComponents.BIMDataButton,
          BIMDataSearch : BIMDataComponents.BIMDataSearch,
        }
        </pre>
      </Code>

      <h4 class="bimdata-h4">4. Use component</h4>
      <Code language="javascript">
        <pre>
          &lt;BIMDataButton class="bimdata-btn__fill bimdata-btn__fill--primary bimdata-btn__radius"&gt;TEST&lt;/BIMDataButton&gt;
          &lt;BIMDataSearch placeholder="Search" class="bimdata-search-bar__radius bimdata-search-bar__primary"&gt;&lt;/BIMDataSearch&gt;
        </pre>
      </Code>

      <h4 class="bimdata-h4">5. Import components style</h4>
      <Code language="javascript">
        <pre>
          @import "~@bimdata/design-system/dist/styles/component.css";
        </pre>
      </Code>
    </div>
  </main>
</template>

<script>
import Code from "../Elements/Code/Code.vue";

import highlight from "../../../directives/highlight.js";
import copy from "../../../directives/copy.js";

export default {
  components: {
    Code,
  },
  directives: { highlight, copy },
};
</script>

<style lang="scss" scoped>
@import "./_GettingStarted.scss";
</style>
