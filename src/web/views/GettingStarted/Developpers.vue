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
        <pre>
          import BIMDataButton from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataButton.js";
          import BIMDataSearch from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataSearch.js";
        </pre>
      </Code>

      <h4 class="bimdata-h4">3. Register component</h4>
      <p class="bimdata-text">
        into your <code class="code-highlight">.vue</code> file, define your
        component into <code class="code-highlight">components</code> option
      </p>
      <Code language="javascript">
        <pre>
          components: {
          BIMDataButton,
          BIMDataSearch
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

      <h4 class="bimdata-h4">5. Import all components style</h4>
      <p>If you use a scss preprocessor you can import:</p>
      <Code language="scss">
        <pre>
          @import "~@bimdata/design-system/dist/scss/BIMData.scss";
        </pre>
      </Code>
      <p>Else, you can import:</p>
      <Code language="css">
        <pre>
          @import "~@bimdata/design-system/dist/css/design-system.css";
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
.bimdata-ds__code {
  &:nth-child(5),
  &:last-child {
    margin: 0;
  }
}
</style>
