<template>
  <main class="article utilities-padding">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>
      <p>All spacing is defined by a base value of 12 pixels. This value of 12 px is the basic unit of measurement for spacing.</p>
      <ComponentCode :componentTitle="$route.name">
        <template #module>
          <div class="ds-spacing">
            <div class="ds-spacing__padding" :class="getPaddingClass()">
              <span>{{getPaddingText()}}</span>
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
            &lt;div class="{{getPaddingText()}}"&gt;
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
          class: "p-6",
          checked: false,
          text: "global 6px padding"
        },
        {
          class: "p-x-6",
          checked: false,
          text: "horizontal 6px padding"
        },
        {
          class: "p-y-6",
          checked: false,
          text: "vertical 6px padding"
        },
        {
          class: "p-t-6",
          checked: false,
          text: "padding top 6px"
        },
        {
          class: "p-b-6",
          checked: false,
          text: "padding bottom 6px"
        },
        {
          class: "p-l-6",
          checked: false,
          text: "padding left 6px"
        },
        {
          class: "p-r-6",
          checked: false,
          text: "padding right 6px"
        },
        {
          class: "p-12",
          checked: false,
          text: "global 12px padding"
        },
        {
          class: "p-x-12",
          checked: false,
          text: "horizontal 12px padding"
        },
        {
          class: "p-y-12",
          checked: false,
          text: "vertical 12px padding"
        },
        {
          class: "p-t-12",
          checked: false,
          text: "padding top 12px"
        },
        {
          class: "p-b-12",
          checked: false,
          text: "padding bottom 12px"
        },
        {
          class: "p-l-12",
          checked: false,
          text: "padding left 12px"
        },
        {
          class: "p-r-12",
          checked: false,
          text: "padding right 12px"
        }
      ],
    }
  },
  methods: {
    getPaddingClass() {
      return this.checkboxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.class);
    },
    getPaddingText() {
      return this.getPaddingClass().join(" ");
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";
  
  @import "@/assets/scss/mixins/_font-size.scss";

  @import "./_Padding.scss";
</style>