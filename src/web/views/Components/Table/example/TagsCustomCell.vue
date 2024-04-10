<template>
  <div>
    <span
      v-for="tag in tags"
      :key="tag.name"
      :style="{
        borderColor: tag.color,
        color: tag.color,
        backgroundColor: tag.color + 15,
        marginRight: '6px',
      }"
    >
      {{ tag.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  border: 1px solid;
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 12px;
}
</style>
