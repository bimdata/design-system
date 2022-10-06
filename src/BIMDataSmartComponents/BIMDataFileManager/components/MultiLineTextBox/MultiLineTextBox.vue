<template>
  <div
    class="multi-line-text-box"
    :style="style"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
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
      <span class="multi-line-text-box__content__full" v-else>
        {{ text }}
      </span>
      <span class="multi-line-text-box__ghost" ref="ghost">
        {{ text }}
      </span>
    </div>
    <Tooltip
      @click.native.stop
      v-if="tooltipDisplayed"
      :text="text"
      class="multi-line-text-box__tooltip"
    />
  </div>
</template>

<script>
import Tooltip from "./Tooltip.vue";

export default {
  components: {
    Tooltip,
  },
  props: {
    text: {
      type: String,
      default: "",
    },
    lines: {
      type: Number,
      default: 3,
    },
    lineHeight: {
      type: Number,
      default: 14,
    },
  },
  data() {
    return {
      needEllipsis: false,
      hover: false,
    };
  },
  computed: {
    style() {
      return {
        "--textbox-line-height": `${this.lineHeight}px`,
        "--textbox-lines": this.lines,
      };
    },
    tooltipDisplayed() {
      return this.needEllipsis && this.hover;
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
      if (!this.$refs.ghost) return;

      const height = this.lines * this.lineHeight;
      const { height: neededHeight } = this.$refs.ghost.getBoundingClientRect();

      this.needEllipsis = neededHeight > height;
    },
  },
};
</script>

<style lang="scss">
.multi-line-text-box {
  position: relative;
  line-height: var(--textbox-line-height, 14px);

  &__tooltip {
    position: absolute;
    top: calc(
      calc(var(--textbox-line-height, 14px) * var(--textbox-lines, 3)) + 10px
    );
  }

  &__ghost {
    word-break: break-all;
    top: 0;
    right: 0;
    left: 0;
    position: absolute;
    visibility: hidden;
  }

  &__content {
    position: relative;
    overflow: hidden;

    height: calc(var(--textbox-line-height, 14px) * var(--textbox-lines, 3));

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
        background-color: var(--color-white);
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
