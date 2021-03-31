<template>
  <main class="article article-input">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>

      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataInput
            v-model="textInput"
            placeholder="Your placeholder here"
            :error="error"
            :success="success"
            :errorMessage="getErrorMessage()"
            :successMessage="getSuccessMessage()"
            :loading="getLoading()"
            :disabled="getDisabled()"
          >
            <template #inputIcon v-if="inputIcon">
              <BIMDataIcon name="show" class="fill-tertiary-dark" />
            </template>
          </BIMDataInput>
        </template>

        <template #parameters>
          <BIMDataCheckbox
            text="error"
            v-model="error"
            :disabled="success || successMessage"
          />
          <BIMDataCheckbox
            text="success"
            v-model="success"
            :disabled="error || errorMessage"
          />
          <BIMDataCheckbox
            text="error message"
            v-model="errorMessage"
            :disabled="success || successMessage"
          />
          <BIMDataCheckbox
            text="success message"
            v-model="successMessage"
            :disabled="error || errorMessage"
          />
          <BIMDataCheckbox text="icon" v-model="inputIcon" />
          <BIMDataCheckbox text="loading" v-model="loading" />
          <BIMDataCheckbox text="disabled" v-model="disabled" />
        </template>

        <template #import>
          import BIMDataInput from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataInput.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataInput
              v-model="textInput"
              placeholder="Your placeholder here"
              :error="!textInput"
              errorMessage="your error message here"
              :loading="{{ getLoading() }}"&gt;

              &lt;template #inputIcon v-if="inputIcon"&gt;
                {{ getInputIcon() }}
              &lt;/template&gt;

            &lt;/BIMDataInput&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Props:</h5>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
      <div class="m-t-12">
        <h5 class="bimdata-h5">Slots:</h5>
        <BIMDataTable :columns="slotsData[0]" :rows="slotsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";

import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataIcon from "../../../../../src/BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";

export default {
  components: {
    ComponentCode,
    BIMDataTable,
    BIMDataCheckbox,
    BIMDataInput,
    BIMDataIcon,
  },
  data() {
    return {
      textInput: "",
      error: false,
      success: false,
      errorMessage: false,
      successMessage: false,
      loading: false,
      disabled: false,
      inputIcon: false,

      // Props documentation
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        [
          "placeholder",
          "String",
          "' '",
          "Use this props to add a placeholder to your input.",
        ],
        [
          "error",
          "Boolean",
          "false",
          "Use this boolean to check if your input is bad.",
        ],
        [
          "success",
          "Boolean",
          "false",
          "Use this boolean to check if your input is good.",
        ],
        [
          "errorMessage",
          "String",
          "' '",
          "Use this props to add an error message to your input.",
        ],
        [
          "successMessage",
          "String",
          "' '",
          "Use this props to add a success message to your input.",
        ],
        ["loading", "Boolean", "false", ""],
        [
          "disabled",
          "Boolean",
          "false",
          "Use this boolean to disabled your input.",
        ],
      ],

      // Slots documentation
      slotsData: [
        ["Slot name", "Description"],
        ["inputIcon", "Use this slot to add an icon as input suffix."],
      ],
    };
  },
  methods: {
    getErrorMessage() {
      if (this.error && this.errorMessage) {
        return "your error message here";
      }
    },
    getSuccessMessage() {
      if (this.success && this.successMessage) {
        return "your success message here";
      }
    },
    getLoading() {
      if (this.loading) {
        return true;
      } else {
        return false;
      }
    },
    getDisabled() {
      if (this.disabled) {
        return true;
      } else {
        return false;
      }
    },
    getInputIcon() {
      if (this.inputIcon) {
        return '<BIMDataIcon name="show" class="fill-tertiary-dark"/>';
      }
    },
  },
};
</script>
