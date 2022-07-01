<template>
  <main class="article article-checkbox">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode
        :componentTitle="$route.name"
        language="javascript"
        codepenLink="https://codepen.io/bimdata/pen/dyMyvYW"
        githubLink="https://github.com/bimdata/design-system/blob/develop/src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue"
      >
        <template #module>
          <BIMDataCheckbox
            :disabled="isDisabled"
            :text="text"
            v-model="checked"
          />
        </template>

        <template #parameters>
          <BIMDataCheckbox text="text" v-model="hasText" />
          <BIMDataCheckbox text="disabled" v-model="isDisabled" />
          <BIMDataCheckbox
            text="indeterminate"
            :modelValue="checked === null"
            @update:modelValue="
              checked === null ? (checked = false) : (checked = null)
            "
          />
        </template>

        <template #import>
          import BIMDataCheckbox from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataCheckbox.js"
        </template>

        <template #code>
          <pre>
            &lt;BIMDataCheckbox
              :disabled="{{ isDisabled }}"
              {{ hasText ? `:text="${text}"` : "" }} 
              v-model="checked"
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" margin="15px 0 0" color="color-primary">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";
// Components
import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataCheckbox from "../../../../BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
    BIMDataTable,
    BIMDataText,
    BIMDataCheckbox,
  },
  data() {
    return {
      checked: false,
      isDisabled: false,
      hasText: true,
      // Data
      propsData,
    };
  },
  computed: {
    text() {
      return this.hasText ? "Your label here" : undefined;
    },
  },
};
</script>
