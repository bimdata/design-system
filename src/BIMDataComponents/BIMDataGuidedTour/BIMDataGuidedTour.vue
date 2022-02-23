<template>
  <div class="guided-tour-portal" v-show="showGuidedTour">
    <div ref="spotlight" class="spotlight">
      <!-- Spotlight div -->
    </div>
    <div
      v-if="currentStep"
      ref="tooltip"
      class="tooltip"
      :style="{ opacity: showTooltip ? 1 : 0 }"
    >
      <div class="tooltip__header">
        <BIMDataButton
          class="tooltip__header__btn-close"
          ghost
          rounded
          icon
          @click="close"
        >
          <BIMDataIcon name="close" size="xxs" />
        </BIMDataButton>
      </div>
      <div class="tooltip__content">
        <template v-if="currentStep.component">
          <component :is="currentStep.component" />
        </template>
        <template v-else>
          <div class="tooltip__content__image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/800px-Gull_portrait_ca_usa.jpg?20101128165003"
            />
          </div>
          <div class="tooltip__content__text">
            {{ currentStep.content }}
          </div>
        </template>
      </div>
      <div class="tooltip__footer">
        <BIMDataButton
          class="tooltip__footer__btn-prev"
          color="primary"
          fill
          radius
          :disabled="stepIndex === 0 || currentStep.clickable"
          @click="prev"
        >
          <BIMDataIcon
            name="chevron"
            size="xxs"
            :rotate="180"
            fill
            color="white"
          />
        </BIMDataButton>
        <div class="tooltip__footer__step-counter">
          <span>{{ stepIndex }}</span
          ><span>/{{ steps.length }}</span>
        </div>
        <BIMDataButton
          class="tooltip__footer__btn-next"
          color="primary"
          style="padding: 10px;"
          fill
          radius
          :disabled="stepIndex === steps.length - 1 || currentStep.clickable"
          @click="next"
        >
          <BIMDataIcon name="chevron" size="xxs" fill color="white" />
        </BIMDataButton>
      </div>
    </div>
  </div>
</template>

<script>
import { markRaw } from "vue";

import {
  scrollToTarget,
  setSpotlightPosition,
  setTooltipPosition,
} from "./guided-tour-utils.js";

import BIMDataButton from "../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataIcon from "../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataIcon,
  },
  props: {
    inputSteps: {
      type: Array,
      default: () => [],
    },
    elementToObserve: {
      type: Object,
    },
  },
  data() {
    return {
      steps: [],
      showGuidedTour: false,
      showTooltip: false,
      stepIndex: 0,
      mutationObserver: new MutationObserver(this.handleClickedStep),
    };
  },
  computed: {
    currentStep() {
      return this.steps[this.stepIndex];
    },
  },
  watch: {
    steps() {
      this.stepIndex = 0;
    },
    async currentStep(step) {
      if (!step) return;

      this.showTooltip = false;

      const target = document.querySelector(step.target);

      if (step.clickable) {
        target.style.zIndex = "11000";
        target.addEventListener(
          "click",
          () => {
            target.style.zIndex = "unset";
            this.mutationObserver.observe(this.elementToObserve, {
              childList: true,
              subtree: true,
            });
          },
          { once: true }
        );
      }

      await scrollToTarget(target);

      setSpotlightPosition(target, this.$refs.spotlight);
      setTooltipPosition(target, this.$refs.tooltip);
      this.showTooltip = true;
    },
  },
  mounted() {
    this.openGuidedTour(this.inputSteps);
  },
  methods: {
    openGuidedTour(arg) {
      this.steps = arg.map(step =>
        step.component ? { ...step, component: markRaw(step.component) } : step
      );
      this.showGuidedTour = true;
    },
    closeGuidedTour() {
      this.showGuidedTour = false;
      this.steps = [];
    },
    prev() {
      this.stepIndex--;
    },
    next() {
      this.stepIndex++;
    },
    close() {
      this.showTooltip = false;

      // Execute step close callback
      if (this.currentStep.hooks && this.currentStep.hooks.onClose) {
        this.currentStep.hooks.onClose();
      }

      this.closeGuidedTour();
      this.$emit("show-guided-tour", false);
    },
    handleClickedStep() {
      const nextTarget = document.querySelector(
        this.steps[this.stepIndex + 1].target
      );

      if (nextTarget) {
        this.next();
        this.mutationObserver.disconnect();
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataGuidedTour.scss"></style>
