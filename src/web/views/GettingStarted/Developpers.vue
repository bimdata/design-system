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
        Once you’ve installed the package you can individually import any component available
        in BIMData's design system:
      </p>
      <Code language="javascript">
        <pre>
          import BIMDataButton from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataButton.js";
        </pre>
      </Code>

      <p class="bimdata-text">
        Or you can import them more easily like this:
      </p>
      <Code language="javascript">
        <pre>
          import {
            BIMDataIcon,
            BIMDataPaginatedList,
            BIMDataButton,
          } from "@bimdata/design-system/components.js";
        </pre>
      </Code>

      <h6 class="bimdata-h6">About Vue 2.x vs. Vue 3.x</h6>
      <p>
        The design system was originally developed with Vue 2.6+.
        As a result the components imported as described above won't work in Vue 3.x applications.
      </p>
      <p>
        To fix this we adapted each components to be compatible with Vue 3.x
        and added a new "Vue 3 ready" version of them to the design system package.
      </p>
      <p>
        To use Vue 3 compatible components, all you need to do is adding a <code class="code-highlight">vue3/</code>
        prefix before component name in the <code class="code-highlight">import</code> module name as follow:
      </p>
      <Code language="javascript">
        <pre>
          import BIMDataButton from "@bimdata/design-system/dist/js/BIMDataComponents/vue3/BIMDataButton.js";
          //                                                      vue3 prefix here -> ^^^^
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
          @import "node_modules/@bimdata/design-system/dist/scss/BIMData.scss";
        </pre>
      </Code>
      <p>Else, you can import:</p>
      <Code language="css">
        <pre>
          @import "node_modules/@bimdata/design-system/dist/css/design-system.css";
        </pre>
      </Code>

      <h4 class="bimdata-h4">Notes</h4>
      <ul class="bimdata-list">
        <li class="m-b-24">If you use 'scoped' for your scss or css stylesheet and you want to customize the BIMData components, consider using the deep selector. More information on the <a href="https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors" target="_blank">Vue.js documentation</a>.</li>
        <li class="m-y-24">
          Path for import js only :
          <pre>@bimdata/design-system</pre>
        </li>
        <li class="m-y-24">
          Path for import js + css style :
          <pre>@bimdata/design-system/components.js</pre>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import Code from "../Elements/Code/Code.vue";

import highlight from "../../../BIMDataDirectives/highlight.js";
import copy from "../../../BIMDataDirectives/copy.js";

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
