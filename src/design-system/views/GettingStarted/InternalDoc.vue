<template>
  <main class="article internal-doc">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <p class="bimdata-text">All the design system resources are in the directory: <code class="code-highlight">src/design-system/views</code>. The following explanations concern the addition of a new component. If you want to add another element (utilities, guidelines etc), follow the same instructions but do it in the corresponding folder.</p>
      <h3 class="bimdata-h3">How to add a new component to the design system</h3>
      <ol>
        <li>
          In the <code class="code-highlight">Components</code>  directory create a new directory with the name of your component. Inside it, create your .vue file as well as .scss.
          <Code language="xml">
            <pre>
              &lt;template&gt;
                &lt;main class="article [your-custom-class]"&gt;
                  &lt;div class="article-wrapper"&gt;
                    &lt;h2 class="bimdata-h2"&gt; &#123;&#123;getRouteName()&#125;&#125; &lt;/h2&gt;
                  &lt;/div&gt;
                &lt;/main&gt;
              &lt;/template&gt;

              &lt;script&gt;
              export default {

              }
              &lt;/script&gt;

              &lt;style lang="scss"&gt;
                @import "@/assets/scss/_BIMDataVariables.scss";

                @import "./_YourFileStyle.scss";
              &lt;/style&gt;
            </pre>
          </Code>
        </li>

        <li>
          In the <code class="code-highlight">store.js</code> file, add your item in the corresponding children section (getting started, guidelines or components).
          <Code language="javascript">
            <pre>
              {
                title: "YourFileTitle",
                img: require("./design-system/assets/img/icon-YourFileTitle.svg"),
                path: "yourFileTitle",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                btn: "View YourFileTitle"
              }
            </pre>
          </Code>
        </li>
        <li>
          In the <code class="code-highlight">router.js</code> file import your new .vue file and add it in the corresponding children section (getting started, guidelines or components).
          <Code language="javascript">
            import YourFileComponent from '../views/Components/YourFolder/YourFileTitle.vue'
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
    </div>
  </main>
</template>

<script>
import Code from "../Elements/Code/Code.vue";

import highlight from "@/directives/highlight.js";
import copy from "@/directives/copy.js";
import Prism from "prismjs";

export default {
  directives: { highlight, copy },
  components: {
    Code
  },
  methods: {
    getRouteName(){
      return "{{ $route.name }}"
    }
  }
}

</script>

<style lang="scss" scoped>
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_GettingStarted.scss";
</style>