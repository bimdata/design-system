<template>
  <main class="article spacing">
    <div class="article-wrapper">
      <h2>{{ $route.name }}</h2>
      <!-- <nav>test</nav> -->
      <div class="spacing-system">
        <h3>The spacing system</h3>
        <p>All spacing is defined by a base value of 12 pixels. This value of 12 px is the basic unit of measurement for spacing.</p>
        <div class="spacing__code">
          <div class="spacing__code__item">
            <Code language="scss">
              $spacing-unit;
            </Code>
            <small>scss</small>
          </div>
          <div class="spacing__code__item">
            <Code language="css">
              var(--spacing-unit);
            </Code>
            <small>css</small>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Code from "../../Elements/Code/Code.vue";

export default {
  components: {
    Code
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";
  @import "@/assets/scss/mixins/_font-size.scss";

  @import "./_Spacing.scss";
</style>