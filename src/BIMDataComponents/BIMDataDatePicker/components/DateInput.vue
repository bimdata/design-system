<template>
  <div :class="{ 'not-empty': formattedValue, 'dark': isDark }">
    <slot name="beforeDateInput" />
    <!-- Calendar Button -->
    <button
      v-if="calendarButton"
      ref="calendarButton"
      class="bimdata-datepicker__calendar-button"
      :disabled="disabled"
      type="button"
      @click="toggle('calendarButton')"
      @focus="handleButtonFocus"
    >
      <span>
        <slot name="calendarBtn">
          <i :class="calendarButtonIcon">
            {{ calendarButtonIconContent }}
            <span v-if="!calendarButtonIcon">&hellip;</span>
          </i>
        </slot>
      </span>
    </button>
    <!-- Input -->
    <label :for="`bimdata-input-${id}`">{{ placeholder }}</label>
    <input
      :id="id"
      :ref="refName"
      autocomplete="off"
      :autofocus="autofocus"
      :class="[computedInputClass, { required: required }]"
      :clearButton="clearButton"
      :disabled="disabled"
      :maxlength="maxlength"
      :name="name"
      :pattern="pattern"
      :readonly="!typeable"
      :required="required"
      :tabIndex="tabIndex"
      :type="inline ? 'hidden' : null"
      :value="formattedValue"
      @blur="handleInputBlur"
      @click="handleInputClick"
      @focus="handleInputFocus"
      @keydown.backspace="handleDelete"
      @keydown.delete="handleDelete"
      @keydown.down.prevent="handleKeydownDown"
      @keydown.enter.prevent="handleKeydownEnter"
      @keydown.esc.prevent="handleKeydownEscape"
      @keydown.space="handleKeydownSpace($event)"
      @keydown.tab="$emit('tab', $event)"
      @keyup="handleKeyup($event)"
      @keyup.space="handleKeyupSpace($event)"
    />
    <!-- Clear Button -->
    <BIMDataButton
      :disabled="disabled"
      v-if="clearButton && selectedDate"
      class="bimdata-datepicker__clear-button"
      :color="isDark ? 'tertiary' : 'primary'"
      fill
      square
      icon
      @click="clearDate"
    >
      <slot name="clearBtn">
        <BIMDataIconDelete size="xxxs" fill color="default" />
      </slot>
    </BIMDataButton>
    <slot name="afterDateInput" />
  </div>
</template>

<script>
import BIMDataIconDelete from "../../BIMDataIcon/BIMDataIconStandalone/BIMDataIconDelete.vue";
import BIMDataButton from "../../BIMDataButton/BIMDataButton.vue";

import makeDateUtils from "../utils/DateUtils.js";
import inputProps from "../mixins/inputProps.vue";

export default {
  name: "DateInput",
  components: { BIMDataIconDelete, BIMDataButton },
  mixins: [inputProps],
  inject: {
    darkThemeRef: {
      from: "BIMDATA_DESIGN_SYSTEM_DARK_THEME",
      default: () => ({ value: false }),
    },
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    selectedDate: {
      type: Date,
      default: null,
    },
    translation: {
      type: Object,
      default() {
        return {};
      },
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      input: null,
      isInputFocused: false,
      shouldToggleOnFocus: false,
      shouldToggleOnClick: true,
      typedDate: "",
      utils: makeDateUtils(this.useUtc),
    };
  },
  computed: {
    computedInputClass() {
      return this.inputClass;
    },
    formattedValue() {
      if (this.typeable) {
        return this.typedDate;
      }

      return this.formatDate(this.selectedDate);
    },
    isDark() {
      return this.darkThemeRef;
    },
  },
  watch: {
    showCalendarOnFocus: {
      immediate: true,
      handler(showCalendarOnFocus) {
        if (showCalendarOnFocus) {
          this.shouldToggleOnFocus = !this.isOpen;
        }
      },
    },
    isOpen(isOpen, wasOpen) {
      this.$nextTick(() => {
        if (this.showCalendarOnFocus) {
          if (isOpen) {
            this.shouldToggleOnFocus = false;
          }
          if (wasOpen && !this.isInputFocused) {
            this.shouldToggleOnFocus = true;
          }
        }
      });
    },
    selectedDate(selectedDate) {
      if (this.typeable) {
        this.typedDate = this.formatDate(selectedDate);
      }
    },
  },
  mounted() {
    this.input = this.$el.querySelector("input");
  },
  methods: {
    /**
     * Emits a `clear-date` event
     */
    clearDate() {
      this.input.value = "";
      this.$emit("clear-date");
    },
    /**
     * Formats a date
     * @param {Date} date The date to be formatted
     * @returns {String}
     */
    formatDate(date) {
      if (!date) {
        return "";
      }

      return typeof this.format === "function"
        ? this.format(new Date(date))
        : this.utils.formatDate(new Date(date), this.format, this.translation);
    },
    /**
     * Formats a typed date, or clears it if invalid
     */
    formatTypedDate() {
      const parsedDate = this.parseInput();

      if (this.utils.isValidDate(parsedDate)) {
        this.typedDate = this.formatDate(parsedDate);
      } else {
        this.input.value = "";
        this.typedDate = "";
      }
    },
    /**
     * Validates typedDate
     */
    handleInputBlur() {
      if (this.showCalendarOnFocus && !this.isOpen) {
        this.shouldToggleOnFocus = true;
      }

      if (this.typeable) {
        this.formatTypedDate();
      }
      this.isInputFocused = false;
    },
    /**
     * Resets `shouldToggleOnFocus` to true
     */
    handleButtonFocus() {
      if (this.showCalendarOnFocus) {
        this.shouldToggleOnFocus = true;
      }
    },
    /**
     * Clears the calendar when the `delete` or `backspace` key is pressed
     */
    handleDelete() {
      if (!this.typeable && this.selectedDate) {
        this.clearDate();
      }
    },
    /**
     * Toggles the calendar (unless `show-calendar-on-button-click` is true)
     */
    handleInputClick() {
      if (this.showCalendarOnButtonClick) return;

      if (this.shouldToggleOnClick) {
        this.toggle();
      }
    },
    /**
     * Opens the calendar when `show-calendar-on-focus` is true
     */
    handleInputFocus() {
      this.isInputFocused = true;

      if (!this.isOpen && this.shouldToggleOnFocus) {
        this.shouldToggleOnClick = false;
      }

      if (this.shouldToggleOnFocus && !this.isOpen) {
        this.$emit("open");

        setTimeout(() => {
          this.shouldToggleOnClick = true;
        }, 300);
      }
    },
    /**
     * Opens the calendar, or sets the focus to the next focusable element down
     */
    handleKeydownDown() {
      if (!this.isOpen) {
        this.$emit("open");
      }

      if (!this.typeable) {
        return;
      }

      this.$emit("set-focus", ["prev", "up", "next", "tabbableCell"]);
    },
    /**
     * Selects a typed date and closes the calendar
     */
    handleKeydownEnter() {
      if (!this.typeable) {
        return;
      }

      if (!this.input.value) {
        this.$emit("select-typed-date", null);
        return;
      }

      const parsedDate = this.parseInput();

      if (this.utils.isValidDate(parsedDate)) {
        this.$emit("select-typed-date", new Date(parsedDate));
      }
    },
    /**
     * Closes the calendar
     */
    handleKeydownEscape() {
      if (this.isOpen) {
        this.$emit("close");
      }
    },
    /**
     * Prevents scrolling when not typeable
     */
    handleKeydownSpace(event) {
      if (!this.typeable) {
        event.preventDefault();
      }
    },
    /**
     * Parses a typed date and emits `typed-date` event, if valid
     * @param  {object}  event Used to exclude certain keystrokes
     */
    handleKeyup(event) {
      if (
        !this.typeable ||
        [
          "Control",
          "Escape",
          "Shift",
          "Tab",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
        ].includes(event.key)
      ) {
        return;
      }

      this.typedDate = this.input.value;

      if (!this.input.value) {
        this.$emit("typed-date", null);
        return;
      }

      const parsedDate = this.parseInput();

      if (this.utils.isValidDate(parsedDate)) {
        this.$emit("typed-date", parsedDate);
      }
    },
    /**
     * Toggles the calendar unless a typed date has been entered or `show-calendar-on-button-click` is true
     */
    handleKeyupSpace(event) {
      if (this.typeable) {
        if (this.input.value === "") {
          this.toggle();
        }
        return;
      }

      event.preventDefault();
      if (!this.showCalendarOnButtonClick) {
        this.toggle();
      }
    },
    /**
     * Parses the value of the input field
     */
    parseInput() {
      return new Date(
        this.utils.parseDate(
          this.input.value.trim(),
          this.format,
          this.translation,
          this.parser
        )
      );
    },
    /**
     * Opens or closes the calendar
     */
    toggle(calendarButton) {
      if (this.isOpen) {
        this.$emit("set-focus", [calendarButton || "input"]);
      }

      this.$emit(this.isOpen ? "close" : "open");
    },
  },
};
</script>
