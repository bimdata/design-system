<template>
  <main class="article internal-doc">
    <div class="article-wrapper">
      <h2>{{ $route.name }}</h2>
      <h3>How to add a new section to the design system</h3>
      <ol>
        <li>
          In the <code class="code-highlight">view-items</code>  directory create a new directory with the name of your component. Inside it, create your .vue file as well as .scss.
          <pre class="language-xml">
          <code class="language-xml" v-highlight:xml>
            &lt;template&gt;
              &lt;main class="article article-[your-file-class]"&gt;
                &lt;div class="article-wrapper"&gt;
                  &lt;h2&gt; &#123;&#123;getRouteName()&#125;&#125; &lt;/h2&gt;
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
          </code>
        </pre>
        </li>

        <li>
          In the <code class="code-highlight">store.js</code> file, add your item in the corresponding children section (getting started, guidelines or components).
          <pre class="language-javascript">
            <code class="language-javascript" v-highlight:javascript>
              {
                title: "YourFileTitle",
                img: require("./design-system/assets/img/icon-YourFileTitle.svg"),
                path: "YourFileTitle",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                btn: "View YourFileTitle"
              }
            </code>
          </pre>
        </li>
        <li>
          In the <code class="code-highlight">router.js</code> file import your new .vue file and add it in the corresponding children section (getting started, guidelines or components).
          <pre class="language-javascript">
            <code class="language-javascript" v-highlight:javascript>
              import YourFileComponent from '../views/views-item/YourFolder/YourFileTitle.vue'
            </code>
          </pre>
          <pre class="language-javascript">
            <code class="language-javascript" v-highlight:javascript>
              {
                path: 'YourFileTitle',
                name: 'YourFileTitle',
                component: YourFileComponent
              }
            </code>
          </pre>
        </li>
      </ol>
    </div>
  </main>
</template>

<script>
import highlight from "../../../../directives/highlight.js";
import copy from "../../../../directives/copy.js";
import Prism from "prismjs";

export default {
  directives: { highlight, copy },
  methods: {
    getRouteName(){
      return "{{ $route.name }}"
    }
  }
}

</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_GettingStarted.scss";
</style>