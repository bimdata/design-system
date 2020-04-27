<template>
  <main class="article utilities-margin">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>
      <p>All spacing is defined by a base value of 12 pixels. This value of 12 px is the basic unit of measurement for spacing.</p>
      <ComponentCode :componentTitle="$route.name">
        <template #module>
          <div class="ds-spacing">
            <div :class="getMarginClass()">
              <span>{{getMarginText()}}</span>
            </div>
          </div>
        </template>

        <template #parameters>
          <template v-for="checkbox of checkboxes">
            <BIMDataCheckbox
              :text="checkbox.text"
              v-model="checkbox.checked"
              :key="checkbox.text"
              class="m-y-6"
            >
            </BIMDataCheckbox>
          </template>
        </template>

        <template #code>
          <pre>
            &lt;div class="{{getMarginText()}}"&gt;
              content here
            &lt;/div&gt;
          </pre>
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
          class: "m-6",
          checked: false,
          text: "global 6px margin"
        },
        {
          class: "m-x-6",
          checked: false,
          text: "horizontal 6px margin"
        },
        {
          class: "m-y-6",
          checked: false,
          text: "vertical 6px margin"
        },
        {
          class: "m-t-6",
          checked: false,
          text: "margin top 6px"
        },
        {
          class: "m-b-6",
          checked: false,
          text: "margin bottom 6px"
        },
        {
          class: "m-l-6",
          checked: false,
          text: "margin left 6px"
        },
        {
          class: "m-r-6",
          checked: false,
          text: "margin right 6px"
        },
        {
          class: "m-12",
          checked: false,
          text: "global 12px margin"
        },
        {
          class: "m-x-12",
          checked: false,
          text: "horizontal 12px margin"
        },
        {
          class: "m-y-12",
          checked: false,
          text: "vertical 12px margin"
        },
        {
          class: "m-t-12",
          checked: false,
          text: "margin top 12px"
        },
        {
          class: "m-b-12",
          checked: false,
          text: "margin bottom 12px"
        },
        {
          class: "m-l-12",
          checked: false,
          text: "margin left 12px"
        },
        {
          class: "m-r-12",
          checked: false,
          text: "margin right 12px"
        }
      ],
    }
  },
  methods: {
    getMarginClass() {
      return this.checkboxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.class);
    },
    getMarginText() {
      return this.getMarginClass().join(" ");
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/BIMData.scss";

  @import "./_Margin.scss";
</style>