<template>
  <main class="article article-select">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <div class="m-t-24">
            <BIMDataSelect
              :disabled="isDisabled"
              :multi="isMulti"
              :search="search"
              width="200px"
              label="Selector label"
              :options="options"
              :optionKey="optionKey"
              :optionLabelKey="optionLabelKey"
              :nullValue="hasNullValue"
              v-model="selection"
            >
              <template #empty v-if="isEmpty">
                <span class="p-x-6 color-granite">No result</span>
              </template>
            </BIMDataSelect>
          </div>
          <BIMDataText margin="18px 0">
            Selection:
            <template v-if="isMulti">
              [
              <ul style="list-style: none">
                <li v-for="(s, index) of selection" :key="index">
                  {{ JSON.stringify(s) }}
                </li>
              </ul>
              ]
            </template>
            <template v-else>
              {{ selection }}
            </template>
          </BIMDataText>
        </template>

        <template #parameters>
          <h5 class="m-t-6 m-b-12">Props options :</h5>
          <div>
            <BIMDataCheckbox text="Disabled" v-model="isDisabled" />
          </div>
          <div class="m-t-12">
            <BIMDataCheckbox
              text="Multi selection"
              :disabled="hasNullValue"
              :modelValue="isMulti"
              @update:modelValue="toggleMulti"
            />
          </div>
          <div class="m-t-12">
            <BIMDataCheckbox
              text="None option"
              :disabled="isMulti"
              v-model="hasNullValue"
            />
          </div>
          <div class="m-t-12">
            <BIMDataCheckbox
              text="Search"
              :modelValue="search"
              @update:modelValue="toggleSearch"
            />
          </div>
          <div class="m-t-24">
            <BIMDataSelect
              label="Option set"
              :options="['string', 'object', 'group']"
              :modelValue="optionSet"
              @update:modelValue="changeOptionSet"
            />
          </div>
          <h5 class="m-t-12 m-b-6">Slots options :</h5>
          <BIMDataCheckbox
            text="Empty slot"
            :modelValue="isEmpty"
            @update:modelValue="toggleEmpty"
          />
        </template>

        <template #import>
          import BIMDataSelect from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataSelect.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataSelect
              {{ isDisabled ? "disabled" : "" }}
              {{ isMulti ? ':multi="true"' : "" }}
              {{ search ? ':search="true"' : "" }}
              width="200px"
              label="Selector label"
              :options="options"
              {{ optionKey ? `optionKey="${optionKey}"` : "" }}
              {{ optionLabelKey ? `optionLabelKey="${optionLabelKey}"` : "" }}
              {{ hasNullValue ? ':nullValue="true"' : "" }}
              v-model="selection"
            &gt;
            {{ getEmptySlot() }}
              
            &lt;/BIMDataSelect&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-24">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Events:</BIMDataText
        >
        <BIMDataTable :columns="eventsData[0]" :rows="eventsData.slice(1)" />
      </div>

      <div class="m-t-24">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Slots:</BIMDataText
        >
        <BIMDataTable :columns="slotsData[0]" :rows="slotsData.slice(1)" />
      </div>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Note about 'v-model' and 'optionKey' prop:
        </BIMDataText>
        <p>
          When you use <strong>v-model</strong> in combination with
          <strong>optionKey</strong> to bind a variable to the selector value,
          the bounded variable will contain the value of the selection, that is
          the selected option (or list of options).
        </p>
        <p>
          Put another way, the <strong>optionKey</strong> prop allows you to
          control which option field is used to determine the selected options
          but it does not affect the selector model value.
        </p>
      </div>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          How to add option group to BIMDataSelect:
        </BIMDataText>
        <p>
          To add an option group to BIMDataSelect add an option entry with
          property <strong><em>optionGroup: true</em></strong> . Remember to
          provide an <strong>optionKey</strong> or
          <strong>optionLabelKey</strong> to display your options properly.
        </p>
        <p>Example :</p>
        <Code language="javascript">
          { label: "Title 2", optionGroup: true }
        </Code>
      </div>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          How to mark an option as 'disabled':
        </BIMDataText>
        <p>
          To disabled an option, add
          <strong><em>disabled: true property</em></strong> to the option
          object. Remember to provide an <strong>optionKey</strong> or
          <strong>optionLabelKey</strong> to display your options properly.
        </p>
        <p>Example:</p>
        <Code language="javascript">
          { label: "Option 2", disabled: true }
        </Code>
      </div>
    </div>
  </main>
</template>

<script>
import { stringOptions, objectOptions, groupOptions } from "./option-sets";
import eventsData from "./events-data.js";
import propsData from "./props-data";
import slotsData from "./slots-data";

// Components
import BIMDataCheckbox from "../../../../BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataSelect from "../../../../BIMDataComponents/BIMDataSelect/BIMDataSelect.vue";
import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
import Code from "../../Elements/Code/Code.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataCheckbox,
    BIMDataSelect,
    BIMDataTable,
    BIMDataText,
    Code,
    ComponentCode,
  },
  data() {
    return {
      isDisabled: false,
      isMulti: false,
      isEmpty: false,
      hasNullValue: false,
      optionSet: "string",
      options: stringOptions,
      optionKey: null,
      optionLabelKey: null,
      selection: null,
      propsData,
      eventsData,
      slotsData,
      search: false,
      searchText: "",
    };
  },
  methods: {
    toggleMulti(value) {
      if (value) {
        this.selection = [];
      } else {
        this.selection = null;
      }
      this.isMulti = value;
    },
    toggleSearch(value) {
      this.search = value;
    },
    toggleEmpty(value) {
      this.isEmpty = value;
    },
    getEmptySlot() {
      if (this.isEmpty) {
        return "<template #empty>No result</template>";
      }
    },
    changeOptionSet(value) {
      switch (value) {
        case "string":
          this.optionKey = null;
          this.optionLabelKey = null;
          this.options = stringOptions;
          break;
        case "object":
          this.optionKey = "id";
          this.optionLabelKey = "name";
          this.options = objectOptions;
          break;
        case "group":
          this.optionKey = "label";
          this.optionLabelKey = null;
          this.options = groupOptions;
          break;
      }
      this.selection = this.isMulti ? [] : null;
      this.optionSet = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.bimdata-select {
  span {
    font-size: 12px;
  }
}
</style>
