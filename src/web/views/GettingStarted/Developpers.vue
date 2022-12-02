<template>
  <main class="article developpers">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <BIMDataText margin="5px 0" lineHeight="24px"
        >How to get started with BIMData's vuejs component library</BIMDataText
      >
      <BIMDataText component="h4" color="color-primary" margin="20px 0 10px"
        >1. Install the package</BIMDataText
      >
      <BIMDataText margin="5px 0"
        >BIMData’s component library is called
        <code class="code-highlight">design-system</code>, and it’s available on
        the npm registry.</BIMDataText
      >
      <Code language="bash"> npm i @bimdata/design-system </Code>

      <BIMDataText component="h4" color="color-primary" margin="20px 0 10px"
        >2. Import component</BIMDataText
      >
      <BIMDataText margin="5px 0"
        >Once you’ve installed the package you can individually import any
        component available in BIMData's design system:</BIMDataText
      >
      <Code language="javascript">
        <pre>
          import BIMDataButton from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataButton.js";
        </pre>
      </Code>

      <BIMDataText margin="5px 0"
        >Or you can import them more easily like this:</BIMDataText
      >
      <Code language="javascript">
        <pre>
          import {
            BIMDataIcon,
            BIMDataPaginatedList,
            BIMDataButton,
          } from "@bimdata/design-system/components.js";
        </pre>
      </Code>
      <BIMDataText component="h5" color="color-primary" margin="20px 0 10px"
        >About Vue 2.x vs. Vue 3.x</BIMDataText
      >
      <p>
        The design system was originally developed with Vue 2.6+. As a result
        the components imported as described above won't work in Vue 3.x
        applications.
      </p>
      <p>
        To fix this we adapted each components to be compatible with Vue 3.x and
        added a new "Vue 3 ready" version of them to the design system package.
      </p>
      <p>
        To use Vue 3 compatible components, all you need to do is adding a
        <code class="code-highlight">vue3/</code> prefix before component name
        in the <code class="code-highlight">import</code> module name as follow:
      </p>
      <Code language="javascript">
        <pre>
          import BIMDataButton from "@bimdata/design-system/dist/js/BIMDataComponents/vue3/BIMDataButton.js";
          //                                                      vue3 prefix here -> ^^^^
        </pre>
      </Code>

      <BIMDataText component="h4" color="color-primary" margin="20px 0 10px"
        >3. Register component</BIMDataText
      >
      <BIMDataText margin="5px 0"
        >into your <code class="code-highlight">.vue</code> file, define your
        component into
        <code class="code-highlight">components</code> option</BIMDataText
      >
      <Code language="javascript">
        <pre>
          components: {
          BIMDataButton,
          BIMDataSearch
        }
        </pre>
      </Code>

      <BIMDataText component="h4" color="color-primary" margin="20px 0 10px"
        >4. Use component</BIMDataText
      >
      <Code language="javascript">
        <pre>
          &lt;BIMDataButton class="bimdata-btn__fill bimdata-btn__fill--primary bimdata-btn__radius"&gt;TEST&lt;/BIMDataButton&gt;
          &lt;BIMDataSearch placeholder="Search" class="bimdata-search-bar__radius bimdata-search-bar__primary"&gt;&lt;/BIMDataSearch&gt;
        </pre>
      </Code>

      <BIMDataText component="h4" color="color-primary" margin="20px 0 10px"
        >5. Import all components style</BIMDataText
      >
      <BIMDataText margin="5px 0"
        >If you use a scss preprocessor you can import:</BIMDataText
      >
      <Code language="scss">
        <pre>
          @import "node_modules/@bimdata/design-system/dist/scss/BIMData.scss";
        </pre>
      </Code>
      <BIMDataText margin="5px 0"
        >If you use a scss preprocessor you can import:</BIMDataText
      >
      <Code language="css">
        <pre>
          @import "node_modules/@bimdata/design-system/dist/css/design-system.css";
        </pre>
      </Code>

      <BIMDataText component="h4" color="color-primary" margin="20px 0 10px"
        >Notes</BIMDataText
      >
      <BIMDataText component="h5" color="color-primary" margin="20px 0 10px"
        >Scoped style & BIMDataComponents custom</BIMDataText
      >
      <ul class="bimdata-list">
        <li class="m-b-24">
          If you use 'scoped' for your scss or css stylesheet and you want to
          customize the BIMData components, consider using the deep selector.
          More information on the
          <a
            href="https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors"
            target="_blank"
            >Vue.js documentation</a
          >.
        </li>
        <li class="m-y-24">
          Path for import js only :
          <Code language="javascript">
            <pre>import { BIMDataButton } from '@bimdata/design-system'</pre>
          </Code>
        </li>
        <li class="m-y-24">
          Path for import js + css style :
          <Code language="javascript">
            <pre>
import { BIMDataButton } from '@bimdata/design-system/components.js'</pre
            >
          </Code>
        </li>
      </ul>

      <BIMDataText component="h5" color="color-primary" margin="20px 0 10px"
        >SSR & BIMDataComponents compatibility</BIMDataText
      >
      <ul class="bimdata-list">
        <li class="m-b-24">
          BIMDataComponents are compatible with SSR. More information on the SSR
          on the
          <a href="https://vuejs.org/v2/guide/ssr.html" target="_blank"
            >Vue.js documentation</a
          >.
        </li>
        <li class="m-y-24">
          <span>If you want to be SSR compatible, import:</span>
          <Code language="javascript">
            <pre>import { BIMDataButton } from '@bimdata/design-system'</pre>
          </Code>
          <span>This allows you to import only the js of the components.</span>
        </li>
        <li class="m-y-24">
          <span
            >Don't forget to import the stylesheet globally, like this:</span
          >
          <Code language="javascript">
            <pre>
import './node_modules/@bimdata/design-system/dist/css/design-system.css'</pre
            >
          </Code>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import Code from "../Elements/Code/Code.vue";

import BIMDataText from "../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

import highlight from "../../../BIMDataDirectives/highlight.js";
import copy from "../../../BIMDataDirectives/copy.js";

export default {
  components: {
    Code,
    BIMDataText,
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
