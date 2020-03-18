<template>
  <main class="article article-textarea">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>

      <Code :componentTitle='$route.name'>
        <template #module>
          <BIMDataTextarea
            label="textarea label"
            name="example"
            v-model="textarea"
            :autofocus="getAutofocus()"
            :placeholder="getPlaceholder()"
            :disabled="getDisabled()"
          />
        </template>

        <template #parameters>
          <BIMDataCheckbox
            text="autofocus"
            v-model="autofocus"
          />
          <BIMDataCheckbox
            text="placeholder"
            v-model="placeholder"
          />
          <BIMDataCheckbox
            text="disabled"
            v-model="disabled"
          />
        </template>

        <template #code>
          <pre>
            &lt;BIMDataTextarea
              label="textarea label"
              name="example"
              v-model="textarea"
              :autofocus="{{getAutofocus()}}"
              :placeholder="{{getPlaceholder()}}"
              :disabled="{{getDisabled()}}"
            /&gt;
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
import Code from "../../Components/Code.vue";
import BIMDataTable from "@/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataCheckbox from "@/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";

import BIMDataTextarea from "@/BIMDataComponents/BIMDataTextarea/BIMDataTextarea.vue"

export default {
  components: {
    Code,
    BIMDataTable,
    BIMDataCheckbox,
    BIMDataTextarea
  },
  data() {
    return {
      textarea: null,
      autofocus: false,
      placeholder: false,
      disabled: false,
      propsData: [
        [
          "Props", "Type", "Default value", "Description"
        ],
        [
          "name", "[String, Number]", "null", "Use this props to give a name to your textarea. Be careful, this props also serves for the id of the textarea, as well as for the for of the label."
        ],
        [
          "autofocus", "Boolean", "false", "Use this boolean to add an autofocus on your textarea."
        ],
        [
          "placeholder", "String", "null", "Use this props to add a placeholder to your textarea."
        ],
        [
          "label", "String", "' '", "Use this props to add a label to your textarea."
        ],
        [
          "width", "[Number, String]", "150px", "Use this props to change the width of the textarea component."
        ],
        [
          "height", "[Number, String]", "32px", "Use this props to change the height of the textarea component."
        ],
        [
          "disabled", "Boolean", "false", "Use this boolean to disabled your textarea."
        ]
      ]
    }
  },
  methods: {
    getAutofocus(){
      if(this.autofocus){
        return true;
      } else {
        return false;
      }
    },
    getPlaceholder(){
      if(this.placeholder){
        this.placeholder = true;
        return "placeholder here";
      }
    },
    getDisabled(){
      if(this.disabled){
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";
</style>