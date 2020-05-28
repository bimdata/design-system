<template>
  <a @click="skipToTarget" class="anchor-link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      required: true
    },
  },
  computed: {
    targetElement() {
      return document.getElementById(this.target);
    },
  },
  methods: {
    skipToTarget() {
      this.targetElement.focus();
      this.targetElement.scrollIntoView();
    }
  },
};
</script>

<style lang="scss" scoped>
.anchor-link{
  margin-right: 12px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
</style>
