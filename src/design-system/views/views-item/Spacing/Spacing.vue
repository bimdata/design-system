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
            <pre><code class="language-html">&lt;div class="mt-12"&gt;&lt;/div&gt;</code></pre>
            <small>html</small>
          </div>
        </div>
      </div>

      <div class="spacing-scale">
        <h3>Global spacing scale</h3>
        <table>
          <thead>
            <tr>
              <td>Size value</td>
              <td>Scss value</td>
              <td>Css value</td>
            </tr>
          </thead>
          <tr>
            <td>6px</td>
            <td>calc(#{$spacing-unit} / 2)</td>
            <td>calc(var(--spacing-unit) / 2)</td>
          </tr>
          <tr>
            <td>8px</td>
            <td>calc(#{$spacing-unit} / 1.5)</td>
            <td>calc(var(--spacing-unit) / 1.5)</td>
          </tr>
          <tr>
            <td>12px</td>
            <td>$spacing-unit</td>
            <td>var(--spacing-unit</td>
          </tr>
          <tr>
            <td>18px</td>
            <td>calc(#{$spacing-unit} * 1.5)</td>
            <td>calc(var(--spacing-unit) * 1.5)</td>
          </tr>
          <tr>
            <td>24px</td>
            <td>calc(#{$spacing-unit} * 2)</td>
            <td>calc(var(--spacing-unit) * 2)</td>
          </tr>
        </table>
      </div>

      <div class="space-mixins">
        <h3>The spacing mixins</h3>
        <pre><code class="language-css">@import "./assets/scss/mixins/spacing.scss"</code></pre>
        <table>
          <thead>
            <tr>
              <td>Size value</td>
              <td>Html class value</td>
            </tr>
          </thead>
          <tr>
            <td>margin-top: 6px</td>
            <td>mt-6</td>
          </tr>
          <tr>
            <td>margin-bottom: 6px</td>
            <td>mb-6</td>
          </tr>
          <tr>
            <td>margin-left: 6px</td>
            <td>ml-6</td>
          </tr>
          <tr>
            <td>margin-right: 6px</td>
            <td>mr-6</td>
          </tr>
          <tr>
            <td>padding-top: 6px</td>
            <td>pt-6</td>
          </tr>
          <tr>
            <td>padding-bottom: 6px</td>
            <td>pb-6</td>
          </tr>
          <tr>
            <td>padding-left: 6px</td>
            <td>pl-6</td>
          </tr>
          <tr>
            <td>padding-right: 6px</td>
            <td>pr-6</td>
          </tr>
          <tr>
            <td>margin-top: 12px</td>
            <td>mt-12</td>
          </tr>
          <tr>
            <td>margin-bottom: 12px</td>
            <td>mb-12</td>
          </tr>
          <tr>
            <td>margin-left: 12px</td>
            <td>ml-12</td>
          </tr>
          <tr>
            <td>margin-right: 12px</td>
            <td>mr-12</td>
          </tr>
          <tr>
            <td>padding-top: 12px</td>
            <td>pt-12</td>
          </tr>
          <tr>
            <td>padding-bottom: 12px</td>
            <td>pb-12</td>
          </tr>
          <tr>
            <td>padding-left: 12px</td>
            <td>pl-12</td>
          </tr>
          <tr>
            <td>padding-right: 12px</td>
            <td>pr-12</td>
          </tr>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "../../../../assets/scss/_BIMDataVariables.scss";
  @import "../../../../assets/scss/mixins/_font-size.scss";

  @import "./_Spacing.scss";
</style>