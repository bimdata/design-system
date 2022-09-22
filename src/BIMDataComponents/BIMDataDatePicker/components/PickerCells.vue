<template>
  <div class="picker-cells">
    <button
      v-for="(cell, id) in cells"
      :key="cell.timestamp"
      :ref="cell.isOpenDate ? 'openDate' : null"
      :class="cellClasses(cell)"
      :id="id"
      :dataTestTabbableCell="isTabbableCell(cell, id)"
      :dataTestOpenDate="cell.isOpenDate"
      :dataTestTodayCell="cell.isToday"
      :disabled="cell.isDisabled"
      type="button"
      @click="$emit('select', cell)"
      @keydown.up.prevent="handleArrow(id, -columns)"
      @keydown.down.prevent="handleArrow(id, columns)"
      @keydown.left.prevent="handleArrow(id)"
      @keydown.right.prevent="handleArrow(id)"
    >
      <slot :cell="cell" />
    </button>
  </div>
</template>

<script>
export default {
  name: "PickerCells",
  props: {
    cells: {
      type: Array,
      required: true,
    },
    showEdgeDates: {
      type: Boolean,
      default: true,
    },
    tabbableCellId: {
      type: Number,
      default: null,
    },
    view: {
      type: String,
      validator: val => ["day", "month", "year"].includes(val),
      required: true,
    },
  },
  computed: {
    /**
     * The number of columns in the picker
     * @return {Number}
     */
    columns() {
      return this.view === "day" ? 7 : 3;
    },
  },
  methods: {
    /**
     * Set the classes for a specific cell
     * @return {Array}
     */
    // eslint-disable-next-line complexity
    cellClasses(cell) {
      return [
        "cell",
        this.view,
        {
          disabled: cell.isDisabled,
          "highlight-start": cell.isHighlightStart,
          "highlight-end": cell.isHighlightEnd,
          highlighted: cell.isHighlighted,
          muted: cell.isPreviousMonth || cell.isNextMonth,
          open: cell.isOpenDate,
          sat: cell.isSaturday,
          sun: cell.isSunday,
          selected: this.showEdgeDates
            ? cell.isSelected
            : cell.isSelected && !cell.isPreviousMonth && !cell.isNextMonth,
          today: this.showEdgeDates
            ? cell.isToday
            : cell.isToday && !cell.isPreviousMonth && !cell.isNextMonth,
          weekend: cell.isWeekend,
        },
      ];
    },
    /**
     * Emits an `arrow` event
     */
    handleArrow(cellId, delta) {
      this.$emit("arrow", { cellId, delta });
    },
    isTabbableCell(cell, id) {
      if (!this.tabbableCellId) {
        return cell.isOpenDate;
      }

      return id === this.tabbableCellId;
    },
  },
};
</script>
