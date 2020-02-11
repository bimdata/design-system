<template>
  <div class="article developpers">
    <main>
      <div class="article-wrapper">
        <h1>Developpers</h1>
        <p>How to get started with BIMData's vuejs component library</p>
        <h4>1. Install the package</h4>
        <p>BIMData’s component library is called <code>design-system</code>, and it’s available on the npm registry.</p>
        <pre class="language-bash" v-copy="onCopy">
          <code class="language-bash" v-highlight:bash>npm i @bimdata/design-system</code>
        </pre>

        <h4>2. Import component</h4>
        <p>
          Once you’ve installed the package you can import any component available in BIMData's design system:
        </p>
        <pre class="language-javascript" v-copy="onCopy">
          <code class="language-javascript" v-highlight:javascript>import BIMDataComponents from '@bimdata/design-system'</code>
        </pre>

        <h4>3. Register component</h4>
        <p>
          into your <code>.vue</code> file, define your component into <code class="code-highlight">components</code> option
        </p>
        <pre class="language-javascript" v-copy="onCopy">
          <code class="language-javascript" v-highlight:javascript>
            components: {
              BIMDataButton : BIMDataComponents.BIMDataButton,
              BIMDataSearch : BIMDataComponents.BIMDataSearch,
            }
          </code>
        </pre>

        <h4>4. Use component</h4>
        <pre class="language-javascript" v-copy="onCopy">
          <code class="language-javascript" v-highlight:javascript>
            &lt;BIMDataButton class="bimdata-btn__fill bimdata-btn__fill--primary bimdata-btn__radius"&gt;TEST&lt;/BIMDataButton&gt;
            &lt;BIMDataSearch value="Search"&gt;&lt;/BIMDataSearch&gt;
          </code>
        </pre>
    </div>
    <Alerts v-if="alerts" :message="message" :class="alertType" />
    </main>
  </div>
</template>

<script>
import Alerts from "../Alerts/Alerts.vue";

import highlight from "../../../../directives/highlight.js";
import copy from "../../../../directives/copy.js";
import Prism from "prismjs";

export default {
  components: {
    Alerts
  },
  data() {
    return {
      alerts: false
    }
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
  @import "../../../../assets/scss/_BIMDataVariables.scss";

  @import "./_GettingStarted.scss";
</style>