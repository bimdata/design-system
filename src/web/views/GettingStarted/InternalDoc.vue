<template>
  <main class="article internal-doc">
    <div class="article-wrapper">
      <BIMDataText component="h1" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">
        Internal Documentation
      </BIMDataText>
      <BIMDataText margin="5px 0" lineHeight="24px">
        All the design system resources are in the directory:
        <code class="code-highlight">src/web/views</code>. The following
        explanations concern the addition of a new component. If you want to add
        another element (utilities, guidelines etc), follow the same
        instructions but do it in the corresponding folder.
      </BIMDataText>

      <BIMDataText component="h3" color="color-primary" margin="20px 0 10px">
        How to add a new component to the design system
      </BIMDataText>
      <ol class="color-granite">
        <li>
          In the <code class="code-highlight">Components</code> directory create
          a new directory with the name of your component. Inside it, create
          your .vue file as well as .scss.
          <Code language="xml">
            <pre>
              &lt;template&gt;
                &lt;main class="article [your-custom-class]"&gt;
                  &lt;div class="article-wrapper"&gt;
                    &lt;BIMDataText component="h1" color="color-primary"&gt;
                      &#123;&#123; $route.name &#125;&#125;
                    &lt;/BIMDataText&gt;
                  &lt;/div&gt;
                &lt;/main&gt;
              &lt;/template&gt;

              &lt;script&gt;
              import BIMDataText from "../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

              export default {
                components: {
                  BIMDataText,
                },
                setup() {
                  // TODO
                },
              };
              &lt;/script&gt;

              &lt;style scoped src="./YourFileStyle.css"&gt;&lt;/style&gt;
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
            <pre>
              import YourFileComponent from "../views/Components/YourFolder/YourFileTitle.vue";
            </pre>
          </Code>
          <Code language="javascript">
            <pre>
              {
                path: "yourFileTitle",
                name: "yourFileTitle",
                component: YourFileComponent
              }
            </pre>
          </Code>
        </li>
      </ol>
    </div>
  </main>
</template>

<script>
import copy from "../../../BIMDataDirectives/copy.js";
import highlight from "../../../BIMDataDirectives/highlight.js";

import Code from "../Elements/Code/Code.vue";
import BIMDataText from "../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

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
