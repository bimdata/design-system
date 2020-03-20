<template>
  <main class="article spacing">
    <div class="article-wrapper">
      <h2>{{ $route.name }}</h2>
      <nav>test</nav>
      <div class="spacing-system">
        <h3>The spacing system</h3>
        <p>All spacing is defined by a base value of 12 pixels. This value of 12 px is the basic unit of measurement for spacing.</p>
        <div class="spacing__code">
          <div class="spacing__code__item">
            <pre><code class="language-scss">$spacing-unit;</code></pre>
            <small>scss</small>
          </div>
          <div class="spacing__code__item">
            <pre><code class="language-css">var(--spacing-unit);</code></pre>
            <small>css</small>
          </div>
          <div class="spacing__code__item">
            <pre class="language-xml"><code class="language-xml" v-highlight:xml>&lt;div class="mt-12"&gt;&lt;/div&gt;</code></pre>
            <small>html</small>
          </div>
        </div>
      </div>

      <div class="spacing-scale">
        <h3>Global spacing scale</h3>
        <BIMDataTable :rows="spacingScale"></BIMDataTable>
      </div>

      <div class="space-mixins">
        <h3>The spacing mixins</h3>
        <pre><code class="language-css">@import "./assets/scss/mixins/spacing.scss"</code></pre>
        <BIMDataTable :rows="spacingMixins"></BIMDataTable>

      </div>
    </div>
  </main>
</template>

<script>
import highlight from "@/directives/highlight.js";
import Prism from "prismjs";

import BIMDataTable from "@/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

export default {
  components: {
    BIMDataTable
  },
  data(){
    return {
      spacingScale: [
        [
          "Size value", "SCSS value", "CSS value"
        ],
        [
          "6px", "calc(#{$spacing-unit} / 2)", "calc(var(--spacing-unit) / 2)"
        ],
        [
          "8px", "calc(#{$spacing-unit} / 1.5)", "calc(var(--spacing-unit) / 1.5)"
        ],
        [
          "12px", "$spacing-unit", "var(--spacing-unit"
        ],
        [
          "18px", "calc(#{$spacing-unit} * 1.5)", "calc(var(--spacing-unit) * 1.5)"
        ],
        [
          "24px", "calc(#{$spacing-unit} * 2)", "calc(var(--spacing-unit) * 2)"
        ]
      ],
      spacingMixins: [
        [
          "Size value", "Html class value"
        ],
        [
          "margin-top: 6px", "mt-6"
        ],
        [
          "margin-bottom: 6px", "mb-6"
        ],
        [
          "margin-left: 6px", "ml-6"
        ],
        [
          "margin-right: 6px", "mr-6"
        ],
        [
          "padding-top: 6px", "pt-6"
        ],
        [
          "padding-bottom: 6px", "pb-6"
        ],
        [
          "padding-left: 6px", "pl-6"
        ],
        [
          "padding-right: 6px", "pr-6"
        ],
        [
          "margin-top: 12px", "mt-12"
        ],
        [
          "margin-bottom: 12px", "mb-12"
        ],
        [
          "margin-left: 12px", "ml-12"
        ],
        [
          "margin-right: 12px", "mr-12"
        ],
        [
          "padding-top: 12px", "pt-12"
        ],
        [
          "padding-bottom: 12px", "pb-12"
        ],
        [
          "padding-left: 12px", "pl-12"
        ],
        [
          "padding-right: 12px", "pr-12"
        ]
      ]
    }
  },
  directives: { highlight }
}
</script>

<style lang="scss">
  // import PRISMJS THEME
  @import "../../../../../node_modules/prismjs/themes/prism-tomorrow.css";

  @import "@/assets/scss/_BIMDataVariables.scss";
  @import "@/assets/scss/mixins/_font-size.scss";

  @import "./_Spacing.scss";
</style>