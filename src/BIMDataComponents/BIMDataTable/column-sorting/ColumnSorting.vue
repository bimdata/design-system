<template>
  <span
    :class="[sortOrder === 'asc' ? 'asc' : 'desc', 'm-l-6']"
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
        :rotate="sortOrder === 'desc' ? 180 : 0"
        size="xxxs"
        fill
        color="default"
      />
    </BIMDataButton>
  </span>
</template>

<script>
// Components
import BIMDataButton from "../../BIMDataButton/BIMDataButton.vue";
import BIMDataIconCaret from "../../BIMDataIcon/BIMDataIconStandalone/BIMDataIconCaret.vue";
export default {
  components: {
    BIMDataButton,
    BIMDataIconCaret,
  },
  props: {
    sortOrder: {
      type: String,
      required: true,
      validator: value => ["asc", "desc"].includes(value),
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

<style scoped>
span {
  cursor: pointer;
}
.active {
  background-color: #e0eef9;
}
</style>
