<template>
  <main class="article developpers">
    <div class="article-wrapper">
      <BIMDataText component="h1" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">
        Developers
      </BIMDataText>
      <BIMDataText margin="5px 0" lineHeight="24px">
        How to get started with BIMData's Vue components library.
      </BIMDataText>

      <BIMDataText component="h4" color="color-primary" margin="20px 0 10px">
        1. Install the package
      </BIMDataText>
      <BIMDataText margin="5px 0">
        BIMData design system is available on the npm registry and can be
        installed the following way:
      </BIMDataText>
      <Code language="bash"> npm i @bimdata/design-system </Code>

      <BIMDataText component="h5" color="color-primary" margin="20px 0 10px">
        Note: About the design system packaging
      </BIMDataText>
      <BIMDataText margin="5px 0">
        Since version 2, the design system is not bundled anymore. This means
        that, when the package is installed, you get the
        <i>untransformed</i>
        raw <code class="code-highlight">.vue</code> files right into your
        <code class="code-highlight">node_modules</code>. It is thus the "host"
        application responsibility to "compile/build" and bundle those
        components the same way as the other components.
      </BIMDataText>

      <BIMDataText component="h4" color="color-primary" margin="20px 0 10px">
        2. Import global styles
      </BIMDataText>
      <BIMDataText margin="5px 0">
        To have all design system global styles available in your application
        you can use the following in your stylesheet:
      </BIMDataText>
      <Code language="css">
        <pre>
          @import "@bimdata/design-system/src/assets/css/design-system.css";
        </pre>
      </Code>

      <BIMDataText component="h4" color="color-primary" margin="20px 0 10px">
        3. Use design system Vue plugin
      </BIMDataText>
      <BIMDataText margin="5px 0">
        The preferred way of using design system components in your application
        is to use the provided
        <a
          href="https://github.com/bimdata/design-system/blob/develop/vue3-plugin.js"
          target="_blank"
        >
          Vue 3 plugin
        </a>
      </BIMDataText>
      <Code language="javascript">
        <pre>
          import BIMDataDesignSystem from "@bimdata/design-system/vue3-plugin.js";
          ...

          app.use(BIMDataDesignSystem());
        </pre>
      </Code>
      <BIMDataText margin="5px 0">
        The plugin will register all components and directives globally so you
        can easily use them across your application.
      </BIMDataText>

      <BIMDataText component="h4" color="color-primary" margin="20px 0 10px">
        4. Import and use components individually
      </BIMDataText>
      <BIMDataText margin="5px 0">
        If you don't want to use the plugin, you can also import components
        individually. For example, to import
        <code class="code-highlight">BIMDataButton</code> component and use it
        in your own code, you can do the following:
      </BIMDataText>
      <Code language="javascript">
        <pre>
          import BIMDataButton from "@bimdata/design-system/src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
        </pre>
      </Code>
      <BIMDataText margin="5px 0">
        You can also import multiple components at once like this:
      </BIMDataText>
      <Code language="javascript">
        <pre>
          import {
            BIMDataButton,
            BIMDataIcon,
            BIMDataPaginatedList,
          } from "@bimdata/design-system/src/BIMDataComponents/index.js";
        </pre>
      </Code>

      <BIMDataText component="h5" color="color-primary" margin="20px 0 10px">
        Note: About Vue 2 vs. Vue 3 compatibility
      </BIMDataText>
      <BIMDataText margin="5px 0">
        For legacy reasons most of the components are written with the "Vue 2
        style"
        <a href="https://vuejs.org/glossary/#options-api" target="_blank">
          Options API
        </a>
        , they should thus be compatible with any Vue 2 / Vue 3 codebase.
        However since Vue 2 support was dropped with version 2 some components
        may not be compatible with Vue 2 applications.
      </BIMDataText>

      <BIMDataText component="h4" color="color-primary" margin="20px 0 10px">
        5. Real usage example
      </BIMDataText>
      <BIMDataText margin="5px 0">
        You can refer to our
        <a href="https://github.com/bimdata/platform" target="_blank">
          platform
        </a>
        app for a full example of how to use our design system in a real world
        application.
      </BIMDataText>
    </div>
  </main>
</template>

<script>
import copy from "../../../BIMDataDirectives/copy.js";
import highlight from "../../../BIMDataDirectives/highlight.js";

import Code from "../Elements/Code/Code.vue";
import BIMDataText from "../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    Code,
    BIMDataText,
  },
  directives: {
    copy,
    highlight,
  },
};
</script>

<style scoped lang="scss" src="./_GettingStarted.scss"></style>
