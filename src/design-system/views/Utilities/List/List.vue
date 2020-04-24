<template>
  <main class="article article-list">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>
      <pre class="language-xml" v-copy="onCopy">
        <code class="language-xml" v-highlight:xml>&lt;div class="bimdata-list"&gt;&lt;/div&gt;</code>
      </pre>
    </div>
  </main>
</template>

<script>
import Alerts from "../../Elements/Alerts/Alerts.vue";

import highlight from "@/directives/highlight.js";
import copy from "@/directives/copy.js";
import Prism from "prismjs";
export default {
  components: {
    Alerts
  },
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
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_List.scss";
</style>