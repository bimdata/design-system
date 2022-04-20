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
      <div class="tooltip__progress-bar">
        <div
          class="tooltip__progress-bar__step"
          v-for="(step, index) of steps"
          :key="index"
          :style="{
            width: `calc(100% / ${steps.length})`,
            backgroundColor:
              steps.indexOf(currentStep) >= index
                ? 'var(--color-secondary)'
                : '',
          }"
        ></div>
      </div>
      <div class="tooltip__box">
        <div class="tooltip__box__header">
          <template v-if="!isStepIntro && !isStepOutro">
            <BIMDataButton
              class="tooltip__box__header__btn-close"
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
        <div class="tooltip__box__content">
          <template v-if="currentStep.layout">
            <component :is="currentStep.layout" v-bind="currentStep.props" />
          </template>
          <template v-else>
            <div class="tooltip__box__content__title">
              {{ currentStep.props.title }}
            </div>
            <div
              class="tooltip__box__content__image"
              :style="{
                background: `var(--color-silver-light) url(${currentStep.props.img}) no-repeat ${currentStep.props.imgPosition} / ${currentStep.props.imgSize}`,
              }"
            />
            <div class="tooltip__box__content__text">
              {{ currentStep.props.content }}
            </div>
          </template>
        </div>
        <div class="tooltip__box__footer">
          <template v-if="isStepIntro">
            <div class="tooltip__box__footer__btn-skip">
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
            <div class="tooltip__box__footer__ghost-element"></div>
          </template>
          <div class="tooltip__box__footer__step-counter">
            <span>{{ stepIndex + 1 }}</span>
            <span>/{{ steps.length }}</span>
          </div>
          <template v-if="isStepOutro">
            <div class="tooltip__box__footer__btn-start">
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
            <div class="tooltip__box__footer__btn-next">
              <BIMDataButton
                width="0px"
                height="0px"
                color="primary"
                fill
                radius
                @click="clickNext"
              >
                <BIMDataIcon name="chevron" size="xxs" fill color="white" />
              </BIMDataButton>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    tours: {
      type: Array,
      default: () => [],
    },
    tourToDisplay: {
      type: String,
      default: () => "",
    },
    elementToObserve: {
      type: [Object, HTMLElement],
      default: () => {},
    },
    zIndex: {
      type: Number,
      default: () => 10000,
    },
  },
  emits: ["completed-tour"],
  data() {
    return {
      steps: [],
      showGuidedTour: false,
      currentTarget: null,
      showSpotlight: true,
      showTooltip: false,
      stepIndex: 0,
      console,
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
      try {
        if (!step) return;

        if (step.target) {
          this.currentTarget = this.getDomElements(step);
        } else {
          this.displayCenteredTooltip();
          return;
        }

        if (step.clickable) {
          this.clickListener();
        }

        scrollToTarget(this.currentTarget.element, this.elementToObserve);
        setSpotlightPosition(this.currentTarget.element, this.$refs.spotlight);
        setTooltipPosition(this.currentTarget.element, this.$refs.tooltip);

        this.showSpotlight = true;
        this.showTooltip = true;
      } catch {
        this.closeGuidedTour();
      }
    },
  },
  created() {
    this.mutationObserver = new MutationObserver(this.handleClickedStep);
  },
  mounted() {
    this.openGuidedTour(
      this.tours.find(tour => tour.name === this.tourToDisplay).steps
    );
  },
  unmounted() {
    this.mutationObserver.disconnect();
  },
  destroyed() {
    this.mutationObserver.disconnect();
  },
  methods: {
    clickNext() {
      if (this.currentStep.clickable) {
        (
          this.currentTarget.elementToClick || this.currentTarget.element
        ).click();
      } else {
        this.next();
      }
      this.resetSettings();
    },
    openGuidedTour(arg) {
      this.steps = arg.map(step => {
        return {
          ...step,
          layout: step.layout ? Object.freeze(step.layout) : null,
        };
      });
      this.showGuidedTour = true;
    },
    getDomElements(step, elementToWatch = document) {
      const { target, targetDetail, targetToClick, targetToClickDetail } = step;

      let element, elementToClick;

      if (Array.isArray(target)) {
        element = target.map(t =>
          elementToWatch.querySelector(`[data-guide=${t}]`)
        );
      } else if (typeof target === "string") {
        element = elementToWatch.querySelector(
          `[data-guide=${target}] ${targetDetail ? targetDetail : ""}`
        );
      }

      if (targetToClick) {
        elementToClick = elementToWatch.querySelector(
          `[data-guide-click=${targetToClick}] ${
            targetToClickDetail ? targetToClickDetail : ""
          }`
        );
      }

      return {
        element,
        elementToClick,
      };
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
      this.$emit("completed-tour", this.tourToDisplay);
    },
    resetSettings() {
      this.currentTarget = null;

      this.showSpotlight = false;
      this.showTooltip = false;

      this.$refs.tooltip.style.boxShadow = "0 2px 10px 0 rgba(0, 0, 0, 0.5)";
      this.$refs.tooltip.style.removeProperty("left");
      this.$refs.tooltip.style.removeProperty("top");
    },
    displayCenteredTooltip() {
      this.showTooltip = true;
      if (this.$refs.tooltip) {
        this.$refs.tooltip.style.boxShadow =
          "0 0 0, 0 0 0 10000vmax rgba(0,0,0,0.5)";
      }
    },
    clickListener() {
      (
        this.currentTarget.elementToClick || this.currentTarget.element
      ).addEventListener(
        "click",
        () => {
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
      const { element } = this.getDomElements(
        this.nextStep,
        this.elementToObserve
      );

      const isAnHTMLElement = element instanceof HTMLElement;
      const isAnArrayOfHTMLElement =
        Array.isArray(element) &&
        element.every(elem => elem instanceof HTMLElement);

      if (isAnHTMLElement || isAnArrayOfHTMLElement) {
        this.next();
        this.mutationObserver.disconnect();
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataGuidedTour.scss"></style>
