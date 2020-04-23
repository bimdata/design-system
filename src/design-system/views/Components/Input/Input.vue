<template>
  <main class="article article-input">
    <div class="article-wrapper">
      <h2>{{ $route.name }}</h2>

       <Code :componentTitle='$route.name'>
        <template #module >
          <BIMDataInput
            v-model="textInput"
            placeholder="Your placeholder here"
            :error="getError"
            :success="getSuccess"
            :errorMessage="getErrorMessage()"
            :successMessage="getSuccessMessage()"
            :loading="getLoading()"
            :disabled="getDisabled()">
            <template #inputIcon v-if="inputIcon">
              <BIMDataIcon icon-name="search" width="18" height="18" x="23" y="23" class="bimdata-fill-default">
                <BIMDataShowIcon />
              </BIMDataIcon>
            </template>
          </BIMDataInput>
        </template>

        <template #parameters>
          <BIMDataCheckbox
            text="error"
            v-model="error"
            :disabled="checkboxErrorDisabled"
          />
          <BIMDataCheckbox
            text="success"
            v-model="success"
            :disabled="checkboxSuccessDisabled"
          />
          <BIMDataCheckbox
            text="error message"
            v-model="errorMessage"
            :disabled="checkboxErrorMessageDisabled"
          />
          <BIMDataCheckbox
            text="success message"
            v-model="successMessage"
            :disabled="checkboxSuccessMessageDisabled"
          />
          <BIMDataCheckbox
            text="icon"
            v-model="inputIcon"
          />
          <BIMDataCheckbox
            text="loading"
            v-model="loading"
          />
          <BIMDataCheckbox
            text="disabled"
            v-model="disabled"
          />
        </template>

        <template #code>
          <pre>
            &lt;BIMDataInput
            v-model="textInput"
            placeholder="Your placeholder here"
            :error="!textInput"
            errorMessage="your error message here"
            :loading="{{getLoading()}}"&gt;
              &lt;template #inputIcon v-if="inputIcon"&gt;
                {{ getInputIcon() }}
              &lt;/template&gt;
            &lt;/BIMDataInput&gt;
          </pre>
        </template>
      </Code>

      <div class="m-t-12">
        <h5>Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>
    </div>
  </main>
</template>

<script>
import Code from "../../Elements/Code/Code.vue";
import BIMDataTable from "@/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataCheckbox from "@/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";

import BIMDataInput from "@/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataIcon.vue";
import BIMDataShowIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataShowIcon";

export default {
  components: {
    Code,
    BIMDataTable,
    BIMDataCheckbox,
    BIMDataInput,
    BIMDataIcon,
    BIMDataShowIcon
  },
  data() {
    return {
      textInput: "",
      error: false,
      success: false,
      errorMessage: false,
      successMessage: false,
      loading: false,
      disabled:false,
      inputIcon: false,
      checkboxErrorDisabled: false,
      checkboxSuccessDisabled: false,
      checkboxErrorMessageDisabled: true,
      checkboxSuccessMessageDisabled: true,
      propsData: [
        [
          "Props", "Type", "Default value", "Description"
        ],
        [
          "placeholder", "String", "' '", "Use this props to add a placeholder to your input."
        ],
        [
          "error", "Boolean", "false", "Use this boolean to check if your input is bad."
        ],
        [
          "success", "Boolean", "false", "Use this boolean to check if your input is good."
        ],
        [
          "errorMessage", "String", "' '", "Use this props to add an error message to your input."
        ],
        [
          "successMessage", "String", "' '", "Use this props to add a success message to your input."
        ],
        [
          "loading", "Boolean", "false", ""
        ],
        [
          "disabled", "Boolean", "false", "Use this boolean to disabled your input."
        ]
      ]
    }
  },
  methods: {
    getErrorMessage(){
      if(this.error && this.errorMessage){
        return "your error message here";
      }
    },
    getSuccessMessage(){
      if(this.success && this.successMessage){
        return "your success message here";
      }
    },
    getLoading(){
      if(this.loading){
        return true;
      }else{
        return false;
      }
    },
    getDisabled(){
      if(this.disabled){
        return true;
      }else{
        return false;
      }
    },
    getInputIcon(){
      if(this.inputIcon){
        return `<BIMDataIcon icon-name="search" width="18" height="18" x="23" y="23" class="bimdata-fill-default"><BIMDataShowIcon /></BIMDataIcon>`
      }
    },
  },
  computed: {
    getError(){
      if(this.error){
        this.checkboxSuccessDisabled = true;
        this.checkboxSuccessMessageDisabled = true;
        this.checkboxErrorMessageDisabled = false;
        this.successMessage = false;
        return !this.textInput;
      } else {
        this.checkboxSuccessDisabled = false;
        this.checkboxErrorMessageDisabled = true;
        this.errorMessage = false;
      }
    },
    getSuccess(){
      if(this.success){
        this.checkboxErrorDisabled = true;
        this.checkboxErrorMessageDisabled = true;
        this.checkboxSuccessMessageDisabled = false;
        this.errorMessage = false;
        return !this.textInput;
      } else {
        this.checkboxErrorDisabled = false;
        this.checkboxSuccessMessageDisabled = true;
        this.successMessage = false;
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_Input.scss";
</style>