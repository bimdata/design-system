<template>
  <span
    :class="[column.defaultSortOrder === 'asc' ? 'asc' : 'desc', 'm-l-6']"
    @mousedown.prevent
  >
    <BIMDataButton
      color="primary"
      ghost
      rounded
      icon
      :class="{ active: active }"
      @click="toggleActive"
    >
      <BIMDataIconCaret
        v-if="column.defaultSortOrder === 'desc'"
        :rotate="180"
        size="xxxs"
        fill
        color="default"
      />
      <BIMDataIconCaret
        v-if="column.defaultSortOrder === 'asc'"
        size="xxxs"
        fill
        color="default"
      />
    </BIMDataButton>
  </span>
</template>

<script>
export default {
  props: {
    column: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const toggleActive = () => {
      emit("set-active", props.index);
    };
    return {
      toggleActive,
    };
  },
};
</script>

<style scoped lang="scss">
span {
  cursor: pointer;
}
.active {
  background-color: #e0eef9;
}
</style>
