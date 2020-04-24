<template>
  <main class="article utilities-margin">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>
      <p>All spacing is defined by a base value of 12 pixels. This value of 12 px is the basic unit of measurement for spacing.</p>
      <!-- <Code language="xml">
        &lt;div class="m-t-6"&gt;&lt;/div&gt;
      </Code>
      <h3>Examples</h3> -->
      <ComponentCode :componentTitle="$route.name">
        <template #module>
          <div class="ds-spacing">
            <div :class="getMarginClass()">
              <span>margin top 6px</span>
            </div>
          </div>
        </template>

        <template #parameters>
          <template v-for="checkbox of checkboxes">
            <BIMDataCheckbox
              :text="checkbox.text"
              v-model="checkbox.checked"
              :key="checkbox.text"
            >
            </BIMDataCheckbox>
          </template>
        </template>

        <template #code>
            <pre></pre>
        </template>
      </ComponentCode>
    </div>
  </main>
</template>

<script>
import ComponentCode from "@/design-system/views/Elements/ComponentCode/ComponentCode.vue";
import BIMDataCheckbox from "@/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";


export default {
  components: {
    ComponentCode,
    BIMDataCheckbox
  },
  data() {
    return {
      checkboxes: [
        {
          class: "m-t-6",
          checked: false,
          text: "margin top 6px",
          disabled: false
        },
        {
          class: "m-b-6",
          checked: false,
          text: "margin bottom 6px",
          disabled: false
        },
        {
          class: "m-l-6",
          checked: false,
          text: "margin left 6px",
          disabled: false
        },
        {
          class: "m-r-6",
          checked: false,
          text: "margin right 6px",
          disabled: false
        },
        {
          class: "m-t-12",
          checked: false,
          text: "margin top 12px",
          disabled: false
        },
        {
          class: "m-b-12",
          checked: false,
          text: "margin bottom 12px",
          disabled: false
        },
        {
          class: "m-l-12",
          checked: false,
          text: "margin left 12px",
          disabled: false
        },
        {
          class: "m-r-12",
          checked: false,
          text: "margin right 12px",
          disabled: false
        }
      ],
    }
  },
  methods: {
    getMarginClass() {
      return this.checkboxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.class);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/BIMData.scss";

  @import "./_Margin.scss";
</style>