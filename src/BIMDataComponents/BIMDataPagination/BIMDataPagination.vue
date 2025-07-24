<template>
  <BIMDataNavigation
    @first="firstPage()"
    @previous="previousPage()"
    @next="nextPage()"
    @last="lastPage()"
    :firstDisabled="isFirstPage"
    :previousDisabled="isFirstPage"
    :nextDisabled="isLastPage"
    :lastDisabled="isLastPage"
    class="bimdata-pagination"
    :class="{ dark: isDark }"
    :backgroundColor="backgroundColor"
    :dark="isDark"
  >
    <template #left v-if="numberDataElements">
      {{ firstIndex }} - {{ lastIndex }} of {{ length }}
    </template>
    <span class="bimdata-pagination__item">
      <BIMDataButton
        ghost
        :color="!isDark ? 'default' : 'quaternary'"
        width="21px"
        height="21px"
      >
        {{ currentPage }}
      </BIMDataButton>
    </span>
  </BIMDataNavigation>
</template>

<script>
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";
import BIMDataNavigation from "../BIMDataNavigation/BIMDataNavigation.vue";

export default {
  components: {
    BIMDataNavigation,
    BIMDataButton,
  },
  inject: {
    darkThemeRef: {
      from: "BIMDATA_DESIGN_SYSTEM_DARK_THEME",
      default: () => ({ value: false }),
    },
  },
  props: {
    length: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    numberDataElements: {
      type: Boolean,
      default: true,
    },
    backgroundColor: {
      type: String,
      default: "var(--color-white)",
    },
    perPage: {
      type: Number,
      required: true,
      validator: value => {
        return value > 0;
      },
    },
  },
  emits: ["pagechanged"],
  computed: {
    firstIndex() {
      return this.perPage * (this.currentPage - 1) + 1;
    },
    lastIndex() {
      return Math.min(this.firstIndex + this.perPage - 1, this.length);
    },
    isFirstPage() {
      return this.currentPage === 1;
    },
    isLastPage() {
      return this.currentPage === this.totalPages;
    },
    isDark() {
      return this.darkThemeRef;
    },
  },
  methods: {
    firstPage() {
      this.$emit("pagechanged", 1);
    },
    previousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    nextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    lastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataPagination.scss"></style>
