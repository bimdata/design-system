<template>
  <div class="article typography">
    <main>
      <div class="article-wrapper">
        <h2>{{ $route.name }}</h2>
        <div class="typography-family">
          <h3>Font family</h3>
        </div>
        <div class="typography-size">
          <h3>Font size</h3>
          <div class="typography-size__content">
            <div class="typography-size__content__item">
              <h1>Heading H1</h1>
              <small>96px</small>
            </div>
            <div class="typography-size__content__item">
              <h2>Heading H2</h2>
              <small>60px</small>
            </div>
            <div class="typography-size__content__item">
              <h3>Heading H3</h3>
              <small>48px</small>
            </div>
            <div class="typography-size__content__item">
              <h4>Heading H4</h4>
              <small>34px</small>
            </div>
            <div class="typography-size__content__item">
              <h5>Heading H5</h5>
              <small>24px</small>
            </div>
            <div class="typography-size__content__item">
              <h6>Heading H6</h6>
              <small>20px</small>
            </div>
            <div class="typography-size__content__item">
              <p>Button</p>
              <small>14px</small>
            </div>
          </div>
        </div>
        <div class="typography-weight">
          <h3>Font weights</h3>
          <div class="typography-weight__content">
            <div class="typography-weight__content__item">
              <pre><code class="language-scss"><span class="var">$primary-font;</span></code></pre>
              <small>Roboto Regular</small>
            </div>
            <div class="typography-weight__content__item">
              <pre><code class="language-scss">$primary-font-medium;</code></pre>
              <small>Roboto Medium</small>
            </div>
            <div class="typography-weight__content__item">
              <pre><code class="language-scss">$primary-font-bold;</code></pre>
              <small>Roboto Bold</small>
            </div>
          </div>
        </div>
        <div class="typography-use">
          <h3>How to use</h3>
          <p>If you use sass preprocessor into your project, you can import font-size mixins for display font-size into rem unity. If not, you can simply use font-size property.</p>
          <div class="typography-use__content">
            <pre><code class="language-css">@import "./assets/scss/mixins/font-size.scss"</code></pre>
            <pre><code class="language-css">@include font-size(12px);</code></pre>
          </div>
        </div>
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

  @import "./_Typography.scss";
</style>