<template>
  <div
    ref="guidedTourPortal"
    class="guided-tour-portal"
    :class="{ centeredTooltip }"
    :style="`z-index: ${zIndex}`"
    v-show="showGuidedTour"
  >
    <div v-show="showSpotlight" ref="spotlight" class="spotlight">
      <!-- Spotlight div -->
    </div>
    <div
      v-if="currentStep"
      ref="tooltip"
      class="tooltip"
      :style="{ opacity: showTooltip ? 1 : 0 }"
    >
      <div class="tooltip__header">
        <template v-if="!isStepIntro && !isStepOutro">
          <BIMDataButton
            class="tooltip__header__btn-close"
            width="0px"
            height="0px"
            ghost
            rounded
            icon
            @click="close"
          >
            <BIMDataIcon name="close" size="xxs" />
          </BIMDataButton>
        </template>
      </div>
      <div class="tooltip__content">
        <template v-if="currentStep.layout">
          <component :is="currentStep.layout" v-bind="currentStep.props" />
        </template>
        <template v-else>
          <div class="tooltip__content__title">
            {{ currentStep.props.title }}
          </div>
          <div class="tooltip__content__image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/800px-Gull_portrait_ca_usa.jpg?20101128165003"
            />
          </div>
          <div class="tooltip__content__text">
            {{ currentStep.props.content }}
          </div>
        </template>
      </div>
      <div class="tooltip__footer">
        <template v-if="isStepIntro">
          <div class="tooltip__footer__btn-skip">
            <BIMDataButton
              width="0px"
              height="0px"
              color="granite"
              @click="close"
            >
              Skip
            </BIMDataButton>
          </div>
        </template>
        <template v-else>
          <div class="tooltip__footer__ghost-element"></div>
        </template>
        <div class="tooltip__footer__step-counter">
          <span>{{ stepIndex + 1 }}</span>
          <span>/{{ steps.length }}</span>
        </div>
        <template v-if="isStepOutro">
          <div class="tooltip__footer__btn-start">
            <BIMDataButton
              width="0px"
              height="0px"
              color="granite"
              @click="close"
            >
              Commencer
            </BIMDataButton>
          </div>
        </template>
        <template v-else>
          <div class="tooltip__footer__btn-next">
            <BIMDataButton
              width="0px"
              height="0px"
              color="primary"
              fill
              radius
              :disabled="currentStep.clickable"
              @click="
                () => {
                  resetStyle();
                  next();
                }
              "
            >
              <BIMDataIcon name="chevron" size="xxs" fill color="white" />
            </BIMDataButton>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {
  scrollToTarget,
  setSpotlightPosition,
  setSpotlightPositionClickable,
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
    tours: {
      type: Array,
      default: () => [],
    },
    elementToObserve: {
      type: Object,
      default: () => {},
    },
    zIndex: {
      type: Number,
      default: () => 10000,
    },
  },
  data() {
    return {
      steps: [],
      showGuidedTour: false,
      showSpotlight: true,
      showTooltip: false,
      stepIndex: 0,
    };
  },
  computed: {
    currentStep() {
      return this.steps[this.stepIndex];
    },
    nextStep() {
      return this.steps[this.stepIndex + 1];
    },
    centeredTooltip() {
      return this.currentStep && !this.currentStep.target;
    },
    isStepIntro() {
      return this.stepIndex === 0;
    },
    isStepOutro() {
      return this.stepIndex === this.steps.length - 1;
    },
  },
  watch: {
    steps() {
      this.stepIndex = 0;
    },
    async currentStep(step) {
      if (!step) return;

      let target;

      if (step.target) {
        target = this.getDomElements(step.target);
      } else {
        this.displayCenteredTooltip();
        return;
      }

      await scrollToTarget(target, this.elementToObserve);

      if (step.clickable) {
        setSpotlightPositionClickable(target, this.$refs.guidedTourPortal);
        this.clickListener(target);
      } else {
        setSpotlightPosition(target, this.$refs.spotlight);
        this.showSpotlight = true;
      }

      setTooltipPosition(target, this.$refs.tooltip);
      this.showTooltip = true;
    },
  },
  created() {
    this.mutationObserver = new MutationObserver(this.handleClickedStep);
  },
  mounted() {
    this.openGuidedTour(this.tours[0].steps);
  },
  unmounted() {
    this.mutationObserver.disconnect();
  },
  destroyed() {
    this.mutationObserver.disconnect();
  },
  methods: {
    openGuidedTour(arg) {
      this.steps = arg.map(step => {
        return {
          ...step,
          layout: step.layout ? Object.freeze(step.layout) : null,
        };
      });
      this.showGuidedTour = true;
    },
    getDomElements(target) {
      if (Array.isArray(target)) {
        return target.map(t => document.querySelector(`[data-guide=${t}]`));
      } else if (typeof target === "string") {
        return document.querySelector(`[data-guide=${target}]`);
      }
    },
    closeGuidedTour() {
      this.showGuidedTour = false;
      this.steps = [];
    },
    next() {
      this.stepIndex++;
    },
    close() {
      this.showTooltip = false;
      this.closeGuidedTour();
      this.$emit("show-guided-tour", false);
    },
    resetStyle() {
      this.showTooltip = false;
      this.showSpotlight = false;

      // when step is clickable
      this.$refs.guidedTourPortal.style.removeProperty("background-color");
      this.$refs.guidedTourPortal.style.removeProperty("clip-path");

      // when step isn't clickable
      this.$refs.tooltip.style.boxShadow = "0 2px 10px 0 rgba(0, 0, 0, 0.5)";
      this.$refs.tooltip.style.removeProperty("left");
      this.$refs.tooltip.style.removeProperty("top");
    },
    displayCenteredTooltip() {
      this.showTooltip = true;
      this.$refs.tooltip.style.boxShadow =
        "0 0 0, 0 0 0 10000vmax rgba(0,0,0,0.5)";
    },
    clickListener(target) {
      target.addEventListener(
        "click",
        () => {
          this.resetStyle();
          if (this.nextStep.target) {
            this.mutationObserver.observe(this.elementToObserve, {
              childList: true,
              subtree: true,
            });
          } else {
            this.next();
          }
        },
        { once: true }
      );
    },
    handleClickedStep() {
      const nextTarget = this.elementToObserve.querySelector(
        `[data-guide=${this.nextStep.target}]`
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
