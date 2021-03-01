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
          /* to use only the variables, import this line */
          @import "~@bimdata/design-system/dist/scss/BIMDataVariables.scss";

          /* to use the color utilities classes add this line. BIMDataVariables are already imported in _colors.scss */
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
                  fill
                  radius
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
                  fill
                  radius
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
                  fill
                  radius
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
                  fill
                  radius
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
                  fill
                  radius
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
                  fill
                  radius
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">FILL UTILITY CLASS</div>
              <div
                class="value"
                v-clipboard:copy="`${brandColor.fill}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ brandColor.fill }}</span>
                <BIMDataButton
                  fill
                  radius
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">STROKE UTILITY CLASS</div>
              <div
                class="value"
                v-clipboard:copy="`${brandColor.stroke}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ brandColor.stroke }}</span>
                <BIMDataButton
                  fill
                  radius
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
                  fill
                  radius
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
                  fill
                  radius
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
                  fill
                  radius
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
                  fill
                  radius
                  width="55"
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
                  fill
                  radius
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
                  fill
                  radius
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">FILL UTILITY CLASS</div>
              <div
                class="value"
                v-clipboard:copy="`${variantColor.fill}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ variantColor.fill }}</span>
                <BIMDataButton
                  fill
                  radius
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">STROKE UTILITY CLASS</div>
              <div
                class="value"
                v-clipboard:copy="`${variantColor.stroke}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ variantColor.stroke }}</span>
                <BIMDataButton
                  fill
                  radius
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
                  fill
                  radius
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
                  fill
                  radius
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
                  fill
                  radius
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
                  fill
                  radius
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
                  fill
                  radius
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
                  fill
                  radius
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">FILL UTILITY CLASS</div>
              <div
                class="value"
                v-clipboard:copy="`${commonColor.fill}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ commonColor.fill }}</span>
                <BIMDataButton
                  fill
                  radius
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label">STROKE UTILITY CLASS</div>
              <div
                class="value"
                v-clipboard:copy="`${commonColor.stroke}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ commonColor.stroke }}</span>
                <BIMDataButton
                  fill
                  radius
                  width="55"
                  height="24"
                  >copy</BIMDataButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="bimdata-h3">State colors</h3>
      <div class="color-swatches">
        <div
          class="color-swatche"
          v-for="stateColor in stateColors"
          :key="stateColor.id"
        >
          <div
            class="color-swatche__header"
            :style="{
              'background-color': stateColor.hex,
              color: stateColor.textcolor,
            }"
          >
            <div class="color-swatche__header__item">
              <div class="label">Name</div>
              <div class="value">{{ stateColor.name }}</div>
            </div>
          </div>
          <div class="color-swatche__body">
            <div class="color-swatche__body__item">
              <div class="label">HEX</div>
              <div
                class="value"
                v-clipboard:copy="`${stateColor.hex}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ stateColor.hex }}</span>
                <BIMDataButton
                  fill
                  radius
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
                v-clipboard:copy="`${stateColor.rgb}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ stateColor.rgb }}</span>
                <BIMDataButton
                  fill
                  radius
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
                v-clipboard:copy="`${stateColor.scss}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ stateColor.scss }}</span>
                <BIMDataButton
                  fill
                  radius
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
                v-clipboard:copy="`${stateColor.css}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ stateColor.css }}</span>
                <BIMDataButton
                  fill
                  radius
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
                v-clipboard:copy="`${stateColor.background}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ stateColor.background }}</span>
                <BIMDataButton
                  fill
                  radius
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
                v-clipboard:copy="`${stateColor.color}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span>{{ stateColor.color }}</span>
                <BIMDataButton
                  fill
                  radius
                  width="55px"
                  height="24px"
                  >copy</BIMDataButton
                >
              </div>
            </div>
            <div class="color-swatche__body__item">
            <div class="label">FILL UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${stateColor.fill}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ stateColor.fill }}</span>
              <BIMDataButton
                fill
                radius
                width="55"
                height="24"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">STROKE UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${stateColor.stroke}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ stateColor.stroke }}</span>
              <BIMDataButton
                fill
                radius
                width="55"
                height="24"
                >copy</BIMDataButton
              >
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
          background: "bg-primary",
          color: "color-primary",
          fill: "fill-primary",
          stroke: "stroke-primary",
          textcolor: "#ffffff",
        },
        {
          name: "Secondary",
          hex: "#f9c72c",
          rgb: "249, 199, 44",
          scss: "$color-secondary",
          css: "var(--color-secondary)",
          background: "bg-secondary",
          color: "color-secondary",
          fill: "fill-secondary",
          stroke: "stroke-secondary",
          textcolor: "#2f374a",
        },
        {
          name: "Tertiary",
          hex: "#d8d8d8",
          rgb: "216, 216, 216",
          scss: "$color-tertiary",
          css: "var(--color-tertiary)",
          background: "bg-tertiary",
          color: "color-tertiary",
          fill: "fill-tertiary",
          stroke: "stroke-tertiary",
          textcolor: "#2f374a",
        },
      ],
      variantColors: [
        {
          name: "Tertiary Lighten",
          hex: "#f7f7f7",
          rgb: "247, 247, 247",
          scss: "$color-tertiary-lighten",
          css: "var(--color-tertiary-lighten)",
          background: "bg-tertiary-lighten",
          color: "color-tertiary-lighten",
          fill: "fill-tertiary-lighten",
          stroke: "stroke-tertiary-lighten",
          textcolor: "#2f374a",
        },
        {
          name: "Tertiary Dark",
          hex: "#7a7a7a",
          rgb: "123, 123, 123",
          scss: "$color-tertiary-dark",
          css: "var(--color-tertiary-dark)",
          background: "bg-tertiary-dark",
          color: "color-tertiary-dark",
          fill: "fill-tertiary-dark",
          stroke: "stroke-tertiary-dark",
          textcolor: "#ffffff",
        },
        {
          name: "Tertiary Darkest",
          hex: "#606060",
          rgb: "96, 96, 96",
          scss: "$color-tertiary-darkest",
          css: "var(--color-tertiary-darkest)",
          background: "bg-tertiary-darkest",
          color: "color-tertiary-darkest",
          fill: "fill-tertiary-darkest",
          stroke: "stroke-tertiary-darkest",
          textcolor: "#ffffff",
        },
      ],
      commonColors: [
        {
          name: "White",
          hex: "#ffffff",
          rgb: "255, 255, 255",
          scss: "var(--color-highlight)",
          css: "var(--color-highlight)",
          background: "bg-white",
          color: "color-white",
          fill: "fill-white",
          stroke: "stroke-white",
          textcolor: "#2f374a",
        },
        {
          name: "Black",
          hex: "#000000",
          rgb: "0, 0, 0",
          scss: "$color-black",
          css: "var(--color-black)",
          background: "bg-black",
          color: "color-black",
          fill: "fill-black",
          stroke: "stroke-black",
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
          background: "bg-high",
          color: "color-high",
          fill: "fill-high",
          stroke: "stroke-high",
          textcolor: "#ffffff",
        },
        {
          name: "Warning",
          hex: "#ff9100",
          rgb: "255, 145, 0",
          scss: "$color-warning",
          css: "var(--color-warning)",
          background: "bg-warning",
          color: "color-warning",
          fill: "fill-warning",
          stroke: "stroke-warning",
          textcolor: "#ffffff",
        },
        {
          name: "Success",
          hex: "#00af50",
          rgb: "0, 175, 80",
          scss: "$color-success",
          css: "var(--color-success)",
          background: "bg-success",
          color: "color-success",
          fill: "fill-success",
          stroke: "stroke-success",
          textcolor: "#ffffff",
        },
        {
          name: "Neutral",
          hex: "#205dbd",
          rgb: "32, 93, 189",
          scss: "$color-neutral",
          css: "var(--color-neutral)",
          background: "bg-neutral",
          color: "color-neutral",
          fill: "fill-neutral",
          stroke: "stroke-neutral",
          textcolor: "#ffffff",
        },
        {
          name: "Disabled",
          hex: "#bdbdbd",
          rgb: "189, 189, 189",
          scss: "$color-disabled",
          css: "var(--color-disabled)",
          background: "bg-disabled",
          color: "color-disabled",
          fill: "fill-disabled",
          stroke: "stroke-disabled",
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
// import ALERT COMPONENT STYLE
@import "../../../../web/views/Elements/Alerts/_Alerts.scss";

// import COMPONENT STYLE
@import "./_colors-keyframes.scss";
@import "./_colors-animations.scss";
@import "./_Colors.scss";
</style>
