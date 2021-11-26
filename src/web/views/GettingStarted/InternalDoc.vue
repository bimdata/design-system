<template>
  <main class="article internal-doc">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <BIMDataText margin="5px 0 10px"
        >All the design system resources are in the directory:
        <code class="code-highlight">src/web/views</code>. The following
        explanations concern the addition of a new component. If you want to add
        another element (utilities, guidelines etc), follow the same
        instructions but do it in the corresponding folder.</BIMDataText
      >

      <BIMDataText component="h3" color="color-primary" margin="20px 0 10px"
        >How to add a new component to the design system</BIMDataText
      >
      <ol>
        <li>
          In the <code class="code-highlight">Components</code> directory create
          a new directory with the name of your component. Inside it, create
          your .vue file as well as .scss.
          <Code language="xml">
            <pre>
              &lt;template&gt;
                &lt;main class="article [your-custom-class]"&gt;
                  &lt;div class="article-wrapper"&gt;
                    &lt;BIMDataText component="h1" color="color-primary"&gt; &#123;&#123;getRouteName()&#125;&#125; &lt;/BIMDataText&gt;
                  &lt;/div&gt;
                &lt;/main&gt;
              &lt;/template&gt;

              &lt;script&gt;
              import BIMDataText from "../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
              export default {
                components: {
                  BIMDataText,
                },
              }
              &lt;/script&gt;

              &lt;style lang="scss" scoped&gt;
                @import "./_YourFileStyle.scss";
              &lt;/style&gt;
            </pre>
          </Code>
        </li>

        <li>
          In the <code class="code-highlight">store.js</code> file, add your
          item in the corresponding children section (getting started,
          guidelines or components).
          <Code language="javascript">
            <pre>
              {
                title: "YourFileTitle",
                img: require("./web/assets/img/icon-YourFileTitle.svg"),
                path: "yourFileTitle",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                btn: "View YourFileTitle"
              }
            </pre>
          </Code>
        </li>
        <li>
          In the <code class="code-highlight">router.js</code> file import your
          new .vue file and add it in the corresponding children section
          (getting started, guidelines or components).
          <Code language="javascript">
            import YourFileComponent from
            '../views/Components/YourFolder/YourFileTitle.vue'
          </Code>
          <Code language="javascript">
            <pre>
              {
                path: 'yourFileTitle',
                name: 'yourFileTitle',
                component: YourFileComponent
              }
            </pre>
          </Code>
        </li>
      </ol>

      <BIMDataText component="h3" color="color-primary" margin="20px 0 10px">
        How to add a new component to the build of design system
      </BIMDataText>
      <p>
        For a correct build, don't forget to add your new component in the
        following 3 files:
      </p>
      <ul>
        <li>./rollup.config.js</li>
        <li>./components.js</li>
        <li>./src/BIMDataComponents/index.js</li>
      </ul>
    </div>
  </main>
</template>

<script>
import Code from "../Elements/Code/Code.vue";
import BIMDataText from "../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

import highlight from "../../../BIMDataDirectives/highlight.js";
import copy from "../../../BIMDataDirectives/copy.js";

export default {
  directives: { highlight, copy },
  components: {
    Code,
    BIMDataText,
  },
  methods: {
    getRouteName() {
      return "{{ $route.name }}";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./_GettingStarted.scss";
</style>
