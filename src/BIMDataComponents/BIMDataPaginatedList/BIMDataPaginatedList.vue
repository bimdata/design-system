<template>
  <div class="bimdata-paginated-list">
    <slot name="header"></slot>
    <ul class="bimdata-list bimdata-paginated-list__elements">
      <li
        v-for="element of page"
        :key="elementKey ? element[elementKey] : element"
        @click="$emit('element-click', element)"
      >
        <slot name="element" :element="element">{{ element }}</slot>
      </li>
    </ul>
    <template v-if="list.length === 0">
      <slot name="empty"></slot>
    </template>
    <BIMDataPagination
      v-if="totalPages > 1"
      :length="list.length"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
      :totalPages="totalPages"
      :perPage="perPage"
    />
  </div>
</template>

<script>
import BIMDataPagination from "../BIMDataPagination/BIMDataPagination.vue";
export default {
  components: {
    BIMDataPagination
  },
  data() {
    return {
      currentPage: 1
    };
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    perPage: {
      type: Number,
      default: 10
    },
    elementKey: {
      type: String
    }
  },
  watch: {
    list: {
      handler(list) {
        if (list.length < this.perPage * (this.currentPage - 1) + 1) {
          this.currentPage = 1;
        }
      },
      immediate: true
    }
  },
  computed: {
    totalPages() {
      return this.list.length ? Math.ceil(this.list.length / this.perPage) : 0;
    },
    page() {
      const startIndex = this.perPage * (this.currentPage - 1);
      const endIndex = startIndex + this.perPage;
      return this.list.slice(startIndex, endIndex);
    }
  },
  methods: {
    onPageChange(pageNumber) {
      this.currentPage = pageNumber;
    }
  }
};
</script>

<style lang="scss">
  // import BIMDATA VARIABLES
  @import "../../assets/scss/_BIMDataVariables.scss";

  // import BIMDATA MIXINS
  @import "../../assets/scss/mixins/_font-size.scss";

  // import BIMDATA LIST
  @import "../../assets/scss/elements/_BIMDataList.scss";

  @import "./_BIMDataPaginatedList.scss";
</style>
