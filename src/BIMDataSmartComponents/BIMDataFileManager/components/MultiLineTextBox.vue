<template>
  <div class="multi-line-text-box" style="style">
    <div class="multi-line-text-box__content">
      <template v-if="needEllipsis">
        <div class="multi-line-text-box__content__head">
          <span>
            {{ text }}
          </span>
        </div>
        <div
          class="multi-line-text-box__content__tail"
          :style="`height:${lineHeight * (lines - 1)}px`"
        >
          <div class="multi-line-text-box__content__tail__text">
            <span>{{ text }} </span>
          </div>
          <div class="multi-line-text-box__content__tail__ellipsis">
            ...
          </div>
        </div>
      </template>
      <span v-else class="multi-line-text-box__content__full">
        {{ text }}
      </span>
    </div>
    <span class="multi-line-text-box__ghost" ref="ghost">
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    lines: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      lineCount: 0,
      lineHeight: 0,
    };
  },
  computed: {
    needEllipsis() {
      return this.lineCount > this.lines;
    },
    style() {
      return {
        "--textbox-height": `${this.lineHeight}px`,
        "--textbox-lines": this.lines,
      };
    },
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(this.onResize);
    this.resizeObserver.observe(this.$el);
  },
  destroyed() {
    this.resizeObserver && this.resizeObserver.disconnect();
  },
  methods: {
    onResize() {
      const width = this.$el.getBoundingClientRect().width;
      const {
        width: requestedWidth,
        height: lineHeight,
      } = this.$refs.ghost.getBoundingClientRect();

      this.lineCount = Math.ceil((requestedWidth * 1.1) / width); // 10% needed to handle edge cases
      this.lineHeight = lineHeight;
    },
  },
};
</script>

<style lang="scss">
.multi-line-text-box {
  overflow: hidden;
  position: relative;
  &__ghost {
    left: 0;
    position: absolute;
    visibility: hidden;
    white-space: nowrap;
  }

  &__content {
    position: relative;
    height: calc(var(--textbox-height, 14px) * var(--textbox-lines, 3));

    &__tail {
      word-break: break-all;
      position: absolute;
      bottom: 0px;
      left: 0px;
      right: 0px;
      background-color: var(--color-white);
      overflow: hidden;
      &__ellipsis {
        position: absolute;
        top: 0px;
        left: 0px;

        background-color: white;
      }
      &__text {
        position: absolute;
        bottom: 0px;
      }
    }

    &__full {
      word-break: break-all;
    }
  }
}
</style>
