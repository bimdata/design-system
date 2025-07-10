<template>
  <main class="article article-input">
    <div class="article-wrapper">
      <BIMDataText component="h1" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">
        {{ $route.name }}
      </BIMDataText>
      <h2>Basic input</h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataInput
            v-model="textInput"
            :placeholder="placeholderInput"
            :label="labelInput"
            :error="error"
            :success="success"
            :error-message="
              error && errorMessage ? 'your error message here' : undefined
            "
            :success-message="
              success && successMessage
                ? 'your success message here'
                : undefined
            "
            :loading="loading"
            :disabled="disabled"
            :margin="marginInput"
            :backgroundColor="backgroundColorInput"
            :borderRadius="borderRadiusInput"
            :isLabel="isLabel"
            :height="heightInput"
          >
            <template #leftInputIcon v-if="leftInputIcon">
              <BIMDataIconShow class="fill-granite-light" margin="6px" />
            </template>
            <template #inputIcon v-if="inputIcon">
              <BIMDataIconShow class="fill-granite-light" margin="6px" />
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
          <BIMDataCheckbox text="left icon" v-model="leftInputIcon" />
          <BIMDataCheckbox text="right icon" v-model="inputIcon" />
          <BIMDataCheckbox text="loading" v-model="loading" />
          <BIMDataCheckbox text="disabled" v-model="disabled" />
          <BIMDataCheckbox text="label" v-model="isLabel" />

          <div>
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
            >
              Modifiers
            </BIMDataText>
            <BIMDataInput
              v-model="labelInput"
              label="Change label"
              backgroundColor="white"
            />
            <BIMDataInput
              v-model="placeholderInput"
              label="Change placeholder"
              backgroundColor="white"
            />
            <BIMDataInput
              v-model="marginInput"
              label="Change margin"
              backgroundColor="white"
            />
            <BIMDataInput
              v-model="backgroundColorInput"
              label="Change background-color"
              backgroundColor="white"
            />
            <BIMDataInput
              v-model="heightInput"
              label="Change height"
              backgroundColor="white"
              height="40px"
            />
            <BIMDataInput
              v-model="borderRadiusInput"
              label="Change border-radius"
              backgroundColor="white"
              height="40px"
            />
          </div>
        </template>

        <template #import>
          {{ getImportContent() }}
        </template>

        <template #code>
          <pre>
&lt;BIMDataInput
  v-model="textInput"
  {{ getInputAttributes() }}
&gt;
{{ getSlotTemplates() }}
&lt;/BIMDataInput&gt;
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

      <InputOutlined />
    </div>
  </main>
</template>

<script>
import eventsData from "./events-data.js";
import propsData from "./props-data.js";
import slotsData from "./slots-data.js";
// Components
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import InputOutlined from "./InputOutlined.vue";

export default {
  components: {
    ComponentCode,
    InputOutlined,
  },
  data() {
    return {
      // State
      textInput: "",
      error: false,
      success: false,
      errorMessage: false,
      successMessage: false,
      loading: false,
      disabled: false,

      // Display
      inputIcon: false,
      leftInputIcon: false,
      isLabel: true,

      // Styling
      labelInput: "Your label here",
      placeholderInput: "Your placeholder here",
      marginInput: "12px 0px",
      backgroundColorInput: "var(--color-silver-light)",
      heightInput: "32px",
      borderRadiusInput: "8px",

      // Documentation
      propsData,
      eventsData,
      slotsData,
    };
  },
  inject: ["theme"],
  computed: {
    currentTheme() {
      return this.theme.value;
    },
  },
  methods: {
    getImportContent() {
      return `
        import BIMDataInput from "@bimdata/design-system/src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
        ${
          this.inputIcon
            ? 'import BIMDataIconShow from "@bimdata/design-system/src/BIMDataComponents/BIMDataIcon/BIMDataIconStandalone/BIMDataIconShow.vue";'
            : ""
        }`;
    },
    getInputAttributes() {
      const attrs = [];

      if (this.labelInput) attrs.push(`label="${this.labelInput}"`);
      if (this.placeholderInput)
        attrs.push(`placeholder="${this.placeholderInput}"`);
      if (this.backgroundColorInput)
        attrs.push(`backgroundColor="${this.backgroundColorInput}"`);
      if (this.borderRadiusInput)
        attrs.push(`borderRadius="${this.borderRadiusInput}"`);
      if (this.isLabel !== true) attrs.push(`:isLabel="${this.isLabel}"`);
      if (this.loading) attrs.push(`:loading="true"`);
      if (this.disabled) attrs.push(`:disabled="true"`);
      if (this.marginInput !== "12px 0px")
        attrs.push(`margin="${this.marginInput}"`);

      // Error/success
      if (this.error) attrs.push(`:error="true"`);
      if (this.errorMessage)
        attrs.push(`errorMessage="your error message here"`);
      if (this.success) attrs.push(`:success="true"`);
      if (this.successMessage)
        attrs.push(`successMessage="your success message here"`);

      return attrs.join("\n  ");
    },
    getSlotTemplates() {
      const slots = [];

      if (this.leftInputIcon) {
        slots.push(`
  <template #leftInputIcon>
    <BIMDataIconShow class="fill-granite-light" margin="6px" />
  </template>`);
      }

      if (this.inputIcon) {
        slots.push(`
  <template #inputIcon>
    <BIMDataIconShow class="fill-granite-light" margin="6px" />
  </template>`);
      }

      return slots.join("\n");
    },
  },
};
</script>
