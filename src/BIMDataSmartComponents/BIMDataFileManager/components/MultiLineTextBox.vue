<template>
  <div class="multi-line-text-box" :style="style">
    <BIMDataTooltip
      :message="text"
      className="bimdata-tooltip--bottom bimdata-tooltip--primary bimdata-tooltip--arrow"
      v-if="needEllipsis"
    >
      <template #content>
        <div class="multi-line-text-box__content">
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
        </div>
      </template>
    </BIMDataTooltip>
    <div v-else class="multi-line-text-box__content">
      <span class="multi-line-text-box__content__full">
        {{ text }}
      </span>
    </div>
    <span class="multi-line-text-box__ghost" ref="ghost">
      {{ text }}
    </span>
  </div>
</template>

<script>
import BIMDataTooltip from "../../../BIMDataComponents/BIMDataTooltip/BIMDataTooltip.vue";

export default {
  components: {
    BIMDataTooltip,
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
      lineCount: 0,
    };
  },
  computed: {
    needEllipsis() {
      return this.lineCount > this.lines;
    },
    style() {
      return {
        "--textbox-line-height": `${this.lineHeight}px`,
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
      } = this.$refs.ghost.getBoundingClientRect();

      this.lineCount = Math.ceil((requestedWidth * 1.1) / width); // 10% needed to handle edge cases
    },
  },
};
</script>

<style lang="scss">
.multi-line-text-box {
  position: relative;
  line-height: var(--textbox-line-height, 14px);

  &__ghost {
    left: 0;
    position: absolute;
    visibility: hidden;
    white-space: nowrap;
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
