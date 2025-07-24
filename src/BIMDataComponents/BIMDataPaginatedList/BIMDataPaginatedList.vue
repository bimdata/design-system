<template>
  <div class="bimdata-paginated-list" :class="{ dark: isDark }" :style="style">
    <BIMDataSpinner v-if="loading" />
    <div v-else>
      <slot name="header"></slot>
      <ul class="bimdata-list bimdata-paginated-list__elements">
        <li
          v-for="element of page"
          :key="elementKey ? element[elementKey] : element"
          @click="$emit('element-click', element)"
          ref="elements"
          :class="{ 'active-element': isElementActive(element) }"
        >
          <slot name="element" :element="element">
            {{ element && element.toString() }}
          </slot>
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
        :first="first"
        :last="last"
        :numberDataElements="numberDataElements"
        :backgroundColor="backgroundColor"
        :dark="isDark"
      />
    </div>
  </div>
</template>

<script>
import BIMDataPagination from "../BIMDataPagination/BIMDataPagination.vue";
import BIMDataSpinner from "../BIMDataSpinner/BIMDataSpinner.vue";

export default {
  components: {
    BIMDataPagination,
    BIMDataSpinner,
  },
  inject: {
    darkThemeRef: {
      from: "BIMDATA_DESIGN_SYSTEM_DARK_THEME",
      default: () => ({ value: false }),
    },
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    perPage: {
      type: Number,
      default: 10,
      validator: value => {
        return value > 0;
      },
    },
    elementKey: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    first: {
      type: Boolean,
      default: true,
    },
    last: {
      type: Boolean,
      default: true,
    },
    numberDataElements: {
      type: Boolean,
      default: true,
    },
    backgroundColor: {
      type: String,
      default: "var(--color-white)",
    },
    activeElement: {
      type: [String, Number, Object],
    },
    borderRadius: {
      type: String,
      default: "3px",
    },
  },
  emits: ["element-click"],
  data() {
    return {
      currentPage: 1,
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
    },
    style() {
      const value = parseInt(this.borderRadius, 10);
      if (value > 10) {
        return {
          "border-radius": "10px",
        };
      } else {
        return {
          "border-radius": `${this.borderRadius}`,
        };
      }
    },
    isDark() {
      return this.darkThemeRef;
    },
  },
  watch: {
    list: {
      handler() {
        if (this.list.length < this.perPage * (this.currentPage - 1) + 1) {
          this.currentPage = 1;
        }
      },
      deep: true,
      immediate: true,
    },
    activeElement: {
      handler(value) {
        if (value) {
          this.showElement(value);
        }
      },
      immediate: true,
    },
  },
  methods: {
    onPageChange(pageNumber) {
      this.currentPage = pageNumber;
    },
    compareElements(elementA, elementB) {
      if (this.elementKey) {
        return elementA[this.elementKey] === elementB[this.elementKey];
      } else {
        return elementA === elementB;
      }
    },
    isElementActive(element) {
      if (!this.activeElement) return false;
      return this.compareElements(element, this.activeElement);
    },
    async showElement(elem) {
      const elementIndex = this.list.findIndex(listElement =>
        this.compareElements(elem, listElement),
      );
      if (elementIndex === -1) return;
      const startIndex = this.perPage * (this.currentPage - 1);
      const endIndex = startIndex + this.perPage;
      const isElementInCurrentPage =
        elementIndex >= startIndex && elementIndex < endIndex;
      if (!isElementInCurrentPage) {
        const elementPage = Math.ceil((elementIndex + 1) / this.perPage);
        this.currentPage = elementPage;
      }
      await this.$nextTick();
      const elementIndexOnPage = elementIndex % this.perPage;
      const domElement = this.$refs.elements[elementIndexOnPage];
      domElement.scrollIntoView({ block: "center" });
    },
  },
};
</script>

<style scoped lang="scss" src="./BIMDataPaginatedList.css"></style>
