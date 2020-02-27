<template>
  <main class="article internal-doc">
    <div class="article-wrapper">
      <h2>{{ $route.name }}</h2>
      <h3>Comment ajouter une nouvelle rubrique au design system</h3>
      <ol>
        <li>
          Dans le répertoire <code class="code-highlight">view-items</code> créez un nouveau répertoire du nom de votre composant. A l'intérieur de ce dernier, créez votre fichier .vue ainsi que .scss.
          <pre class="language-xml">
          <code class="language-xml" v-highlight:xml>
            &lt;template&gt;
              &lt;main class="article your-file-class"&gt;
                &lt;div class="article-wrapper"&gt;
                  &lt;h2&gt; &#123;&#123; '$route.name' &#125; &#125; &lt;/h2&gt;
                &lt;/div&gt;
              &lt;/main&gt;
            &lt;/template&gt;

            &lt;script&gt;
            export default {

            }
            &lt;/script&gt;

            &lt;style lang="scss"&gt;
              @import "../../../../assets/scss/_BIMDataVariables.scss";

              @import "./_YourFileStyle.scss";
            &lt;/style&gt;
          </code>
        </pre>
        </li>

        <li>
          Dans le fichier <code class="code-highlight">store.js</code> ajouter votre item dans la partie children correpondante (getting started, guidelines ou components).
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
          Dans le fichier <code class="code-highlight">router.js</code> importer votre nouveau fichier .vue et ajouter le dans la partie children correpondante (getting started, guidelines ou components).
          <pre class="language-javascript">
            <code class="language-javascript" v-highlight:javascript>
              import YourFileComponent from '../views/views-item/YourFolder/YourFileTitle.vue'

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
  directives: { highlight, copy }
}

</script>

<style lang="scss">
  @import "../../../../assets/scss/_BIMDataVariables.scss";

  @import "./_GettingStarted.scss";
</style>