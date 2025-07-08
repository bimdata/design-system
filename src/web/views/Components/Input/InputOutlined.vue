<template>
  <div>
    <h2>Outlined Input</h2>
    <ComponentCode :componentTitle="$route.name" language="javascript">
      <template #module>
        <BIMDataInputOutlined
          v-model="textInput"
          placeholder="Your placeholder here"
          :error="error"
          :success="success"
          :loading="loading"
          :disabled="disabled"
          :error-message="
            error && errorMessage ? 'your error message here' : undefined
          "
          :success-message="
            success && successMessage ? 'your success message here' : undefined
          "
          :margin="marginInput"
          :type="inputTypeSelection"
          :counter="counter"
          :label="label"
        >
          <template #prefixInner v-if="prefixInner">
            <BIMDataIconShow class="fill-granite-light" margin="0 6px 0 0" />
          </template>
          <template #prefix v-if="prefix">
            <BIMDataIconShow class="fill-granite-light" margin="0 6px 0 0" />
          </template>
          <template #suffixInner v-if="suffixInner">
            <BIMDataIconShow v-if="error" class="fill-high" />
            <BIMDataIconShow v-else class="fill-granite-light" />
          </template>
          <template #suffix v-if="suffix">
            <BIMDataIconShow class="fill-granite-light" margin="0 0 0 6px" />
          </template>
        </BIMDataInputOutlined>
      </template>

      <template #parameters>
        <BIMDataCheckbox text="Add a label" v-model="label" />
        <BIMDataCheckbox text="Add counter" v-model="counter" />
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
        <BIMDataCheckbox text="loading" v-model="loading" />
        <BIMDataCheckbox text="disabled" v-model="disabled" />

        <div class="m-t-24">
          <BIMDataSelect
            width="200px"
            label="Input Type"
            :options="inputTypeOptions"
            v-model="inputTypeSelection"
          >
          </BIMDataSelect>
        </div>

        <div>
          <BIMDataText
            component="h5"
            color="color-primary"
            margin="15px 0 10px"
          >
            Slots
          </BIMDataText>
          <BIMDataCheckbox text="prefix" v-model="prefix" />
          <BIMDataCheckbox text="prefixInner" v-model="prefixInner" />
          <BIMDataCheckbox text="suffixInner" v-model="suffixInner" />
          <BIMDataCheckbox text="suffix" v-model="suffix" />
        </div>

        <div>
          <BIMDataText component="h5" color="color-primary" margin="16px 0 0">
            Margin
          </BIMDataText>
          <BIMDataInput
            v-model="marginInput"
            backgroundColor="white"
            placeholder="Change margin"
          />
        </div>
      </template>

      <template #import>
        {{ getImportContent() }}
      </template>

      <template #code>
        <pre>
&lt;BIMDataInputOutlined
  v-model="textInput"
  {{ getInputAttributes() }}
&gt;
{{ getInputSlots() }}
&lt;/BIMDataInputOutlined&gt;
  </pre
        >
      </template>
    </ComponentCode>
    <div class="m-t-12">
      <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
        Props:
      </BIMDataText>
      <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
        nota bene:
      </BIMDataText>
      <BIMDataText component="span" color="color-primary" margin="15px 5px">
        This component use the $attrs attribute provided by Vue. Therefore all
        native attribute of this tag are workable.
        <a
          href="https://vuejs.org/v2/guide/components-props.html#Disabling-Attribute-Inheritance"
          target="_blank"
        >
          More info about $attrs
        </a>
      </BIMDataText>
    </div>
    <div class="m-t-12">
      <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
        Events:
      </BIMDataText>
      <BIMDataTable :columns="eventsData[0]" :rows="eventsData.slice(1)" />
    </div>
    <div class="m-t-12">
      <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
        Slots:
      </BIMDataText>
      <BIMDataTable :columns="slotsData[0]" :rows="slotsData.slice(1)" />
    </div>
  </div>
</template>

<script>
import eventsData from "./events-data.js";
import propsData from "./props-outlined-input.js";
import slotsData from "./slots-outlined-input.js";
// Components
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
  },
  data() {
    return {
      textInput: "",
      error: false,
      success: false,
      errorMessage: false,
      successMessage: false,
      loading: false,
      label: false,
      disabled: false,
      counter: true,
      inputIcon: false,
      prefix: false,
      prefixInner: false,
      suffix: false,
      suffixInner: false,
      marginInput: "12px 0px",
      propsData,
      eventsData,
      slotsData,
      inputTypeOptions: [
        "text",
        "password",
        "number",
        "file",
        "url",
        "time",
        "email",
        "tel",
      ],
      inputTypeSelection: "text",
    };
  },
  methods: {
    getImportContent() {
      return `
    import BIMDataInputOutlined from "@bimdata/design-system/src/BIMDataComponents/BIMDataInput/BIMDataInputOutlined.vue";
    ${
      this.prefix || this.prefixInner || this.suffix || this.suffixInner
        ? 'import BIMDataIconShow from "@bimdata/design-system/src/BIMDataComponents/BIMDataIcon/BIMDataIconStandalone/BIMDataIconShow.vue";'
        : ""
    }`;
    },
    getInputAttributes() {
      const attrs = [];

      attrs.push(`placeholder="Your placeholder here"`);
      if (this.label) attrs.push(`:label="true"`); // Ou `label="Your label here"` si texte statique
      if (this.counter) attrs.push(`:counter="true"`);
      if (this.inputTypeSelection && this.inputTypeSelection !== "text") {
        attrs.push(`type="${this.inputTypeSelection}"`);
      }
      if (this.loading) attrs.push(`:loading="true"`);
      if (this.disabled) attrs.push(`:disabled="true"`);
      if (this.marginInput !== "12px 0px") {
        attrs.push(`margin="${this.marginInput}"`);
      }
      if (this.error) attrs.push(`:error="true"`);
      if (this.errorMessage)
        attrs.push(`errorMessage="your error message here"`);
      if (this.success) attrs.push(`:success="true"`);
      if (this.successMessage)
        attrs.push(`successMessage="your success message here"`);

      return attrs.join("\n  ");
    },
    getInputSlots() {
      const slots = [];

      if (this.prefix) {
        slots.push(`
  <template #prefix>
    <BIMDataIconShow class="fill-granite-light" margin="0 6px 0 0" />
  </template>`);
      }

      if (this.prefixInner) {
        slots.push(`
  <template #prefixInner>
    <BIMDataIconShow class="fill-granite-light" margin="0 6px 0 0" />
  </template>`);
      }

      if (this.suffixInner) {
        slots.push(`
  <template #suffixInner>
    <BIMDataIconShow ${this.error ? 'class="fill-high"' : 'class="fill-granite-light"'} />
  </template>`);
      }

      if (this.suffix) {
        slots.push(`
  <template #suffix>
    <BIMDataIconShow class="fill-granite-light" margin="0 0 0 6px" />
  </template>`);
      }

      return slots.join("\n");
    },
  },
};
</script>
