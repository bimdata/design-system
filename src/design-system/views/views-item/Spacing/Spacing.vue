<template>
  <div class="article spacing">
    <main>
      <div class="article-wrapper">
        <h2>{{ $route.name }}</h2>
        <h3>The spacing system</h3>
        <p>All spacing is defined by a base value of 12 pixels. This value of 12 px is the basic unit of measurement for spacing.</p>
        <pre><code class="language-scss">$spacing-unit;</code></pre>
        <pre class="line-numbers"><code class="language-css">var(--spacing-unit);</code></pre>
      </div>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import "../../../../assets/scss/_BIMDataVariables.scss";

  @import "./_Spacing.scss";
</style>