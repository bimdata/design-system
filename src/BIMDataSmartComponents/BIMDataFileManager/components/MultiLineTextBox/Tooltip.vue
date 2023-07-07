<template>
  <div class="multi-line-textbox-tooltip">
    <div class="multi-line-textbox-tooltip__content">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.multi-line-textbox-tooltip {
  width: 100%;
  &__content {
    color: var(--color-white);
    background-color: var(--color-primary);
    padding: calc(var(--spacing-unit) / 2);
    border-radius: 6px;

    text-align: center;
    word-break: break-all;

    position: absolute;
    left: 0px;
    right: 0px;
    z-index: 1;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -8px;
    border: var(--color-primary) solid 8px;
    transform: rotate(45deg);
    left: calc(50% - 8px);
  }
}
</style>
