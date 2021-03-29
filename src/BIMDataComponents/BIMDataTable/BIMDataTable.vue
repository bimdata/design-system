<template>
  <div
    class="bimdata-table"
    :class="{ 'bimdata-table__compensated': compensated }"
  >
    <table>
      <thead>
        <tr>
          <th
            v-for="(cell, headerIndex) of header"
            :key="`header-${headerIndex}-${cell}`"
          >
            {{ cell }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) of contentRows" :key="`row-${rowIndex}`">
          <td
            v-for="(cell, cellIndex) of row"
            :key="`row-${rowIndex}-cell-${cellIndex}`"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    compensated: {
      type: Boolean,
      default: false,
    },
    rows: {
      validator(rows) {
        try {
          const length = rows[0].length;
          return rows.every(
            row =>
              row.length === length &&
              row.every(
                cell => typeof cell === "string" || typeof cell === "number"
              )
          );
        } catch (e) {
          return false;
        }
      },
    },
  },
  computed: {
    header() {
      return this.rows[0];
    },
    contentRows() {
      return this.rows.slice(1);
    },
  },
};
</script>

<style lang="scss" scoped>
// import BIMDATA UTILITIES
@import "../../assets/scss/utilities/_text.scss";
</style>

<style lang="scss">
// import BIMDATA VARIABLES
@import "../../assets/scss/_BIMDataVariables.scss";

// import BIMDATA UTILITIES
@import "../../assets/scss/mixins/_font-size.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataTable.scss";
</style>
