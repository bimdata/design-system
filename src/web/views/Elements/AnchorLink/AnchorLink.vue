<template>
  <nav class="navigation inline-flex">
    <a
      @click="skipToTarget(elem)"
      class="anchor-link"
      v-for="elem of navElements"
      :key="elem"
      :target="elem"
    >
      {{ elem }}
    </a>
  </nav>
</template>

<script>
export default {
  props: {
    navElements: {
      type: Array,
      required: true,
    },
  },
  methods: {
    skipToTarget(elem) {
      const targetElem = document.getElementById(elem);
      targetElem.focus();
      targetElem.scrollIntoView();
    },
  },
};
</script>

<style scoped lang="scss" src="./_AnchorLink.scss"></style>
