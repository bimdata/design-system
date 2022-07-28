<template>
  <div class="bimdata-search-autocomplete" v-clickaway="away">
    <div class="bimdata-search-autocomplete__input flex items-center">
      <span class="bimdata-search-icon flex">
        <BIMDataIcon name="search" fill color="default" size="xxs" />
      </span>
      <input
        class="form-control p-l-36 p-r-12"
        type="text"
        v-model="search"
        :placeholder="placeholder"
        @keydown.enter="onEnter"
        @keydown.down="onArrowDown"
        @keydown.up="onArrowUp"
        @input="onChange"
        @focus="focus"
      />
    </div>
    <div
      class="bimdata-search-autocomplete__dropdown"
      :class="{ open: openResults }"
    >
      <ul class="bimdata-list p-y-6">
        <li class="loading" v-if="loading">
          <slot name="loading"
            ><p class="text-center">loading results...</p></slot
          >
        </li>
        <li
          v-else
          v-for="(result, i) in results"
          :key="i"
          :class="{ active: i === current }"
          class="p-y-6 p-x-12 flex items-center"
          @click="onElementClick(result)"
        >
          <slot name="left" :result="result">
            <div class="bimdata-search-autocomplete__dropdown__left m-r-12">
              <template v-if="result && result.logo">
                <img class="logo" :src="result.logo" />
              </template>
              <template v-else>
                <slot name="logoPlaceholder">
                  <BIMDataIcon name="default" fill color="default" />
                </slot>
              </template>
            </div>
          </slot>
          <div
            class="bimdata-search-autocomplete__dropdown__right flex flex-col"
          >
            <span v-if="result && result.title" class="title">
              {{ result.title }}
            </span>
            <span v-if="result && result.text" class="text">
              <BIMDataTextbox
                :text="result.text"
                width="260px"
                cutPosition="end"
                :tooltip="false"
              />
            </span>
          </div>
        </li>
      </ul>
      <div
        v-if="isAllResultatsBtnActive"
        class="bimdata-search-autocomplete__dropdown__button flex items-center justify-center"
        @click="onAllResultatsBtnClick"
      >
        See all results for "{{ search }}"
      </div>
    </div>
  </div>
</template>

<script>
import clickaway from "../../BIMDataDirectives/click-away.js";
import BIMDataIcon from "../BIMDataIcon/BIMDataIcon.vue";
import BIMDataTextbox from "../../BIMDataComponents/BIMDataTextbox/BIMDataTextbox.vue";

export default {
  components: {
    BIMDataIcon,
    BIMDataTextbox,
  },
  directives: { clickaway },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    isAllResultatsBtnActive: {
      type: Boolean,
      required: false,
      default: true,
    },
    perPage: {
      type: Number,
      default: 10,
      validator: value => {
        return value > 0;
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    autoclear: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isOpen: false,
      search: "",
      current: 0,
    };
  },
  computed: {
    results() {
      const fieldToFilter = ["title", "text", "logo"];
      let agnosticFilter;
      if (typeof this.search === "object") {
        agnosticFilter =
          this.search.title.toLowerCase() || this.search.text.toLowerCase();
      } else {
        agnosticFilter = this.search.toLowerCase();
      }
      return this.items
        .filter(str => {
          return fieldToFilter.some(field =>
            typeof str[field] === "string"
              ? str[field].toLowerCase().includes(agnosticFilter)
              : false
          );
        })
        .slice(0, this.perPage);
    },
    openResults() {
      return (
        this.search !== "" && this.results.length !== 0 && this.isOpen === true
      );
    },
  },
  methods: {
    onChange() {
      this.$emit("input", this.search);
      if (this.isOpen === false) {
        this.isOpen = true;
        this.current = -1;
      }
    },
    onElementClick(result) {
      this.$emit("item-click", result);
      this.isOpen = false;
      if (this.autoclear) {
        this.search = "";
      }
    },
    onAllResultatsBtnClick() {
      this.$emit("all-results-click", {
        results: this.results,
        search: this.search,
      });
      this.isOpen = false;
      if (this.autoclear) {
        this.search = "";
      }
    },
    onEnter() {
      this.$emit("enter", this.results[this.current].id);
      this.isOpen = false;
      this.current = -1;
      if (this.autoclear) {
        this.search = "";
      }
    },
    onArrowUp() {
      if (this.current >= 1) {
        this.current = this.current - 1;
      } else {
        this.current = this.results.length - 1;
      }
    },
    onArrowDown() {
      if (this.current < this.results.length - 1) {
        this.current = this.current + 1;
      } else {
        this.current = 0;
      }
    },
    focus() {
      this.isOpen = true;
    },
    away() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped src="./_BIMDataSearchAutocomplete.scss"></style>
