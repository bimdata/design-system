<template>
  <div
    :id="datepickerId"
    ref="datepicker"
    class="bimdata-datepicker"
    :class="[wrapperClass]"
    @focusin="handleFocusIn($event)"
    @focusout="handleFocusOut($event)"
    @keydown.esc="resetOrClose"
  >
    <DateInputRange
      v-if="isDateRange"
      :id="id"
      ref="dateInput"
      :autofocus="autofocus"
      :calendarButton="calendarButton"
      :calendarButtonIcon="calendarButtonIcon"
      :calendarButtonIconContent="calendarButtonIconContent"
      :clearButton="clearButton"
      :clearButtonIcon="clearButtonIcon"
      :disabled="disabled"
      :format="format"
      :inline="inline"
      :inputClass="inputClass"
      :isOpen="isOpen"
      :maxlength="maxlength"
      :name="name"
      :parser="parser"
      :pattern="pattern"
      :placeholder="placeholder"
      :refName="refName"
      :required="required"
      :selectedDates="[selectedDate, selectedToDate]"
      :showCalendarOnButtonClick="showCalendarOnButtonClick"
      :showCalendarOnFocus="showCalendarOnFocus"
      :tabIndex="tabIndex"
      :translation="lang"
      :useUtc="useUtc"
      @clear="clear"
      @close="close"
      @open="open"
      @set-focus="setFocus($event)"
      @tab="tabThroughNavigation"
      :style="style"
    >
      <template #beforeDateInput>
        <slot name="beforeDateInput" />
      </template>

      <template #afterDateInput>
        <slot name="afterDateInput" />
      </template>

      <template #clearBtn>
        <slot name="clearBtn" />
      </template>

      <template #calendarBtn>
        <slot name="calendarBtn" />
      </template>
    </DateInputRange>
    <DateInput
      v-else
      :id="id"
      ref="dateInput"
      :autofocus="autofocus"
      :calendarButton="calendarButton"
      :calendarButtonIcon="calendarButtonIcon"
      :calendarButtonIconContent="calendarButtonIconContent"
      :clearButton="clearButton"
      :clearButtonIcon="clearButtonIcon"
      :disabled="disabled"
      :format="format"
      :inline="inline"
      :inputClass="inputClass"
      :isOpen="isOpen"
      :maxlength="maxlength"
      :name="name"
      :parser="parser"
      :pattern="pattern"
      :placeholder="placeholder"
      :refName="refName"
      :required="required"
      :selectedDate="selectedDate"
      :showCalendarOnButtonClick="showCalendarOnButtonClick"
      :showCalendarOnFocus="showCalendarOnFocus"
      :tabIndex="tabIndex"
      :translation="lang"
      :typeable="typeable"
      :useUtc="useUtc"
      @clear-date="clear"
      @close="close"
      @open="open"
      @set-focus="setFocus($event)"
      @tab="tabThroughNavigation"
      :style="style"
    >
      <template #beforeDateInput>
        <slot name="beforeDateInput" />
      </template>

      <template #afterDateInput>
        <slot name="afterDateInput" />
      </template>

      <template #clearBtn>
        <slot name="clearBtn" />
      </template>

      <template #calendarBtn>
        <slot name="calendarBtn" />
      </template>
    </DateInput>

    <div v-if="isOpen">
      <Transition name="toggle">
        <div
          v-show="isOpen"
          class="bimdata-datepicker__calendar"
          :class="[pickerClasses, fixedPosition]"
          @mousedown.prevent
          @focusin.stop="handleFocusIn($event)"
          @focusout.stop="handleFocusOut($event)"
          @keydown.esc.stop="resetOrClose"
          @keydown.tab.stop="tabThroughNavigation($event)"
        >
          <Transition name="view">
            <div ref="view" :key="view">
              <div v-if="$slots.beforeCalendarHeader">
                <slot name="beforeCalendarHeader" />
              </div>
              <Component
                :is="picker"
                ref="picker"
                class="picker-view"
                :day-cell-content="dayCellContent"
                :disabledDates="disabledDates"
                :firstDayOfWeek="firstDayOfWeek"
                :typeable="typeable"
                :isUpDisabled="isUpDisabled"
                :isMinimumView="isMinimumView"
                :openDate="openDate"
                :pageDate="pageDate"
                :selectedDate="selectedDate"
                :selectedToDate="selectedToDate"
                :isDateRange="isDateRange"
                :showEdgeDates="showEdgeDates"
                :fullMonthName="fullMonthName"
                :showHeader="showHeader"
                :slideDuration="slideDuration"
                :tabbableCellId="tabbableCellId"
                :transitionName="transitionName"
                :translation="lang"
                :useUtc="useUtc"
                :view="view || computedInitialView"
                :yearPickerRange="yearPickerRange"
                @page-change="handlePageChange"
                @select="handleSelect"
                @set-focus="setFocus($event)"
                @set-skip-review-focus="skipReviewFocus = $event"
                @set-transition-name="setTransitionName($event)"
                @set-view="setView"
              >
                <template v-for="slotKey of calendarSlots" #[slotKey]>
                  <slot :name="slotKey" />
                </template>
                <template #dayCellContent="{ cell }">
                  <slot v-if="cell" name="dayCellContent" :cell="cell" />
                </template>
              </Component>
              <div v-if="$slots.calendarFooter">
                <slot name="calendarFooter" />
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import lang from "./i18n/index.js";
import DateInput from "./components/DateInput.vue";
import DateInputRange from "./components/DateInputRange.vue";
import DisabledDate from "./utils/DisabledDate.js";
import inputProps from "./mixins/inputProps.vue";
import makeDateUtils from "./utils/DateUtils.js";
import navMixin from "./mixins/navMixin.vue";
import PickerDay from "./components/PickerDay.vue";
import PickerMonth from "./components/PickerMonth.vue";
import PickerYear from "./components/PickerYear.vue";

const calendarSlots = [
  "beforeCalendarHeaderDay",
  "calendarFooterDay",
  "beforeCalendarHeaderMonth",
  "calendarFooterMonth",
  "beforeCalendarHeaderYear",
  "calendarFooterYear",
  "nextIntervalBtn",
  "prevIntervalBtn",
];

export default {
  components: {
    DateInput,
    DateInputRange,
    PickerDay,
    PickerMonth,
    PickerYear,
  },
  mixins: [inputProps, navMixin],
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  props: {
    autoCloseRange: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Date,
    },
    toDate: {
      type: Date,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
    calendarClass: {
      type: [String, Object, Array],
      default: "",
    },
    dayCellContent: {
      type: Function,
      default: day => day.date,
    },
    disabledDates: {
      type: Object,
      default() {
        return {};
      },
    },
    firstDayOfWeek: {
      type: String,
      default: "sun",
    },
    fixedPosition: {
      type: String,
      default: "",
      validator: val => {
        const possibleValues = [
          "",
          "bottom",
          "bottom-left",
          "bottom-right",
          "top",
          "top-left",
          "top-right",
        ];
        return possibleValues.includes(val);
      },
    },
    fullMonthName: {
      type: Boolean,
      default: false,
    },
    initialView: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: () => "en",
      validator(value) {
        return Object.keys(lang).includes(value);
      },
    },
    maximumView: {
      type: String,
      default: "year",
    },
    minimumView: {
      type: String,
      default: "day",
    },
    showEdgeDates: {
      type: Boolean,
      default: true,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    value: {
      type: [String, Date, Number],
      default: "",
      validator: val =>
        val === null ||
        val instanceof Date ||
        typeof val === "string" ||
        typeof val === "number",
    },
    wrapperClass: {
      type: [String, Object, Array],
      default: "",
    },
    yearPickerRange: {
      type: Number,
      default: 10,
    },
    width: {
      type: String,
      default: "280px",
    },
    isDateRange: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    "update:modelValue",
    "blur",
    "focus",
    "opened",
    "changed",
    "input",
    "selected",
    "closed",
    "cleared",
    "to-date-change",
  ],
  data() {
    const utils = makeDateUtils(this.useUtc);
    const startDate = utils.getNewDateObject(this.openDate || null);
    const pageTimestamp = utils.setDate(startDate, 1);

    return {
      calendarHeight: 0,
      calendarSlots,
      isClickOutside: false,
      globalDatepickerId: "",
      /*
       * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
       * This represents the first day of the current viewing month
       * {Number}
       */
      pageTimestamp,
      /*
       * Selected Date
       * {Date}
       */
      selectedDate: null,
      selectedToDate: null,
      slideDuration: 250,
      utils,
      view: "",
    };
  },
  computed: {
    lang() {
      return lang[this.language];
    },
    style() {
      return {
        width: `${this.width}`,
      };
    },
    computedInitialView() {
      return this.initialView || this.minimumView;
    },
    computedOpenDate() {
      const openDateOrToday = this.openDate
        ? new Date(this.openDate)
        : this.utils.getNewDateObject();
      const openDate = this.selectedDate || openDateOrToday;

      // If the `minimum-view` is `month` or `year`, convert `openDate` accordingly
      return this.minimumView === "day"
        ? openDate
        : new Date(this.utils.setDate(openDate, 1));
    },
    datepickerId() {
      return `vdp-${Math.random().toString(36).slice(-10)}`;
    },
    isInline() {
      return !!this.inline;
    },
    isOpen() {
      return this.view !== "";
    },
    isMinimumView() {
      return this.view === this.minimumView;
    },
    isUpDisabled() {
      return !this.allowedToShowView(this.nextView.up);
    },
    nextView() {
      const views = ["day", "month", "year"];
      const isCurrentView = view => view === this.view;
      const viewIndex = views.findIndex(isCurrentView);
      const nextViewDown = index => {
        return index <= 0 ? undefined : views[index - 1];
      };
      const nextViewUp = index => {
        if (index < 0) {
          return undefined;
        }

        if (index === views.length - 1) {
          return "decade";
        }

        return views[index + 1];
      };

      return {
        up: nextViewUp(viewIndex),
        down: nextViewDown(viewIndex),
      };
    },
    pageDate() {
      return new Date(this.pageTimestamp);
    },
    picker() {
      const view = this.view || this.computedInitialView;
      return `Picker${this.ucFirst(view)}`;
    },
    pickerClasses() {
      return [
        this.calendarClass,
        this.isInline && "bimdata-datepicker__calendar--inline",
      ];
    },
    translation() {
      return this.language;
    },
  },
  watch: {
    disabledDates: {
      handler() {
        const selectedDate = this.selectedDate || this.modelValue;
        if (!selectedDate) {
          return;
        }

        const isDateDisabled = this.isDateDisabled(selectedDate);

        if (isDateDisabled) {
          if (this.selectedDate) {
            this.selectDate(null);
          }
        } else if (this.dateChanged(selectedDate)) {
          this.selectDate(selectedDate);
        }
      },
      deep: true,
    },
    initialView() {
      if (this.isOpen) {
        this.setInitialView();
      }
    },
    isActive(hasJustBecomeActive, isNoLongerActive) {
      if (hasJustBecomeActive) {
        this.datepickerIsActive();
      }

      if (isNoLongerActive) {
        this.datepickerIsInactive();
      }
    },
    openDate() {
      this.setPageDate();
    },
    modelValue: {
      handler(newValue, oldValue) {
        if (!this.utils.compareDates(newValue, oldValue)) {
          const isDateDisabled = newValue && this.isDateDisabled(newValue);

          this.setValue(isDateDisabled ? null : newValue);
        }
      },
      immediate: true,
    },
    toDate: {
      handler(newValue, oldValue) {
        if (!this.utils.compareDates(newValue, oldValue)) {
          const isDateDisabled = newValue && this.isDateDisabled(newValue);

          this.selectedToDate = isDateDisabled ? null : newValue;
        }
      },
      immediate: true,
    },
    selectedToDate(value) {
      this.$emit("to-date-change", value);
    },
    view(newView, oldView) {
      this.handleViewChange(newView, oldView);
    },
  },
  mounted() {
    this.init();
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    /**
     * Are we allowed to show a specific picker view?
     * @param {String} view
     * @return {Boolean}
     */
    allowedToShowView(view) {
      const views = ["day", "month", "year"];
      const minimumViewIndex = views.indexOf(this.minimumView);
      const maximumViewIndex = views.indexOf(this.maximumView);
      const viewIndex = views.indexOf(view);

      return viewIndex >= minimumViewIndex && viewIndex <= maximumViewIndex;
    },
    clear() {
      this.selectedToDate = null;
      this.selectDate(null);
      this.focus.refs = ["input"];
      this.$emit("cleared");

      if (this.isDateRange) {
        return;
      } else {
        this.close();
      }
    },
    /**
     * Close the calendar
     */
    close() {
      if (this.isInline) {
        return;
      }

      this.view = "";

      if (this.showCalendarOnFocus) {
        this.$refs.dateInput.shouldToggleOnClick = true;
      }

      if (this.isClickOutside) {
        this.isClickOutside = false;
      } else {
        this.reviewFocus();
      }

      this.$emit("closed");
    },
    closeByClickOutside() {
      this.isClickOutside = true;
      this.close();
    },
    closeIfNotFocused() {
      const isFocused = this.allElements.includes(document.activeElement);

      if (!isFocused) {
        this.closeByClickOutside();
      }
    },
    dateChanged(date) {
      if (!this.selectedDate && !date) {
        return false;
      }

      if (this.selectedDate && date) {
        return date.valueOf() !== this.selectedDate.valueOf();
      }

      return true;
    },
    datepickerIsActive() {
      this.$emit("focus");

      if (this.inline) {
        this.setNavElementsFocusedIndex();
        this.tabToCorrectInlineCell();
      }
    },
    datepickerIsInactive() {
      this.$emit("blur");
    },
    /**
     * Closes the calendar when no element within it has focus
     */
    handleClickOutside() {
      if (!this.isOpen) {
        return;
      }

      const closeByClickOutside = () => {
        this.isClickOutside = true;
        this.close();
      };

      if (!this.globalDatepickerId) {
        closeByClickOutside();
        return;
      }

      if (document.datepickerId.toString() === this.datepickerId) {
        this.$nextTick(() => {
          if (!this.isActive) {
            closeByClickOutside();
          }
        });
      }
    },
    /**
     * Set the new pageDate, focus the relevant element and emit a `changed-<view>` event
     */
    handlePageChange({ focusRefs, pageDate }) {
      this.setPageDate(pageDate);
      this.focus.refs = focusRefs;
      this.focus.delay = this.slideDuration;
      this.reviewFocus();
      this.$emit(`changed-${this.nextView.up}`, pageDate);
    },
    /**
     * Set the date, or go to the next view down
     */
    // eslint-disable-next-line max-statements,complexity
    handleSelect(cell) {
      if (this.allowedToShowView(this.nextView.down)) {
        this.showNextViewDown(cell);
        return;
      }

      const date = new Date(cell.timestamp);

      if (this.isDateRange && this.selectedDate && !this.selectedToDate) {
        const isBeforeSelectedDate =
          cell.timestamp < this.selectedDate.valueOf();

        if (isBeforeSelectedDate) {
          this.selectDate(date);
        } else {
          this.selectedToDate = date;
        }
      } else {
        this.selectedToDate = null;
        this.selectDate(date);
      }

      this.focus.delay = cell.isNextMonth ? this.slideDuration : 0;
      this.focus.refs = this.isInline ? ["tabbableCell"] : ["input"];

      if (!this.isDateRange || (this.selectedToDate && this.autoCloseRange)) {
        this.close();
      }

      if (this.showCalendarOnFocus && !this.inline) {
        this.$refs.dateInput.shouldToggleOnClick = true;
      } else {
        this.reviewFocus();
      }
    },
    /**
     * Focus the relevant element when the view changes
     * @param {String} newView
     * @param {String} oldView
     */
    handleViewChange(newView, oldView) {
      const isClosing = newView === "";
      const isOpeningInline = oldView === "" && this.isInline;

      if (isClosing || isOpeningInline) {
        return;
      }

      if (!this.isRevertingToOpenDate) {
        this.setViewChangeFocusRefs(newView, oldView);
        this.reviewFocus();
      }

      this.isRevertingToOpenDate = false;
    },
    /**
     * Returns true if element has the given className
     * @param   {HTMLElement} element
     * @param   {String}      className
     * @returns {Boolean}
     */
    hasClass(element, className) {
      return element && element.className.split(" ").includes(className);
    },
    /**
     * Initiate the component
     */
    init() {
      if (this.isInline) {
        this.setInitialView();
      }

      this.setSlideDuration();
    },
    /**
     * Returns true if a date is disabled
     * @param {Date} date
     */
    isDateDisabled(date) {
      return new DisabledDate(this.utils, this.disabledDates).isDateDisabled(
        date
      );
    },
    /**
     * Returns true if we should reset the focus to computedOpenDate
     * @returns {Boolean}
     */
    isResetFocus() {
      if (!this.isOpen) {
        return false;
      }

      const isOpenCellFocused =
        this.hasClass(document.activeElement, "cell") &&
        !this.hasClass(document.activeElement, "open");

      return !this.isMinimumView || isOpenCellFocused;
    },
    /**
     * Opens the calendar with the relevant view: 'day', 'month', or 'year'
     */
    open() {
      if (this.disabled || this.isInline) {
        return;
      }

      this.setInitialView();
      this.reviewFocus();

      this.$emit("opened");
    },
    /**
     * Focus the open date, or close the calendar if already focused
     */
    resetOrClose() {
      if (this.isResetFocus()) {
        this.resetFocusToOpenDate();
        return;
      }

      if (this.isOpen) {
        this.focus.refs = ["input"];
        this.close();
      }
    },
    /**
     * Select the date
     * @param {Date|null} date
     */
    selectDate(date) {
      if (this.dateChanged(date)) {
        this.$emit("update:modelValue", date);
      }

      this.setValue(date);
      this.$emit("selected", date);
    },
    /**
     * Sets the initial picker page view: day, month or year
     */
    setInitialView() {
      const initialView = this.computedInitialView;

      if (!this.allowedToShowView(initialView)) {
        throw new Error(
          `initialView '${this.initialView}' cannot be rendered based on minimum '${this.minimumView}' and maximum '${this.maximumView}'`
        );
      }

      this.setView(initialView);
    },
    /**
     * Sets the date that the calendar should open on
     * @param {Date=} date The date to set for the page
     */
    setPageDate(date) {
      let dateTemp = date;
      if (!dateTemp) {
        if (this.computedOpenDate) {
          dateTemp = new Date(this.computedOpenDate);
        } else {
          dateTemp = new Date();
        }
      }

      let pageTimestamp = this.utils.resetDateTime(new Date(dateTemp));
      pageTimestamp = this.utils.setDate(new Date(pageTimestamp), 1);

      if (this.view === "year") {
        pageTimestamp = this.utils.setMonth(new Date(pageTimestamp), 0);
      }

      this.pageTimestamp = pageTimestamp;
    },
    /**
     * Sets the slide duration in milliseconds by looking up the stylesheet
     */
    setSlideDuration() {
      if (!this.$refs.picker || !this.$refs.picker.$refs.cells) {
        return;
      }
      const cells = this.$refs.picker.$refs.cells.$el;
      const durationInSecs = window.getComputedStyle(cells).transitionDuration;

      this.slideDuration = parseFloat(durationInSecs) * 1000;
    },
    /**
     * Set the datepicker value
     * @param {Date|String|Number|null} date
     */
    setValue(date) {
      this.selectedDate = date || null;
      this.setPageDate(date);
    },
    /**
     * Set the picker view
     * @param {String} view
     */
    setView(view) {
      if (this.allowedToShowView(view)) {
        this.view = view;
      }
    },
    /**
     * Sets the array of `refs` that might be focused following a view change
     * @param {String} newView The view being changed to
     * @param {String} oldView The previous view
     */
    setViewChangeFocusRefs(newView, oldView) {
      if (oldView === "") {
        this.focus.refs = [];
        return;
      }

      const views = ["day", "month", "year"];
      const isNewView = view => view === newView;
      const isOldView = view => view === oldView;
      const newViewIndex = views.findIndex(isNewView);
      const oldViewIndex = views.findIndex(isOldView);
      const isViewChangeUp = newViewIndex - oldViewIndex > 0;

      this.focus.refs = isViewChangeUp
        ? ["up", "tabbableCell"]
        : ["tabbableCell", "up"];
    },
    /**
     * Set the view to the next view down e.g. from `month` to `day`
     * @param {Object} cell The currently focused cell
     */
    showNextViewDown(cell) {
      this.setPageDate(new Date(cell.timestamp));
      this.$emit(`changed-${this.view}`, cell);
      this.setView(this.nextView.down);
    },
    /**
     * Capitalizes the first letter
     * @param {String} str The string to capitalize
     * @returns {String}
     */
    ucFirst(str) {
      return str[0].toUpperCase() + str.substring(1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.css";
</style>

<style lang="scss" src="">
@import "./_BIMDataDatePicker.scss";
</style>
