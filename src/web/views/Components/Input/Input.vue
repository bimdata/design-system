<template>
  <main class="article article-input">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
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
            :margin="marginInput"
          >
            <template #inputIcon v-if="inputIcon">
              <BIMDataIcon name="show" class="fill-granite-light" />
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

          <div>
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
            >
              Margin
            </BIMDataText>
            <BIMDataInput v-model="marginInput" placeholder="Change margin" />
          </div>
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
              :loading="{{ getLoading() }}"
              {{ getMargin() }}
            &gt;

              &lt;template #inputIcon v-if="inputIcon"&gt;
                {{ getInputIcon() }}
              &lt;/template&gt;

            &lt;/BIMDataInput&gt;
          </pre>
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
  </main>
</template>

<script>
import eventsData from "./events-data.js";
import propsData from "./props-data.js";
import slotsData from "./slots-data.js";
// Components
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataIcon from "../../../../../src/BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    ComponentCode,
    BIMDataTable,
    BIMDataCheckbox,
    BIMDataInput,
    BIMDataIcon,
    BIMDataText,
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
      marginInput: "12px 0px",
      propsData,
      eventsData,
      slotsData,
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
        return '<BIMDataIcon name="show" class="fill-granite-light"/>';
      }
    },
    getMargin() {
      if (this.marginInput != "12px 0px") {
        return `margin="${this.marginInput}"`;
      }
    },
  },
};
</script>
