<template>
  <Datepicker
    class="bimdata-datepicker"
    :value="value"
    :name="name"
    :language="lang"
    :first-day-of-week="firstDayOfWeek"
    :calendar-button="calendarButton"
    :calendar-class="calendarClass"
    :clear-button="clearButton"
    :disabled="disabled"
    :disabled-dates="disabledDates"
    :fixed-position="fixedPosition"
    :format="format"
    :id="id"
    :input-class="inputClass"
    :placeholder="placeholder"
    :required="required"
    :ref-name="refName"
    :show-edge-dates="showEdgeDates"
    :show-header="showHeader"
    :show-calender-on-focus="showCalendarOnFocus"
    :show-calendar-on-button-click="showCalendarOnButtonClick"
    :tabindex="tabIndex"
    :typeable="typeable"
    :use-utc="useUtc"
    :wrapper-class="wrapperClass"
    :year-picker-range="yearPickerRange"
    :style="style"
    v-model="selectedDate"
    v-on="$listeners"
  />
</template>
<script>
import lang from "./i18n/index.js";
import Datepicker from "@sum.cumo/vue-datepicker";
// import "@sum.cumo/vue-datepicker/dist/Datepicker.css";

export default {
  components: {
    Datepicker,
  },
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  props: {
    calendarButton: {
      type: Boolean,
      default: false,
    },
    calendarClass: {
      type: [String, Object],
    },
    clearButton: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    disabledDates: {
      type: Object,
      default: () => {},
    },
    firstDayOfWeek: {
      type: String,
      default: "sun",
    },
    fixedPosition: {
      type: String,
    },
    format: {
      type: [String, Function],
      default: "dd MMM yyyy",
    },

    id: {
      type: String,
    },
    inputClass: {
      type: [String, Object, Array],
    },
    language: {
      type: String,
      default: () => "en",
      validator(value) {
        return Object.keys(lang).includes(value);
      },
    },
    name: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "Select a date",
    },
    required: {
      type: Boolean,
      default: false,
    },
    refName: {
      type: String,
    },
    showEdgeDates: {
      type: Boolean,
      default: true,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    showCalendarOnFocus: {
      type: Boolean,
      default: false,
    },
    showCalendarOnButtonClick: {
      type: Boolean,
      default: false,
    },
    tabIndex: {
      type: [String, Number],
    },
    typeable: {
      type: Boolean,
      default: false,
    },
    useUtc: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Date, String],
      validator: val =>
        val === null ||
        val instanceof Date ||
        typeof val === "string" ||
        typeof val === "number",
    },
    wrapperClass: {
      type: [String, Object],
    },
    yearPickerRange: {
      type: Number,
      default: 12,
    },
    width: {
      type: String,
      default: "280px",
    },
    modelValue: {
      type: [Date, String],
    },
  },
  emits: ["update:modelValue"],
  computed: {
    lang() {
      return lang[this.language];
    },
    style() {
      return {
        width: `${this.width}`,
      };
    },
    selectedDate: {
      get() {
        return this.modelValue;
      },
      set(date) {
        this.$emit("update:modelValue", date);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_BIMDataVariables.scss";
</style>

<style lang="scss">
@import "./_BIMDataDatePicker.scss";
</style>
