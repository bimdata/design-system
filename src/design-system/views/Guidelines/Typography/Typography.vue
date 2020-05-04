<template>
  <main class="article typography">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <div class="typography-family">
        <h3 class="bimdata-h3">Font family</h3>
      </div>
      <div class="typography-size">
        <h3 class="bimdata-h3">Font size</h3>
        <div class="typography-size__content">
          <div class="typography-size__content__item">
            <h1 class="bimdata-h1">Heading H1</h1>
            <small>34px — 2.42857rem</small>
          </div>
          <div class="typography-size__content__item">
            <h2 class="bimdata-h2">Heading H2</h2>
            <small>30px — 2.14286rem</small>
          </div>
          <div class="typography-size__content__item">
            <h3 class="bimdata-h3">Heading H3</h3>
            <small>26px — 1.85714rem</small>
          </div>
          <div class="typography-size__content__item">
            <h4 class="bimdata-h4">Heading H4</h4>
            <small>24px — 1.71429rem</small>
          </div>
          <div class="typography-size__content__item">
            <h5 class="bimdata-h5">Heading H5</h5>
            <small>20px — 1.42857rem</small>
          </div>
          <div class="typography-size__content__item">
            <h6 class="bimdata-h6">Heading H6</h6>
            <small>16px — 1.14286rem</small>
          </div>
          <div class="typography-size__content__item">
            <p class="bimdata-text">Button</p>
            <small>14px — 1rem</small>
          </div>
        </div>
      </div>
      <div class="typography-weight">
        <h3 class="bimdata-h3">Font weights</h3>
        <div class="typography-weight__content">
          <div class="typography-weight__content__item">
            <pre
              class="language-scss"
              v-copy="onCopy"
            ><code class="language-scss" v-highlight:scss>$primary-font;</code></pre>
            <small>Roboto Regular</small>
          </div>
          <div class="typography-weight__content__item">
            <pre
              class="language-scss"
              v-copy="onCopy"
            ><code v-highlight:scss class="language-scss">$primary-font-medium;</code></pre>
            <small>Roboto Medium</small>
          </div>
          <div class="typography-weight__content__item">
            <pre
              class="language-scss"
              v-copy="onCopy"
            ><code class="language-scss" v-highlight:scss>$primary-font-bold;</code></pre>
            <small>Roboto Bold</small>
          </div>
        </div>
      </div>
      <div class="typography-use">
        <h3 class="bimdata-h3">How to use</h3>
        <p>
          If you use sass preprocessor into your project, you can import
          font-size mixins for display font-size into rem unity. If not, you can
          simply use font-size property.
        </p>
        <div class="typography-use__content">
          <pre
            class="language-scss"
            v-copy="onCopy"
          ><code class="language-scss" v-highlight:scss>@import "./assets/scss/mixins/font-size.scss"</code></pre>
          <pre
            class="language-scss"
            v-copy="onCopy"
          ><code class="language-scss" v-highlight:scss>font-size: calculateEm(12px);</code></pre>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import highlight from "@/directives/highlight.js";
import copy from "@/directives/copy.js";

import Prism from "prismjs";

export default {
  methods: {
    onCopy(e) {
      this.alerts = true;
      this.message = "copied successfully !";
      this.alertType = "success";
      setTimeout(() => {
        this.alerts = false;
      }, 3000);
    }
  },
  directives: { highlight, copy }
};
</script>

<style lang="scss">
// import PRISMJS THEME
@import "../../../../../node_modules/prismjs/themes/prism-tomorrow.css";

@import "@/assets/scss/_BIMDataVariables.scss";

@import "./_Typography.scss";
</style>
