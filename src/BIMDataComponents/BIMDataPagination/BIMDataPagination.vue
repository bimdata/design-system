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
  >
    <template #left>
      <span class="bimdata-pagination__number">{{ firstIndex }} - {{ lastIndex }} of {{ length }}</span>
    </template>
    <span class="bimdata-pagination__item">
      <BIMDataButton class="bimdata-btn__ghost" width="50px" height="21px">
        {{
        currentPage
        }}
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
    BIMDataButton
  },
  props: {
    length: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true,
      validator: value => {
        return value > 0;
      }
    }
  },
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
    }
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
    setPages() {
      let numberOfPages = Math.ceil(this.length / this.perPage);
    }
  }
};
</script>

<style lang="scss">
// import BIMDATA VARIABLES
@import "@/assets/scss/_BIMDataVariables.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataPagination.scss";
</style>