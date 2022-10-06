<template>
  <main class="article [your-custom-class]">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>

      <div>
        <ComponentCode :componentTitle="$route.name" language="javascript">
          <template #module>
            <BIMDataDatePicker
              v-model="selectedDate"
              @to-date-change="toDate = $event"
              :toDate="toDate"
              :language="languageSelection"
              :firstDayOfWeek="daySelection"
              :clearButton="isClearButton"
              :fixedPosition="fixedPositionSelection"
              :width="width"
              :showEdgeDates="isShowEdgeDates"
              :format="formatSelection"
              :yearPickerRange="Number(yearPickerRange)"
              :fullMonthName="true"
              placeholder="Label here"
              :isDateRange="isMultipleRange"
            >
            </BIMDataDatePicker>
            <span class="m-t-18">{{ selectedDate }}</span>
            <span class="m-t-18" v-if="isMultipleRange">{{ toDate }}</span>
          </template>

          <template #parameters>
            <BIMDataSelect
              width="200px"
              label="Datepicker language"
              :options="languageOptions"
              v-model="languageSelection"
            />
            <BIMDataSelect
              class="m-y-30"
              width="200px"
              label="First day of week"
              :options="dayOptions"
              v-model="daySelection"
            />
            <BIMDataSelect
              class="m-y-30"
              width="200px"
              label="Fixed position"
              :options="fixedPositionOptions"
              v-model="fixedPositionSelection"
            />
            <BIMDataSelect
              class="m-y-30"
              width="200px"
              label="Date format"
              :options="formatOptions"
              v-model="formatSelection"
            />
            <BIMDataInput
              v-model="width"
              placeholder="Datepicker width in px"
            />
            <div class="m-y-30">
              <BIMDataInput
                v-model="yearPickerRange"
                placeholder="Year picker range"
              />
            </div>
            <BIMDataCheckbox text="Clear button" v-model="isClearButton" />
            <BIMDataCheckbox text="Show Edge Dates" v-model="isShowEdgeDates" />
            <BIMDataCheckbox
              text="Selected range dates"
              v-model="isMultipleRange"
            />
          </template>
          <template #code>
            <pre>
              &lt;BIMDataDatePicker
                v-model="selectedDate"
                :language="{{ languageSelection }}"
                :firstDayOfWeek="{{ daySelection }}"
                :clearButton="{{ isClearButton }}"
                :fixedPosition="{{ fixedPositionSelection }}"
                :width="{{ width }}"
                :showEdgeDates="{{ isShowEdgeDates }}"
                :format="{{ formatSelection }}"
                :yearPickerRange="{{ yearPickerRange }}"
              &gt;
                &lt;template #beforeDateInput&gt;
                  &lt;BIMDataIcon name="close" fill color="default" /&gt;
                &lt;/template&gt;
              &lt;/BIMDataDatePicker&gt;
            </pre>
          </template>
        </ComponentCode>

        <div class="m-t-12">
          <BIMDataText
            component="h5"
            margin="15px 0 10px"
            color="color-primary"
          >
            Props:
          </BIMDataText>
          <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
        </div>

        <div class="m-t-12">
          <BIMDataText
            component="h5"
            margin="15px 0 10px"
            color="color-primary"
          >
            Events:
          </BIMDataText>
          <BIMDataTable :columns="eventsData[0]" :rows="eventsData.slice(1)" />
        </div>

        <div class="m-t-12">
          <BIMDataText
            component="h5"
            margin="15px 0 10px"
            color="color-primary"
          >
            Slots:
          </BIMDataText>
          <BIMDataTable :columns="slotsData[0]" :rows="slotsData.slice(1)" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";
import eventsData from "./events-data.js";
import slotsData from "./slots-data.js";

import {
  languageOptions,
  dayOptions,
  fixedPositionOptions,
  formatOptions,
} from "./option-sets";

import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataDatePicker from "../../../../../src/BIMDataComponents/BIMDataDatePicker/BIMDataDatePicker.vue";
import BIMDataSelect from "../../../../../src/BIMDataComponents/BIMDataSelect/BIMDataSelect.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataDatePicker,
    BIMDataText,
    BIMDataSelect,
    BIMDataCheckbox,
    BIMDataInput,
    BIMDataTable,
    ComponentCode,
  },
  data() {
    const toDate = new Date();
    toDate.setDate(toDate.getDate() + 2);

    return {
      date: new Date(),
      selectedDate: new Date(),
      toDate: toDate,
      isClearButton: true,
      isShowEdgeDates: true,
      isMultipleRange: true,
      languageOptions: languageOptions,
      languageSelection: "en",
      dayOptions: dayOptions,
      daySelection: "sun",
      fixedPositionOptions: fixedPositionOptions,
      fixedPositionSelection: "bottom",
      formatOptions: formatOptions,
      formatSelection: "dd MMM yyyy",
      width: "280px",
      yearPickerRange: "12",
      // Data
      propsData,
      eventsData,
      slotsData,
    };
  },
};
</script>

<style lang="scss" scoped>
.bimdata-ds__demo__module {
  span {
    font-size: 12px;
  }
}
</style>
