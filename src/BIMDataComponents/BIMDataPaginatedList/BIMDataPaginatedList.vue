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
  props: {
    list: {
      type: Array,
      default: () => []
    },
    perPage: {
      type: Number,
      default: 10,
      validator: value => {
        return value > 0;
      }
    },
    elementKey: {
      type: String
    }
  },
  data() {
    return {
      currentPage: 1
    };
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
  methods: {
    onPageChange(pageNumber) {
      this.currentPage = pageNumber;
    }
  }
};
</script>

<style lang="scss" scoped>
  // import BIMDATA VARIABLES
  @import "../../assets/scss/_BIMDataVariables.scss";

  // import BIMDATA UTILITIES
  @import "../../assets/scss/utilities/_text.scss";
  @import "../../assets/scss/utilities/_list.scss";

  // import BIMDATA STYLE COMPONENT
  @import "./_BIMDataPaginatedList.scss";
</style>
