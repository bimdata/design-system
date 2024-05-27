<template>
  <div
    class="bimdata-list"
    @scroll="computeIndexes"
    :style="`--bimdata-list--item-height: ${itemHeight}px`"
  >
    <div
      class="bimdata-list__placeholder"
      :style="`height: ${items.length * itemHeight}px;`"
    ></div>
    <div
      class="bimdata-list__element"
      v-for="(item, index) in displayedItems"
      :key="itemKey ? item[itemKey] : item"
      :style="`height: ${itemHeight}px; top: ${
        (offsetedStartIndex + index) * itemHeight
      }px`"
    >
      <slot :item="item" :index="offsetedStartIndex + index">
        {{ item }}
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BIMDataList",
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemHeight: {
      type: Number,
      default: 30,
    },
    offset: {
      type: Number,
      default: 20,
    },
    itemKey: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      startIndex: 0,
      endIndex: 0,
    };
  },
  computed: {
    offsetedStartIndex() {
      return Math.max(this.startIndex - this.offset, 0);
    },
    offsetedEndIndex() {
      return Math.min(this.endIndex + this.offset, this.items.length - 1);
    },
    displayedItems() {
      return this.items.slice(
        this.offsetedStartIndex,
        this.offsetedEndIndex + 1
      );
    },
  },
  mounted() {
    this.computeIndexes();
  },
  methods: {
    computeIndexes() {
      const { itemHeight, items, $el } = this;
      const { scrollTop, clientHeight } = $el;

      const startIndex = Math.floor(scrollTop / itemHeight);

      const endIndex = Math.min(
        startIndex + Math.ceil(clientHeight / itemHeight),
        items.length - 1
      );

      this.startIndex = startIndex;
      this.endIndex = endIndex;
    },
  },
};
</script>

<style scoped lang="scss">
.bimdata-list {
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ccc;

  width: 100%;
  height: 100%;
  overflow: auto;

  position: relative;

  &__element {
    overflow: hidden;
    position: absolute;
    width: 100%;
  }

  &__placeholder {
    background: repeating-linear-gradient(
      #ffffff,
      #ffffff calc(var(--bimdata-list--item-height, 30px) - 1px),
      var(--color-silver, #000000)
        calc(var(--bimdata-list--item-height, 30px) - 1px),
      var(--color-silver, #000000) var(--bimdata-list--item-height, 30px)
    );
  }
}
</style>
