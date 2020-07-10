<template>
  <main class="article colors">
    <div class="article-wrapper">
      <div class="colors-animations">
        <div class="colors-animations__box colors-animations__box1"></div>
        <div class="colors-animations__box colors-animations__box2"></div>
        <div class="colors-animations__box colors-animations__box3"></div>
      </div>
      <h2 class="bimdata-h2 primary-font-bold">{{ $route.name }}</h2>
      <p class="bimdata-text">
        For maintainability, please use these instead of hardcoding color
        values.
      </p>
      <Code language="css">
        <pre>
          // to use only the variables, import this line
          @import "~@bimdata/design-system/dist/scss/BIMDataVariables.scss";

          // to use the color utilities classes add this line. BIMDataVariables are already imported in _colors.scss
          @import "~@bimdata/design-system/dist/scss/utilities/_colors.scss";
        </pre>
      </Code>
      <h3 class="bimdata-h3">Brand colors</h3>
      <div class="color-swatches">
        <div
          class="color-swatche"
          v-for="brandColor in brandColors"
          :key="brandColor.id"
        >
          <div
            class="color-swatche__header"
            :style="{
              'background-color': brandColor.hex,
              color: brandColor.textcolor,
            }"
          >
            <div class="color-swatche__header__item">
              <div class="label">Name</div>
              <div class="value">{{ brandColor.name }}</div>
            </div>
          </div>
          <div class="color-swatche__body">
            <div class="color-swatche__body__item">
              <div class="label">HEX</div>
              <div
                class="value"
                v-clipboard:copy="`${brandColor.hex}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span> {{ brandColor.hex }} </span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">RGB</div>
              <div
                class="value"
                v-clipboard:copy="`${brandColor.rgb}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ brandColor.rgb }}</span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">SCSS</div>
              <div
                class="value"
                v-clipboard:copy="`${brandColor.scss}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ brandColor.scss }}</span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">CSS</div>
              <div
                class="value"
                v-clipboard:copy="`${brandColor.css}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ brandColor.css }}</span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">BACKGROUND UTILITY CLASS</div>
              <div
                class="value"
                v-clipboard:copy="`${brandColor.background}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ brandColor.background }}</span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">COLOR UTILITY CLASS</div>
              <div
                class="value"
                v-clipboard:copy="`${brandColor.color}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ brandColor.color }}</span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="bimdata-h3">Variant colors</h3>
      <div class="color-swatches">
        <div
          class="color-swatche"
          v-for="variantColor in variantColors"
          :key="variantColor.id"
        >
          <div
            class="color-swatche__header"
            :style="{
              'background-color': variantColor.hex,
              color: variantColor.textcolor,
            }"
          >
            <div class="color-swatche__header__item">
              <div class="label">Name</div>
              <div class="value">{{ variantColor.name }}</div>
            </div>
          </div>
          <div class="color-swatche__body">
            <div class="color-swatche__body__item">
              <div class="label">HEX</div>
              <div
                class="value"
                v-clipboard:copy="`${variantColor.hex}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ variantColor.hex }}</span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">RGB</div>
              <div
                class="value"
                v-clipboard:copy="`${variantColor.rgb}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                {{ variantColor.rgb }}
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">SCSS</div>
              <div
                class="value"
                v-clipboard:copy="`${variantColor.scss}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                {{ variantColor.scss }}
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">CSS</div>
              <div
                class="value"
                v-clipboard:copy="`${variantColor.css}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                {{ variantColor.css }}
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">BACKGROUND UTILITY CLASS</div>
              <div
                class="value"
                v-clipboard:copy="`${variantColor.background}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ variantColor.background }}</span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">COLOR UTILITY CLASS</div>
              <div
                class="value"
                v-clipboard:copy="`${variantColor.color}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ variantColor.color }}</span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="bimdata-h3">Common colors</h3>
      <div class="color-swatches">
        <div
          class="color-swatche"
          v-for="commonColor in commonColors"
          :key="commonColor.id"
        >
          <div
            class="color-swatche__header"
            :style="{
              'background-color': commonColor.hex,
              color: commonColor.textcolor,
            }"
          >
            <div class="color-swatche__header__item">
              <div class="label">Name</div>
              <div class="value">{{ commonColor.name }}</div>
            </div>
          </div>
          <div class="color-swatche__body">
            <div class="color-swatche__body__item">
              <div class="label">HEX</div>
              <div
                class="value"
                v-clipboard:copy="`${commonColor.hex}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ commonColor.hex }}</span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">RGB</div>
              <div
                class="value"
                v-clipboard:copy="`${commonColor.rgb}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ commonColor.rgb }}</span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">SCSS</div>
              <div
                class="value"
                v-clipboard:copy="`${commonColor.scss}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ commonColor.scss }}</span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">CSS</div>
              <div
                class="value"
                v-clipboard:copy="`${commonColor.css}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ commonColor.css }}</span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">BACKGROUND UTILITY CLASS</div>
              <div
                class="value"
                v-clipboard:copy="`${commonColor.background}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ commonColor.background }}</span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">COLOR UTILITY CLASS</div>
              <div
                class="value"
                v-clipboard:copy="`${commonColor.color}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ commonColor.color }}</span>
                <BIMDataButton
                  class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="state-colors">
        <h3 class="bimdata-h3">State colors</h3>
        <div class="color-swatches">
          <div
            class="color-swatche"
            v-for="alertsColor in stateColors"
            :key="alertsColor.id"
          >
            <div
              class="color-swatche__header"
              :style="{
                'background-color': alertsColor.hex,
                color: alertsColor.textcolor,
              }"
            >
              <div class="color-swatche__header__item">
                <div class="label">Name</div>
                <div class="value">{{ alertsColor.name }}</div>
              </div>
            </div>
            <div class="color-swatche__body">
              <div class="color-swatche__body__item">
                <div class="label">HEX</div>
                <div
                  class="value"
                  v-clipboard:copy="`${alertsColor.hex}`"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                >
                  <span>{{ alertsColor.hex }}</span>
                  <BIMDataButton
                    class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                    width="55px"
                    height="24px"
                    >copy</BIMDataButton
                  >
                </div>
              </div>
              <div class="color-swatche__body__item">
                <div class="label">RGB</div>
                <div
                  class="value"
                  v-clipboard:copy="`${alertsColor.rgb}`"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                >
                  <span>{{ alertsColor.rgb }}</span>
                  <BIMDataButton
                    class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                    width="55px"
                    height="24px"
                    >copy</BIMDataButton
                  >
                </div>
              </div>
              <div class="color-swatche__body__item">
                <div class="label">SCSS</div>
                <div
                  class="value"
                  v-clipboard:copy="`${alertsColor.scss}`"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                >
                  <span>{{ alertsColor.scss }}</span>
                  <BIMDataButton
                    class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                    width="55px"
                    height="24px"
                    >copy</BIMDataButton
                  >
                </div>
              </div>
              <div class="color-swatche__body__item">
                <div class="label">CSS</div>
                <div
                  class="value"
                  v-clipboard:copy="`${alertsColor.css}`"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                >
                  <span>{{ alertsColor.css }}</span>
                  <BIMDataButton
                    class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                    width="55px"
                    height="24px"
                    >copy</BIMDataButton
                  >
                </div>
              </div>
              <div class="color-swatche__body__item">
                <div class="label">BACKGROUND UTILITY CLASS</div>
                <div
                  class="value"
                  v-clipboard:copy="`${alertsColor.background}`"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                >
                  <span>{{ alertsColor.background }}</span>
                  <BIMDataButton
                    class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                    width="55px"
                    height="24px"
                    >copy</BIMDataButton
                  >
                </div>
              </div>
              <div class="color-swatche__body__item">
                <div class="label">COLOR UTILITY CLASS</div>
                <div
                  class="value"
                  v-clipboard:copy="`${alertsColor.color}`"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                >
                  <span>{{ alertsColor.color }}</span>
                  <BIMDataButton
                    class="bimdata-btn__fill bimdata-btn__fill--default bimdata-btn__radius"
                    width="55px"
                    height="24px"
                    >copy</BIMDataButton
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        class="alerts"
        :class="{
          success: alertType === 'success',
          error: alertType === 'error',
        }"
        v-if="alerts"
      >
        {{ message }}
      </div>
    </transition>
  </main>
</template>

<script>
import BIMDataButton from "../../../../../src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import Code from "../../Elements/Code/Code.vue";

export default {
  components: {
    BIMDataButton,
    Code,
  },
  data() {
    return {
      alerts: false,
      alertType: null,
      message: "",
      brandColors: [
        {
          name: "Primary",
          hex: "#2f374a",
          rgb: "47, 55, 74",
          scss: "$color-primary",
          css: "var(--color-primary)",
          background: ".bg-primary",
          color: ".color-primary",
          textcolor: "#ffffff",
        },
        {
          name: "Secondary",
          hex: "#f9c72c",
          rgb: "249, 199, 44",
          scss: "$color-secondary",
          css: "var(--color-secondary)",
          background: ".bg-secondary",
          color: ".color-secondary",
          textcolor: "#2f374a",
        },
        {
          name: "Tertiary",
          hex: "#d8d8d8",
          rgb: "216, 216, 216",
          scss: "$color-tertiary",
          css: "var(--color-tertiary)",
          background: ".bg-tertiary",
          color: ".color-tertiary",
          textcolor: "#2f374a",
        },
      ],
      variantColors: [
        {
          name: "Tertiary Lightest",
          hex: "#f7f7f7",
          rgb: "247, 247, 247",
          scss: "$color-tertiary-lightest",
          css: "var(--color-tertiary-lightest)",
          background: ".bg-tertiary-lightest",
          color: ".color-tertiary-lightest",
          textcolor: "#2f374a",
        },
        {
          name: "Tertiary Dark",
          hex: "#7a7a7a",
          rgb: "123, 123, 123",
          scss: "$color-tertiary-darkest",
          css: "var(--color-tertiary-dark)",
          background: ".bg-tertiary-dark",
          color: ".color-tertiary-dark",
          textcolor: "#ffffff",
        },
        {
          name: "Tertiary Darkest",
          hex: "#606060",
          rgb: "96, 96, 96",
          scss: "$color-tertiary-darkestest",
          css: "var(--color-tertiary-darkest)",
          background: ".bg-tertiary-darkest",
          color: ".color-tertiary-darkest",
          textcolor: "#ffffff",
        },
      ],
      commonColors: [
        {
          name: "White",
          hex: "#ffffff",
          rgb: "255, 255, 255",
          scss: "$color-white",
          css: "var(--color-white)",
          background: ".bg-white",
          color: ".color-white",
          textcolor: "#2f374a",
        },
        {
          name: "Black",
          hex: "#000000",
          rgb: "0, 0, 0",
          scss: "$color-black",
          css: "var(--color-black)",
          background: ".bg-black",
          color: ".color-black",
          textcolor: "#ffffff",
        },
      ],
      stateColors: [
        {
          name: "High",
          hex: "#ff3d1e",
          rgb: "255, 61, 30",
          scss: "$color-high",
          css: "var(--color-high)",
          background: ".bg-high",
          color: ".color-high",
          textcolor: "#ffffff",
        },
        {
          name: "Warning",
          hex: "#ff9100",
          rgb: "255, 145, 0",
          scss: "$color-warning",
          css: "var(--color-warning)",
          background: ".bg-warning",
          color: ".color-warning",
          textcolor: "#ffffff",
        },
        {
          name: "Success",
          hex: "#00af50",
          rgb: "0, 175, 80",
          scss: "$color-success",
          css: "var(--color-success)",
          background: ".bg-success",
          color: ".color-success",
          textcolor: "#ffffff",
        },
        {
          name: "Neutral",
          hex: "#205dbd",
          rgb: "32, 93, 189",
          scss: "$color-neutral",
          css: "var(--color-neutral)",
          background: ".bg-neutral",
          color: ".color-neutral",
          textcolor: "#ffffff",
        },
        {
          name: "Disabled",
          hex: "#bdbdbd",
          rgb: "123, 123, 123",
          scss: "$color-disabled",
          css: "var(--color-disabled)",
          background: ".bg-disabled",
          color: ".color-disabled",
          textcolor: "#ffffff",
        },
      ],
    };
  },
  methods: {
    onCopy(e) {
      this.alerts = true;
      this.message = e.text + " " + "copied !";
      this.alertType = "success";
      setTimeout(() => {
        this.alerts = false;
      }, 3000);
    },
    onError() {
      this.alerts = true;
      this.message = "Failed to copy texts";
      this.alertType = "error";
      setTimeout(() => {
        this.alerts = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
// import BIMDATA VARIABLES
@import "../../../../assets/scss/_BIMDataVariables.scss";

// import BIMDATA MIXINS
@import "../../../../assets/scss/mixins/_font-size.scss";

// import ALERT COMPONENT STYLE
@import "../../../../web/views/Elements/Alerts/_Alerts.scss";

// import COMPONENT STYLE
@import "./_colors-keyframes.scss";
@import "./_colors-animations.scss";
@import "./_Colors.scss";
</style>
